import React from 'react'
import AdminLayout from '../../components/layout/admin-layout'

import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'

export default function Employee (): React.ReactElement {
  const content =
    <Card
      style={{ display: 'flex', marginTop: 200 }}
    >
      <CardMedia style={{ flexShrink: 0, width: 5, backgroundColor: 'red' }} />
      <CardContent>
        <Typography component='h5' variant='h5'>
          Страница еще не сверстана
        </Typography>
        <Typography variant='subtitle1' color='textSecondary'>
          Мы сделаем её чуточку позже ^_^
        </Typography>
      </CardContent>
    </Card>

  return (
    <AdminLayout
      title='Заглушка'
      bgColor='#9EADAE'
      color='#000000'
      content={content}
    />
  )
}
