import React from "react"
import { Segment, Header, Image, List } from "semantic-ui-react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Zachary from "../../content/assets/Zach-alone.jpg"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />

      <Segment>
        <Image
          src={ Zachary }
          fluid
          alt="A profile of Zachary Ellison"
        />
        <Header as='h1' style={{textAlign:"center"}}> Zachary Ellison </Header>
      </Segment>

      <Segment >
        <Header as='h3' style={{textAlign: "center"}}>
          Zachary is a father, partner, and creator.
          He likes to spend his early mornings meditating and running, his days creating things that interest him, and his weekends with his daughter and family hiking.
          When he has free time he reads or plays Overwatch on his computer.
        </Header>
      </Segment>

      <Segment>
        <Header as='h3' style={{textAlign: "center"}}>
          Languages
        </Header>
        <List divided relaxed>
          <List.Item>
            <List.Icon name='python' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header> Python </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='js' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header> Javascript </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='react' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header> React </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='arrow right' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header> Lua </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='arrow right' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header> SQL </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='arrow right' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header> C </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='html5' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header> HTML/CSS </List.Header>
            </List.Content>
          </List.Item>
        </List>
      </Segment>
      <Segment >
        <Header as='h3' style={{textAlign: "center"}}>
          Tools
        </Header>
        <List divided relaxed>
          <List.Item>
            <List.Icon name='arrow right' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header> Kubernetes </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='docker' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header> Docker </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='aws' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header> AWS </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='arrow right' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header> Elasticsearch </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='git' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header> Git </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='arrow right' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header> Bootstrap </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='arrow right' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header> Semantic UI </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='arrow right' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header> Gatsby </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='arrow right' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header> ZEIT Now </List.Header>
            </List.Content>
          </List.Item>
        </List>
      </Segment>
    </Layout>
  )
}

export default IndexPage
