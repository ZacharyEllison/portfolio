import { Header, Segment, Table, TableBody } from 'semantic-ui-react'
import { languages, tools, databases, frameworks  } from '../public/tech.json'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <main>
        <Segment>
          <Header as='h2' content='Languages' />
          <Table celled fluid='true'>
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
        <Segment>
          <Header as='h2' content='Tools' />
          <Table celled fluid='true'>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell content='Tool' icon='wrench'/>
                <Table.HeaderCell content='Ability' icon='battery empty' />
                <Table.HeaderCell content='Years' icon='clock outline' />
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {tools.map(tool =>
                <Table.Row key={tool.name}>
                  <Table.Cell content={tool.name} icon={tool.icon} />
                  <Table.Cell content={tool.comfort} icon={(tool.progress >= 75)? 'battery full' : 'battery high' } />
                  <Table.Cell content={tool.year} icon='clock outline' />
                </Table.Row>
              )}
            </Table.Body>
          </Table>      
        </Segment>
        <Segment>
          <Header as='h2' content='Databases' />
          <Table celled fluid='true'>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell content='Database' icon='database'/>
                <Table.HeaderCell content='Ability' icon='battery empty' />
                <Table.HeaderCell content='Years' icon='clock outline' />
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {databases.map(db =>
                <Table.Row key={db.name}>
                  <Table.Cell content={db.name} icon={db.icon} />
                  <Table.Cell content={db.comfort} icon={(db.progress >= 75)? 'battery full' : 'battery high' } />
                  <Table.Cell content={db.year} icon='clock outline' />
                </Table.Row>
              )}
            </Table.Body>
          </Table>      
        </Segment>
        <Segment>
          <Header as='h2' content='Frameworks' />
          <Table celled fluid='true'>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell content='Framework' icon='book'/>
                <Table.HeaderCell content='Ability' icon='battery empty' />
                <Table.HeaderCell content='Years' icon='clock outline' />
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {frameworks.map(fw =>
                <Table.Row key={fw.name}>
                  <Table.Cell content={fw.name} icon={fw.icon} />
                  <Table.Cell content={fw.comfort} icon={(fw.progress >= 75)? 'battery full' : 'battery high' } />
                  <Table.Cell content={fw.year} icon='clock outline' />
                </Table.Row>
              )}
            </Table.Body>
          </Table>      
        </Segment>
      </main>
    </Layout>
  )
}
