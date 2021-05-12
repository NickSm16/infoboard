import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

import { useLoginFormStyles } from './login-form.style'

export function LoginForm (): React.ReactElement {
  const loginFormStyles = useLoginFormStyles()

  return (
    <Paper className={loginFormStyles.loginFormPaper}>
      <Typography variant='h6' component='h1' className={loginFormStyles.header}>Rosemary</Typography>
      <TextField
        className={loginFormStyles.input}
        fullWidth
        placeholder='Логин'
      />
      <TextField
        className={loginFormStyles.input}
        fullWidth
        type='password'
        placeholder='Пароль'
      />
      <div>
        <Button className={loginFormStyles.submit}>Войти</Button>
      </div>
    </Paper>
  )
}
