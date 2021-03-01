import { Header } from 'semantic-ui-react'
import Layout from '../components/layout'


export default function Hello() {
    return (
        <Layout>
            <main>
                <Header className='centered' content='Hello!' />
            </main>
        </Layout>
    )
}