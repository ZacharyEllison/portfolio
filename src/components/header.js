import { Link } from "gatsby"
import React from "react"
import { Menu, Icon, Image, Sidebar } from 'semantic-ui-react'
import { Donkey } from '../../content/assets/donkey.jpg'

const theSidebar = () => {

  return (
    <div>
        <Sidebar
          as={Menu}
          animation='push'
          icon='labeled'
          vertical
          inverted
          visible
          style={{background:"#1e90ff"}}
          width='thin'
        >
          <Menu.Item as='a'>
            <Image
              fluid
              alt="a donkey, zachary's spirit animal"
              src={ Donkey }
            />
          </Menu.Item>
          <Link to="/">
            <Menu.Item as='a'
              style={{marginTop: `25%`}}
            >
              <Icon name='sun' />
              Zachary
            </Menu.Item>
          </Link>

          <Link to="/education/">
            <Menu.Item as='a'>
              <Icon name='pencil' />
              Education
            </Menu.Item>
          </Link>

          <Link to="/experience/">
            <Menu.Item as='a'>
              <Icon name='cog' />
              Experience
            </Menu.Item>
          </Link>

          <Link to="/projects/">
            <Menu.Item as='a'>
              <Icon name='code' />
              Projects
            </Menu.Item>
          </Link>

          <Menu.Item
            style={{
              position: "absolute",
              bottom: `5px`
            }}
          >
            Zachary Ellison © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Menu.Item>
        </Sidebar>
    </div>
  )
}
export default theSidebar
