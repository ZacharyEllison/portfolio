import Link from 'next/link'
import { Segment, Header } from 'semantic-ui-react'

export default function Footer() {
    return (
        <Segment>
            <Header className='centered' as='h3'>
                Made by Zachary Ellison
                - See the code {" "}
                <Link href='https://github.com/zacharyellison/portfolio'>here</Link>
            </Header>
        </Segment>
    )
}