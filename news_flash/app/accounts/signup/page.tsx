import React from 'react'
import Form from 'next/form'

const page = () => {
  return (
    <Form action="/search">
        <div>Username</div>
        <input type="text" id="username" placeholder="Enter your username" />
        <div>Password</div>
        <input type="text" id="username" placeholder="Enter your password" />
        <div>
            <button id="submitBtn">Submit</button>
        </div>
    </Form>
    
  )
}

export default page