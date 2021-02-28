import Link from 'next/link'
import { Message, Menu } from 'semantic-ui-react'
import { LFW } from '../lib/constants'

export default function Alert() {
    if (LFW) {
        return (
            <Menu.Item>
                <Message compact small>
                    <Message.Header>
                        Zachary is looking for work! Send him an {" "} <Link href="mailto: zachary@zacharyellison.com"><a>email</a></Link> to get in touch.
                    </Message.Header>
                </Message>
            </Menu.Item>
        )
    } else {
        return (<div />)
    }
}