import React, { useEffect, useState } from 'react'
import {
  Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, VStack
  , useDisclosure, HStack, Text, Heading
} from "@chakra-ui/react"
import { BiMenuAltLeft, BiSearch } from 'react-icons/bi'

import { Link } from 'react-router-dom'
import './style.css';



const Header = () => {

  const categories = ["Nature", "Mountains", "Animals", "Snakes", "Sci-Fi", "Building", "Fashion", "Spirituality", "People", "Model", "Ocean", "Fantasy"];

  const { isOpen, onOpen, onClose } = useDisclosure()


  return (

    <HStack shadow={'lg'} p={'8'} maxH={'60px'} justifyContent={'center'} pos={'fixed'} top={'0'} left={'0'} right={'0'} zIndex={'9'} bg={"#8B5BFF"} >

      <Button zIndex={'overlay'} onClick={onOpen} pos={'fixed'} top={"4"} left={"4"} colorScheme="white" p={"0"} w={"10"} h={"10"} borderRadius={"full"}>
        <BiMenuAltLeft size={'30'} />
      </Button>


      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}>


        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader >Pexel Pilot</DrawerHeader>

          <DrawerBody>
            <VStack alignItems={"flex-start"}>

              <Text as={'b'} fontSize={'lg'}>Categories</Text>

              {categories.map((i) => (

                <Link to={`/category/${i}`} target='_blank'> <Button onClick={onclose} variant={"ghost"} colorScheme={"purple"} target='_blank' >
                  {i}
                </Button></Link>

              ))
              }

            </VStack>

          </DrawerBody>


        </DrawerContent>


      </Drawer>

      <Heading as='h3' size='lg'  letterSpacing='6px' textShadow='1px 1px 1px #000000' fontWeight={100}><Link to={`/`}>Pexel Pilot</Link></Heading>




    </HStack>







  )
}


export default Header