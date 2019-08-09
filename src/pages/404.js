import React from "react"

import Layout from "../components/layout"
import { Segment, Header, Image } from "semantic-ui-react"
import SEO from "../components/seo"
import Avatar from "../../content/assets/animated.gif"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Segment style={{marginTop:`5%`}}>
      <Header style={{textAlign: `center`}} as='h1'>NOT FOUND</Header>
      <Image
              src={ Avatar }
              rounded
              centered
              fluid
              size='medium'
              alt="Zachary's boss wanted this gif made"
              style={{
                transform: `rotate(-90deg)`,
                marginTop: `50px`,
                marginBottom: `75px`
              }}
            />
      <Header style={{textAlign: `center`}} as='h3'>It was worth a shot!</Header>
    </Segment>
  </Layout>
)

export default NotFoundPage
