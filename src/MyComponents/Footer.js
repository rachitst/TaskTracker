import React from 'react'

export const Footer = () => {
  let FooterStyle={
    position: "relative",
    top: "10vh",
    width: "100%"
    }
  return (
    <div className='bg-dark text-light p-2' style={FooterStyle}> 
    <p className="text-center">
      Copyright &copy; rachitchheda@gmail.com
    </p>
    </div>
  )
}
