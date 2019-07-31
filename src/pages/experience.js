import React from "react"
import { Segment, Header, Progress } from "semantic-ui-react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Education = () => (
  <Layout>
    <SEO title="Experience" />
    <Segment>
      <Header as='h1' style={{textAlign:"center"}}> Experience </Header>
    </Segment>

    <Segment>
      <Header as='h2' style={{textAlign:"center"}}> Activision Blizzard </Header>
      <Header as='h3' style={{textAlign:"center"}}> Analytics Intern </Header>

      <Progress percent={90} indicating style={{marginTop:`25px`}}> September 2018 - August 2019 </Progress>

    </Segment>
  </Layout>
)

export default Education
