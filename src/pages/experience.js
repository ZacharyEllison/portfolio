import React from "react"
import { Segment, Header, Progress, Table } from "semantic-ui-react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Education = () => (
  <Layout>
    <SEO title="Experience" />
    <Segment>
      <Header as='h1' style={{textAlign:"center"}}> Experience </Header>
    </Segment>

    <Segment
      attached='top'
      >
      <Header as='h2' style={{textAlign:"center"}}> Activision Blizzard </Header>
      <Header as='h3' style={{textAlign:"center"}}> Analytics Intern </Header>

      <Progress percent={90} indicating style={{marginTop:`25px`}}> September 2018 - August 2019 </Progress>

    </Segment>

    <Segment
      attached='bottom'
      >
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.Cell>
              Collaborated with the Analytics team on a variety of gameplay data tools to provide timely and actionable insights
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              Active daily use of Python 3, SQL, Presto, Flask, React, Javascript, D3, Elasticsearch
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              Maintained and supported a customized deployment of the open-source Redash dashboarding platform
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              Created, iterated, and maintained an internal web tool to provide full-text search of data schemas
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              Performed Numerous statistical analyses on player engagement data
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              Implemented backend data pipeline to ingest various social media feeds (Reddit, Twitter) and perform realtme sentiment analysis and identify key influencers
            </Table.Cell>
          </Table.Row>
        </Table.Header>
      </Table>
    </Segment>

    <Segment
      attached='top'
      >
      <Header as='h2' style={{textAlign:"center"}}> Early College of Arvada </Header>
      <Header as='h3' style={{textAlign:"center"}}> Community Outreach Intern </Header>

      <Progress percent={100} indicating style={{marginTop:`25px`}}> June 2017 - August 2017 </Progress>

    </Segment>

    <Segment
      attached='bottom'
      >
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.Cell>
              Created advertising materials and tactics for local events, increasing enrollment by 18%
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              Led over 15 community events an dlocal organization meets
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              Provided mentorship to recent graduates on their transition to college
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              Produced social media content
            </Table.Cell>
          </Table.Row>
        </Table.Header>
      </Table>
    </Segment>

    
  </Layout>
)

export default Education
