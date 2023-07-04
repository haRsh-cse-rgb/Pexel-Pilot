import React from 'react'
import { Link } from 'react-router-dom'
import { Image, VStack, Text , HStack } from '@chakra-ui/react'
import {BiHeart} from 'react-icons/bi'


const ImageCard = ({id , img , likes}) => {
  return (
    <Link to={`${img}`} target={'blank'}>

<VStack 
        
        m={'4'}
        
        css={{
    "&:hover":{
        transform:"scale(1.1)",
        transition:"0.5s",
    }
}}>

    <Image src={img}
     w={{ base: "100%", md: "300px" }}
        h={{ base: "auto", md: "300px" }}
     
        p={'2'}
    objectFit={"cover"}
    boxShadow='lg'
   
        




    />

      <HStack w={'full'} >
      <BiHeart fill='red'/>

      <Text  as={'bold'} fontSize='lg'> {likes}  </Text>
      

      </HStack>


    
    
</VStack>



    </Link>
  )
}

export default ImageCard