import React from 'react'
import Box from '@material-ui/core/Box'

import { Time } from './time'
import { useHeaderStyles } from './header.style'
import { HeaderLogo } from '../icons/header-logo'

export function Header (): React.ReactElement {
  const headerStyles = useHeaderStyles()

  return (
    <Box className={headerStyles.headerContainer}>
      <Box className={headerStyles.headerLogo}>
        <HeaderLogo />
        <Box className={headerStyles.headerTitle}>К-741</Box>
      </Box>
      <Box>
        <Time />
      </Box>
    </Box>
  )
}
