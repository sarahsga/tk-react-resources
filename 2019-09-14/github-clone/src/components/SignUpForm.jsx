import React from 'react'

export default function SignUpForm() {
  return (
    <form>
      <label>Username</label>
      <input type="text" />
      <label>Email</label>
      <input type="email" />
      <label>Password</label>
      <input type="password" />
      <p>
        Make sure it's at least 15 characters OR at least 8 characters
        including a number and a lowercase letter.
              <a href="#"> Learn more</a>.
      </p>
      <input type="submit" value="Sign up for Github" />
      <p className="para2">
        By clicking “Sign up for GitHub”, you agree to our
              <a href="#"> Terms of Service</a> and
              <a href="#"> Privacy Statement</a>. We’ll occasionally send you
        account related emails.
      </p>
    </form>
  )
}
