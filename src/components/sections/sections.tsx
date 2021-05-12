import React from 'react'
import { useSectionsStyles } from './sections.style'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import { Section } from './section'

interface SectionProps {
  number: number
  title: string
}

export function Sections (): React.ReactElement {
  const sectionsStyles = useSectionsStyles({ bgColor: '#EEEEEE' })

  const colorMapping: Record<number, string> = {
    1912: '#E91E63',
    1960: '#455A64',
    1990: '#8BC34A',
    1945: '#5D4037',
    1918: '#1A237E'
  }

  const descriptionArr: SectionProps[] = [
    {
      number: 1912,
      title: 'Работа с пультом страршего оператора КПСС Книжина1'
    },
    {
      number: 1960,
      title: 'Работа с пультом страршего оператора КПСС Книжина2'
    },
    {
      number: 1990,
      title: 'Работа с пультом страршего оператора КПСС Книжина3'
    },
    {
      number: 1945,
      title: 'Работа с пультом страршего оператора КПСС Книжина4'
    },
    {
      number: 1918,
      title: 'Работа с пультом страршего оператора КПСС Книжина5'
    }
  ]

  const SectionItem = (props: { item: SectionProps }): React.ReactElement => (
    <Section
      title={props.item.number}
      description={props.item.title}
      color={colorMapping[props.item.number]}
    />
  )

  return (
    <Box className={sectionsStyles.sectionsContainer}>
      <Grid container justify='flex-start'>
        {descriptionArr.map((item, index) =>
          <SectionItem
            key={index}
            item={item}
          />)}
      </Grid>
    </Box>
  )
}
