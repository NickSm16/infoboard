import React from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { useLayoutStyles } from './layout.style'

interface LayoutProps {
  header: React.ReactElement
  sidebar: React.ReactElement
  content: React.ReactElement
}

export function Layout (
  { header, sidebar, content }: LayoutProps
): React.ReactElement {
  const layoutStyles = useLayoutStyles()

  return (
    <Box className={layoutStyles.mainContainer}>
      <Grid container>
        <Grid item xs={12} className={layoutStyles.headerContainer}>
          <Box boxShadow={6} className={layoutStyles.headerBox}>
            {header}
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box boxShadow={6} className={layoutStyles.shedulerBox}>
            {sidebar}
          </Box>
        </Grid>
        <Grid item xs={7}>
          {content}
        </Grid>
      </Grid>
    </Box>
  )
}
