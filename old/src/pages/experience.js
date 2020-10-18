import React from "react"
import { graphql } from "gatsby"
import { Segment, Header, Progress, Table } from "semantic-ui-react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const eduQuery = graphql`
  query {
    allJob {
      edges {
        node {
          margin
          name
          title
          p
          indication
          time
          work
        }
      }
    }
  }
`

class Experience extends React.Component {
  render () {
    const { data } = this.props
    const jobs = data.allJob.edges

    return (  
      <Layout>
        <SEO title="Experience" />
        <Segment>
          <Header as='h1' style={{textAlign:"center"}}> Experience </Header>
        </Segment>


        {jobs.map(({ node }) => {
          return (
            <div>
              <Segment attached='top' style={{marginTop: node.margin}}>
                <Header as='h2' style={{textAlign:"center"}}> { node.name } </Header>
                <Header as='h3' style={{textAlign:"center"}}> { node.title } </Header>

                <Progress percent={ node.p } indicating={ node.indication } style={{marginTop:`25px`}}> { node.time } </Progress>

              </Segment>

              <Segment attached='bottom'>
                <Table celled>
                  <Table.Header>
                    { node.work.map(activity => (
                      <Table.Row>
                        <Table.HeaderCell>
                          { activity }
                        </Table.HeaderCell>
                      </Table.Row>
                    ))}
                  </Table.Header>
                </Table>
              </Segment>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default Experience
