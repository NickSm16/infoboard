import React from 'react'

import { Layout } from './../components/layout/layout'
import { Header } from '../components/header/header'
import { Sidebar } from './../components/sidebar/sidebar'
import { Sections } from './../components/sections/sections'

export default function Information (): React.ReactElement {
  return (
    <Layout
      header={<Header />}
      sidebar={<Sidebar />}
      content={<Sections />}
    />
  )
}
