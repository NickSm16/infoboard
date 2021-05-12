import React, { useState, useEffect } from 'react'
import Box from '@material-ui/core/Box'

import { DotDelimiter } from '../icons/dot-delimiter'
import { useTimeStyles } from './time.style'

export function Time (): React.ReactElement {
  const timeStyles = useTimeStyles()

  const [date, setDate] = useState(new Date())

  const daysNames = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']

  useEffect(() => {
    const counter = setInterval(() => {
      setDate(new Date())
    }, 20000)

    return () => clearInterval(counter)
  }, [])

  return (
    <Box>
      <Box component='span' className={timeStyles.timeDayMonth}>
        {date.toLocaleString('ru', {
          month: 'long',
          day: 'numeric'
        })}
      </Box>
      <Box component='span' className={timeStyles.dotDelimiter}>
        <DotDelimiter />
      </Box>
      <Box component='span' className={timeStyles.timeDayName}>
        {daysNames[date.getDay()]}
      </Box>
      <Box component='span' className={timeStyles.timeDigitalWatch}>
        {date.toLocaleString('ru', {
          hour: 'numeric',
          minute: 'numeric'
        })}
      </Box>
    </Box>
  )
}
