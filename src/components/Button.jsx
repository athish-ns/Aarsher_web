import React from 'react'

const Button = ({ styles, href }) => {
  return (
    <a href="https://github.com/athish-ns/Aarsher-AI" className={`block py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      Get Started
    </a>
  )
}

export default Button
