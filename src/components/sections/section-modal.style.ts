import { makeStyles } from '@material-ui/core/styles'

export const useSectionModalStyles = makeStyles({
  modalItem: {
    width: '70%',
    height: 900,
    backgroundColor: '#FFF',
    borderRadius: 4
  },
  modalHeader: (props: { bgColor: string }) => ({
    backgroundColor: props.bgColor,
    borderRadius: '4px 4px 0px 0px',
    paddingTop: 21,
    paddingLeft: 24,
    paddingBottom: 15
  }),
  modalTitle: {
    fontSize: 20,
    letterSpacing: 0.03,
    color: '#FFFFFF'
  },
  modalCloseIcon: {
    float: 'right',
    padding: 0,
    marginRight: 21,
    color: '#FFF'
  },
  modalDescriptionTitle: {
    fontSize: 24,
    alignItems: 'center',
    color: '#000',
    marginTop: 26,
    marginLeft: 26
  }
})
