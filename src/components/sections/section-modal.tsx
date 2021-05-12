import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

import { useSectionModalStyles } from './section-modal.style'

interface SectionProps {
  title: number
  description: string
  color: string
  handleClose: () => void
}

export function SectionModal ({ title, description, color, handleClose }: SectionProps): React.ReactElement {
  const sectionStyles = useSectionModalStyles({ bgColor: color })

  return (
    <Box boxShadow={6} className={sectionStyles.modalItem}>
      <Grid container>
        <Grid item xs={12}>
          <Box boxShadow={6} className={sectionStyles.modalHeader}>
            <Box component='span' className={sectionStyles.modalTitle}>Поток {title}</Box>
            <IconButton className={sectionStyles.modalCloseIcon}>
              <CloseIcon onClick={handleClose} />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={sectionStyles.modalDescriptionTitle}>
            {description}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
