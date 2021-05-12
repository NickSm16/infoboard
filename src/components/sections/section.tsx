import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Modal from '@material-ui/core/Modal'

import { SectionModal } from './section-modal'
import { useSectionStyles } from './section.style'

interface SectionProps {
  title: number
  description: string
  color: string
}

export function Section ({ title, description, color }: SectionProps): React.ReactElement {
  const sectionStyles = useSectionStyles({ bgColor: color })
  const [expandModal, setExpandModal] = React.useState(false)

  const handleOpen = (): void => {
    setExpandModal(true)
  }

  const handleClose = (): void => {
    setExpandModal(false)
  }

  return (
    <Grid item className={sectionStyles.sectionContainer}>
      <Box boxShadow={6} onClick={handleOpen} className={sectionStyles.sectionItem}>
        <Box component='span' className={sectionStyles.sectionTitle}>{title}</Box>
      </Box>
      <Modal
        className={sectionStyles.sectionModalWindow}
        open={expandModal}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <SectionModal
          title={title}
          description={description}
          color={color}
          handleClose={handleClose}
        />
      </Modal>
    </Grid>
  )
}
