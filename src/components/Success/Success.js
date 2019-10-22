import React from "react"

import successStyles from "./success.module.scss"

const Success = () => {
  return (
    <div className={successStyles.container}>
      <h1>Form submitted successfully!</h1>
      <p>Thanks for reaching out. I will get back to you shortly.</p>
    </div>
  )
}

export default Success
