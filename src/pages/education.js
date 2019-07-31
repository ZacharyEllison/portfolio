import React from "react"
import { Segment, Header, Progress, Table } from "semantic-ui-react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Education = () => (
  <Layout>
    <SEO title="Education" />
    <Segment>
      <Header as='h1' style={{textAlign:"center"}}> Education </Header>
    </Segment>

    <Segment
      attached='top'
      >
      <Header as='h2' style={{textAlign:"center"}}> Harvard University </Header>

      <Header as='h3' style={{textAlign:"center"}}> Bachelor's in Computer Science </Header>

      <Progress percent={50} indicating style={{marginTop:`25px`}}> Current Year: Junior </Progress>

    </Segment>
    <Segment attached='bottom'>

      <Header as='h3' style={{textAlign:"center"}}> Relevant Course Work </Header>
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              Intro Computer Science
            </Table.Cell>
            <Table.Cell>
              Multivariable Calculus
            </Table.Cell>
            <Table.Cell>
              Linear Algebra
            </Table.Cell>
            <Table.Cell>
              Computer Aided Machine Design
            </Table.Cell>
            <Table.Cell>
              Spanish
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

    </Segment>

    <Segment
      attached="top">
      <Header as='h2' style={{textAlign:"center"}}> Early College of Arvada </Header>
      <Header as='h3' style={{textAlign:"center"}}> High School </Header>

      <Progress percent={100} indicating style={{marginTop:`25px`}}> Graduated: May, 2016 </Progress>

    </Segment>

    <Segment attached='bottom'>
      <Header as='h3' style={{textAlign:"center"}}> Awards and Recognitions </Header>
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              Valedictorian
            </Table.Cell>
            <Table.Cell>
              National Honor Society
            </Table.Cell>
            <Table.Cell>
              Director's Recognition of Valor
            </Table.Cell>
            <Table.Cell>
              Director's Recognition of Perserverance
            </Table.Cell>
            <Table.Cell>
              President of Construo: Literary Magazine
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Segment>

  </Layout>
)

export default Education
