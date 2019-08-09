import React from "react"
import { graphql } from "gatsby"
import { Responsive, Progress, Segment, Header, Image, Table, Icon } from "semantic-ui-react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Zachary from "../../content/assets/headshot1.jpg"

export const indexQuery = graphql`
  query {
    allQuip {
      edges {
        node {
          name
          quip
        }
      }
    }
    allLanguage {
      edges {
        node {
          name
          icon
          p
          work
          capable
          comfort
        }
      }
    }
    allTool {
      edges {
        node {
          name
          icon
          p
          work
          capable
          comfort
        }
      }
    }
  }
`


class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const languages = data.allLanguage.edges
    const tools = data.allTool.edges
    const quip = data.allQuip.edges[0].node.quip

    return (
      <Layout>
        <SEO title="Home" />

        <Segment>
          <Image
            src={ Zachary }
            rounded
            centered
            size='large'
            alt="A profile of Zachary Ellison"
          />
          <Segment>
            <Header as='h1' style={{textAlign:"center"}}> Zachary Ellison </Header>
          </Segment>
        </Segment>

        <Segment >
          <Header as='h3' style={{textAlign: "center"}}>
            { quip }
          </Header>
        </Segment>

        <Segment>
          <Header as='h3' style={{textAlign: "center"}}>
            Languages
          </Header>
          <Table celled >
            <Table.Header>
              <Responsive as={Table.Row} minWidth={500}>
                <Table.Cell></Table.Cell>
                <Table.HeaderCell>
                  Workable
                </Table.HeaderCell>
                <Table.HeaderCell>
                  Capable
                </Table.HeaderCell>
                <Table.HeaderCell>
                  Comfortable
                </Table.HeaderCell>
              </Responsive>
            </Table.Header>
            <Table.Body>
              {languages.map(({ node }) => {
                return (
                  <Table.Row>
                    <Table.HeaderCell>
                      <Icon name={ node.icon } size='large' verticalAlign='middle' />
                      { node.name }
                    </Table.HeaderCell>
                    <Responsive as={Table.Cell} minWidth={500} active={ node.work } ></Responsive>
                    <Responsive as={Table.Cell} minWidth={500} active={ node.capable } ></Responsive>
                    <Responsive as={Table.Cell} minWidth={500} active={ node.comfort } ></Responsive>
                    <Responsive as={Progress} maxWidth={500} indicating={true} percent={ node.p } ></Responsive>
                  </Table.Row>
                  )
                }
              )
            }
            </Table.Body> 
          </Table>
        </Segment>
        
        <Segment>
          <Header as='h3' style={{textAlign: "center"}}>
            Tools
          </Header>
          <Table celled>
            <Table.Header>
              <Responsive as={Table.Row} minWidth={500}>
                <Table.Cell></Table.Cell>
                <Table.HeaderCell>
                  Workable
                </Table.HeaderCell>
                <Table.HeaderCell>
                  Capable
                </Table.HeaderCell>
                <Table.HeaderCell>
                  Comfortable
                </Table.HeaderCell>
              </Responsive>
            </Table.Header>
            <Table.Body>
              {tools.map(({ node }) => {
                return (
                  <Table.Row>
                    <Table.HeaderCell>
                      <Icon name={ node.icon } size='large' verticalAlign='middle' />
                      { node.name }
                    </Table.HeaderCell>
                    <Responsive as={Table.Cell} minWidth={500} active={ node.work } ></Responsive>
                    <Responsive as={Table.Cell} minWidth={500} active={ node.capable } ></Responsive>
                    <Responsive as={Table.Cell} minWidth={500} active={ node.comfort } ></Responsive>
                    <Responsive as={Progress} maxWidth={500} indicating={true} percent={ node.p } ></Responsive>
                  </Table.Row>
                  )
                }
              )
            }
            </Table.Body> 
          </Table>
        </Segment>

      </Layout>
    )
  }
}

export default IndexPage
