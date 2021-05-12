import { makeStyles } from '@material-ui/core/styles'

export const useLoginFormStyles = makeStyles({
  loginFormPaper: {
    paddingTop: 20,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 8,
    width: 440
  },
  header: {
    textAlign: 'center',
    marginBottom: 28
  },
  input: {
    marginBottom: 24
  },
  submit: {
    float: 'right',
    marginTop: 12
  }
})
