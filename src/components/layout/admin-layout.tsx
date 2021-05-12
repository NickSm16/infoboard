import React, { useState } from 'react'
import {
  Container, AppBar, Toolbar, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, IconButton
} from '@material-ui/core'
import { Menu, Event, Dashboard, FeaturedVideoOutlined, Person } from '@material-ui/icons'
import { useAdminLayoutStyles } from './admin-layout.style'

interface MenuItemProps {
  icon: React.ReactElement
  title: string
  url: string
}

interface AdminLayoutProps {
  title: string
  bgColor: string
  color: string
  content: React.ReactElement
}

export default function AdminLayout ({ title, bgColor, color, content }: AdminLayoutProps): React.ReactElement {
  const classes = useAdminLayoutStyles({ bgColor: bgColor, color: color })
  const [expand, setExpand] = useState(false)

  const toggleDrawer = (): void => {
    setExpand(!expand)
  }

  const menuData: MenuItemProps[] = [
    { icon: <Event />, title: 'Расписание занятий', url: '/admin/plug' },
    { icon: <Dashboard className={classes.sectionIcon} />, title: 'Потоки', url: '/admin/plug' },
    { icon: <FeaturedVideoOutlined />, title: 'Шаблоны потоков', url: '/admin/pattern' },
    { icon: <Person />, title: 'Сотрудники', url: '/admin/employee' }
  ]

  function ListMenuItem (props: { data: MenuItemProps }): React.ReactElement {
    return (
      <ListItem button component='a' href={props.data.url}>
        <ListItemIcon>{props.data.icon}</ListItemIcon>
        <ListItemText primary={props.data.title} />
      </ListItem>
    )
  }

  return (
    <div>
      <AppBar
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={toggleDrawer}
          >
            <Menu />
          </IconButton>
          <Typography
            variant='h6'
            className={classes.title}
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor='left'
        open={expand}
        onClose={toggleDrawer}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <List>
          {menuData.map((item, index) => <ListMenuItem data={item} key={index} />)}
        </List>
      </Drawer>
      <Container
        className={classes.content}
      >
        {content}
      </Container>
    </div>
  )
}
