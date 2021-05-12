import { makeStyles } from '@material-ui/core/styles'

export const useAdminLayoutStyles = makeStyles(
  {
    body: {
      backgroundColor: '#EEEEEE'
    },
    appBar: (props: { bgColor: string, color: string }) => ({
      backgroundColor: props.bgColor,
      color: props.color
    }),
    title: {
      marginLeft: 20
    },
    drawerPaper: {
      width: 250,
      paddingTop: 10
    },
    content: {
      paddingTop: 64,
      minHeight: '100vh'
    },
    sectionIcon: {
      transform: 'rotate(90deg) scale(-1, 1)'
    }
  }
)
