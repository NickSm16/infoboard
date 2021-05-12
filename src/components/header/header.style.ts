import { makeStyles } from '@material-ui/core/styles'

export const useHeaderStyles = makeStyles({
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 40,
    paddingRight: 48
  },
  headerLogo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 48,
    color: '#666666',
    marginLeft: 11
  }
})
