import React from 'react'
import { useRef } from 'react'
import { FormGroup, Input, Label } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const SignIn = ( {signin} ) => {

  const formRef = useRef()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      user: { email: data.email, password: data.password }
    }
    signin(userInfo)
    navigate("/recipeindex")
    e.target.reset()
  }

  return (
    <>
    <div><h1>Login</h1></div>
    <form ref={formRef} onSubmit={handleSubmit}>
      <FormGroup floating>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Email"
          type="email"
        />
        <Label for="exampleEmail">
          Email
        </Label>
      </FormGroup>
      {' '}
      <FormGroup floating>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Password"
          type="password"
        />
        <Label for="examplePassword">
          Password
        </Label>
      </FormGroup>
      {' '}
      <Input type="submit" value="Login" />
    </form>
  </>
  )
}

export default SignIn