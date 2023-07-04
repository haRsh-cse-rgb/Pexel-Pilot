import { Box, Button, Container, HStack, Heading,  Input , Text} from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import {BiSearch} from 'react-icons/bi'

import axios from 'axios'
import Error from './Error'
import Loader from './Loader'
import ImageCard from './ImageCard'
import "./style.css"



const Home = () => {
    // let query='';

    const [inputValue , setInputValue]=useState('dogs');
    const[photos , setPhotos]=useState('[]');
    const[loading , setloading]=useState(true);
    const[error, setError]=useState(false);
   

    const handleClick =() =>{
        // setInputValue(query);
        // console.log(inputValue);

        fetchImages(inputValue);
        // console.log(inputValue);
        
    }

    const handleOnChange = (e) =>{
        // query=e.target.value;
        // // console.log(query);

        setInputValue(e.target.value)
    }

    const fetchImages = async(inputValue) =>{

        try{
        const {data}= await axios.get(`https://api.unsplash.com/search/photos?query=${inputValue} &per_page=60&client_id=munk5tusbTuYHwuNC665W6y092E2zNA30j5L2t8b-zA`);

      setPhotos(data.results);
      setloading(false);
      // console.log(data.results);
        }
        catch(error){
          setError(true);
          setloading(false);
        }



        
    }

    useEffect(() => {
        if (inputValue) {
          fetchImages(inputValue);
        }
      }, []);

     
      

   if(error){
    return <Error message={"Pexel Pilot - Error While fetching Images!"}/>
   }

   if(!photos){
    return <Error message={"Pexel Pilot - No Such Categories ! Try something else"}/>
   }

  return (
    <>

  

    
        <Box w={'full'} p={'6'}  overflowY={'hidden'} marginTop={'20'} zIndex={'9'}>
   <HStack  justifyContent={'center'} >
        <Input maxW={'600px'} alignItems={'center'} placeholder='Search for Images...' variant={'filled'} onChange={handleOnChange}  ></Input>
        <Button colorScheme='purple' variant='solid' borderRadius={'full'} p={'0'}><BiSearch size={'18'} onClick={handleClick}/></Button>

    </HStack>



    </Box>



    
        {loading ? (<Loader/>): (

            <Container maxW={'container.xl'}>

          

          <HStack wrap={'wrap'} justifyContent={'space-evenly'} >

         { photos.map((i) => (
                     <ImageCard 
                     id={i.id}
                     key={i.id}
                     img={i.urls.full}
                     likes={i.likes}
                     


                     />

         ))}

         
         

          </HStack>

            </Container>
           
        )}
    </>
  )
}

export default Home
