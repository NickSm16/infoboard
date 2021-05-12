import React from 'react'
import AdminLayout from '../../components/layout/admin-layout'
import { PatternTable } from '../../components/table/pattern-table'

const types = { 1: 'ППК', 5: 'не ППК' }
const data = [
  {
    color: '#374c83',
    code: 1488,
    type: 5,
    isExternal: true,
    duration: 7,
    name: 'Работа с пультом страршего оператора КПСС Книжина'
  },
  {
    color: '#833737',
    code: 52,
    type: 1,
    isExternal: false,
    duration: 143,
    name: 'Работа с пультом страршего оператора КПСС Книжина'
  }
]

export default function Pattern (): React.ReactElement {
  return (
    <AdminLayout
      title='Шаблоны потоков'
      bgColor='#3E2463'
      color='#FFFFFF'
      content={
        <PatternTable
          types={types}
          data={data}
        />
      }
    />
  )
}
