import React from 'react'

const AuthBackground = ({ children }) => {
  return (
                <div
                className="min-h-screen flex flex-col"
                style={{
                    backgroundImage: "url('/Login-background.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {children}
            </div>
  )
}

export default AuthBackground