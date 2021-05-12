import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import { LoginForm } from '../../components/login-form/login-form'

export default function Login (): React.ReactElement {
  const loginStyles = makeStyles({
    loginBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#EEEEEE'
    }
  })()
  return (
    <Box className={loginStyles.loginBox}>
      <LoginForm />
    </Box>
  )
}
