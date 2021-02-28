import React from 'react'
import Alert from './alert'
import Link from 'next/link'
import { Menu, Header, Button, Sidebar } from 'semantic-ui-react'

export default function Headbar() {
    const [visible, setVisible] = React.useState(false)
    const handleClick = () => setVisible(true)
    return (
        <div>

        <Button size='huge' icon='sun' onClick={handleClick}/>
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
