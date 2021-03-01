import React from 'react'
import Alert from './alert'
import Link from 'next/link'
import { Menu, Header, Button, Sidebar, Icon } from 'semantic-ui-react'
import { LFW } from '../lib/constants'

export default function Headbar() {
    const [visible, setVisible] = React.useState(false)
    const handleClick = () => setVisible(true)
    return (
        <div>

        <Button animated onClick={handleClick}>
            <Button.Content hidden >
                <Icon name='sun'/>
            </Button.Content>
            <Button.Content visible >
                {LFW ? 
                    <Icon.Group size='large'>
                        <Icon name='bars' />
                        <Icon corner='top right' name='exclamation circle' color='blue'/>
                    </Icon.Group> : 
                    <Icon name='bars' />}
            </Button.Content>
        </Button>
        <Sidebar as={Menu} 
            onHide={() => setVisible(false)}
            width='thin' visible={visible} 
            vertical animation='scale down'>
            
            <Menu.Item link>
                <Link href='/'><Header content='Zachary Ellison'/></Link>
            </Menu.Item>
            <Menu.Item link>
                <Link href="/about"><Header content='About'/></Link>
            </Menu.Item>
            <Menu.Item link>
                <Link href="/experience"><Header content='Experience'/></Link>
            </Menu.Item>
            <Menu.Item link>
                <Link href="/projects"><Header content='Projects'/></Link>
            </Menu.Item>
            <Menu.Item link>
                <Link href="/ZEllison.pdf"><Header content='Resume'/></Link>
            </Menu.Item>
            <Alert />
        </Sidebar>
        </div>
    )
}
