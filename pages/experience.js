import { Header, Segment, Table, TableBody } from 'semantic-ui-react'
import { languages, tools, databases  } from '../public/tech.json'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <main>
        <Segment>
          <Header as='h2' content='Languages' />
          <Table celled fluid='true' striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell content='Language' icon='right arrow'/>
                <Table.HeaderCell content='Ability' icon='battery empty' />
                <Table.HeaderCell content='Years' icon='clock outline' />
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {languages.map(lang =>
                <Table.Row key={lang.name}>
                  <Table.Cell content={lang.name} icon={lang.icon} />
                  <Table.Cell content={lang.comfort} icon={(lang.progress >= 75)? 'battery full' : 'battery high' } />
                  <Table.Cell content={lang.year} icon='clock outline' />
                </Table.Row>

              )}
            </Table.Body>
          </Table>      
        </Segment>
      </main>
    </Layout>
  )
}
