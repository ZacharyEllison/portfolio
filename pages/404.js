import Head from 'next/head'
import Layout from '../components/layout'
import gif from '../public/animated.gif'
import { Segment, Image, Header, Grid } from 'semantic-ui-react'

export default function NotFound() {
    return (
        <Layout>
            <main>
                <Grid rows={1} columns={1}>
                    <Grid.Column>
                        <Grid.Row>
                            <Segment attached>
                                <Header textAlign='center' as='h1' content='It was worth a shot!' />
                            </Segment>
                        </Grid.Row>
                        <Grid.Row>
                            <Segment>
                                <Image src={gif}
                                width='500'
                                height='750'
                                centered/>
                            </Segment>
                    </Grid.Row>
                    </Grid.Column>
                </Grid>
            </main>
        </Layout>
    )
}