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
            <Table.HeaderCell>
              Collaborated with the Analytics team on a variety of gameplay data tools to provide timely and actionable insights
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>
              Active daily use of Python 3, SQL, Presto, Flask, React, Javascript, D3, Elasticsearch
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>
              Maintained and supported a customized deployment of the open-source Redash dashboarding platform
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>
              Created, iterated, and maintained an internal web tool to provide full-text search of data schemas
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>
              Performed Numerous statistical analyses on player engagement data
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>
              Implemented backend data pipeline to ingest various social media feeds (Reddit, Twitter) and perform realtme sentiment analysis and identify key influencers
            </Table.HeaderCell>
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
            <Table.HeaderCell>
              Created advertising materials and tactics for local events, increasing enrollment by 18%
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>
              Led over 15 community events an dlocal organization meets
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>
              Provided mentorship to recent graduates on their transition to college
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>
              Produced social media content
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
      </Table>
    </Segment>


  </Layout>
)

export default Education
