import { makeStyles } from '@material-ui/core/styles'

export const useLinkBarStyles = makeStyles(
  {
    LinkBar: {
      marginTop: 40,
      textAlign: 'center'
    },
    linkItem: {
      margin: 15,
      color: '#666666',
      '&:hover': {
        color: 'inherit',
        textDecoration: 'underline'
      }
    },
    delimeter: {
      color: '#666666'
    }
  }
)
