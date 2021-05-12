import { makeStyles } from '@material-ui/core/styles'

const timeText = {
  fontSize: 34,
  letterSpacing: 0.085
}

const colorTimeText = {
  color: '#9e9e9e'
}

export const useTimeStyles = makeStyles({
  timeDayMonth: {
    marginRight: 22,
    ...timeText,
    ...colorTimeText
  },
  dotDelimiter: {
    verticalAlign: 4,
    marginRight: 22
  },
  timeDayName: {
    marginRight: 48,
    ...timeText,
    ...colorTimeText
  },
  timeDigitalWatch: {
    fontSize: 48,
    ...colorTimeText
  }
})
