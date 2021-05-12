import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { Link } from '@material-ui/core'

export default function Index (): React.ReactElement {
  return (
    <Container maxWidth='sm'>
      <Box my={4}>
        <Typography variant='h4' component='h1' gutterBottom>
          Next.js with TypeScript example
        </Typography>
        <Link href='/information'>
          Go to infromation
        </Link>
      </Box>
    </Container>
  )
}
