import React from "react"
import { graphql } from "gatsby"
import { Segment, Header, Progress, Table } from "semantic-ui-react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const eduQuery = graphql`
  query {
    allSchool {
      edges {
        node {
          margin
          name
          degree
          p
          year
          highlight
          coursework
          indication
        }
      }
    }
  }
`

class Education extends React.Component {
  render() {
    const { data } = this.props
    const schools = data.allSchool.edges

    return (
    <Layout>
      <SEO title="Education" />
      <Segment>
        <Header as='h1' style={{textAlign:"center"}}> Education </Header>
      </Segment>

      {schools.map(({ node }) => {
        return (
          <div>
            <Segment attached='top' style={{marginTop: node.margin}}>
              <Header as='h2' style={{textAlign:"center"}}> { node.name } </Header>

              <Header as='h3' style={{textAlign:"center"}}> { node.degree } </Header>

              <Progress percent={ node.p } indicating={ node.indication } style={{marginTop:`25px`}}> { node.year } </Progress>

            </Segment>
            <Segment attached='bottom'>

              <Header as='h3' style={{textAlign:"center"}}> { node.highlight } </Header>
              <Table celled>
                <Table.Body>
                  <Table.Row>
                    { node.coursework.map(course => (
                        <Table.Cell>
                          { course }
                        </Table.Cell>
                      ))}
                  </Table.Row>
                </Table.Body>
              </Table>

            </Segment>
          </div>
        )
      })}
    </Layout>
    )
  }
}

export default Education
