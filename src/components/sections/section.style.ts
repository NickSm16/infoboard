import { makeStyles } from '@material-ui/core/styles'

export const useSectionStyles = makeStyles({
  sectionContainer: {
    width: 240,
    backgroundColor: '#FFF',
    marginRight: 32,
    marginBottom: 32,
    borderRadius: 8
  },
  sectionItem: (props: { bgColor: string }) => ({
    width: '100%',
    height: '100%',
    backgroundColor: props.bgColor,
    paddingTop: 18,
    paddingLeft: 24,
    borderRadius: 'inherit',
    cursor: 'pointer',
    paddingBottom: 28
  }),
  sectionTitle: {
    fontSize: 24,
    color: '#FFF'
  },
  sectionModalWindow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
