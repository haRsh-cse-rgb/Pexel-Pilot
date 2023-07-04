import { Box, Spinner, VStack } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (


    <VStack h="60vh" justifyContent={"center"}>

<Box transform={"scale(1.5)"}>
<Spinner
  thickness='3px'
  speed='0.65s'
  emptyColor='gray.200'
  color='purple.500'
  size='xl'
/>
</Box>

   </VStack>
    
  )
}

export default Loader