import { Link } from "gatsby"
import React from "react"
import { Menu, Icon, Sidebar, Image } from 'semantic-ui-react'
import Avatar from "../../content/assets/animated.gif"

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
          style={{
            background:"#1e90ff",
            width: `15%`,
            minWidth: `130px`
          }}
        >
          <Menu.Item as='a'>
            <Image
              src={ Avatar }
              rounded
              centered
              size='small'
              alt="A profile of Zachary Ellison"
              style={{
                transform: `rotate(-90deg)`
              }}
            />
          </Menu.Item>
          <Link to="/">
            <Menu.Item as='a'
              // style={{marginTop: `125%`}}
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
              marginTop: `100%`,
              padding: `15px`,
              bottom: `5px`
            }}
          >
            Zachary Ellison © {new Date().getFullYear()}
          </Menu.Item>
        </Sidebar>
    </div>
  )
}
export default theSidebar
