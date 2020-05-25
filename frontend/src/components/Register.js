import React, { useState } from 'react'
import { Form } from '../shared/shared'
import { Button } from '../shared/shared'

export const Register = () => {
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userEmail, setUserEmail] = useState('')

  const handleRegister = async (event) => {
    event.preventDefault()
    let user = {
      name: userName,
      email: userEmail,
      password: userPassword
    }
    console.log(user)
    let response = await fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
    })

    let result = await response.json()
    console.log("fetch result", result)
    setUserName('')
    setUserPassword('')
    setUserEmail('')
  }

  return (
    <Form onSubmit={handleRegister}>
      <h1>
        REGISTER HERE:
      </h1>
      <label>
        Name:
      <input
          type='text'
          required='true'
          value={userName}
          onChange={e => setUserName(e.target.value)}
          placeholder='name'>
        </input>
      </label>
      <label>
        Email:
      <input
          type='email'
          required='true'
          value={userEmail}
          onChange={e => setUserEmail(e.target.value)}
          placeholder='e-mail'>
        </input>
      </label>
      <label>
        Password:
      <input
          type='password'
          required='true'
          value={userPassword}
          onChange={e => setUserPassword(e.target.value)}
          placeholder='password'>
        </input>
      </label>
      <Button
        type='submit'>
        REGISTER
      </Button>
    </Form>
  )
}