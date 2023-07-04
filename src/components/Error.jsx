import React from 'react'
import { Alert, AlertIcon } from '@chakra-ui/react'

const Error = ({message}) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , marginTop:'80px' }}>
      <Alert status="error" maxW="container.sm" m={['10' , '0']}>
        <AlertIcon />
        {message}
      </Alert>
    </div>
  )
}

export default Error

// transform={"translateX(-50%)"}