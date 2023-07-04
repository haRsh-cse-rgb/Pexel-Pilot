import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from './Error';
import ImageCard from './ImageCard';
import { Container, HStack , Text} from '@chakra-ui/react';
import Loader from './Loader';

const Categories = () => {

    const params=useParams();

    
  const[photos , setPhotos]=useState([]);
  const[loading , setloading]=useState(true);
  const[error, setError]=useState(false);
//   console.log(params.id);


  useEffect(() => {


    const fetchImages = async() =>{

        try{
        const {data} = await axios.get(`https://api.unsplash.com/search/photos?query=${params.id}&per_page=60&client_id=munk5tusbTuYHwuNC665W6y092E2zNA30j5L2t8b-zA`);
    
      setPhotos(data.results);
      setloading(false);
    //   console.log(params.id)
    //   console.log(data.results);
        }
        catch(error){
          setError(true);
          setloading(false);
        }
    }

    fetchImages();



  } , [params.id]);

  



    




 
  


  if(error){
    return <Error message={"Pexel Pilot - Error While fetching Images!"}/>
   }
   

  return (
    <>
    
        {loading ? (<Loader/>): (

<Container maxW={'container.xl'} mt={'100px'}>

<Text   textAlign="center"  fontSize="2xl" m="8" textDecoration='underline' letterSpacing='2px'>
  Showing Results For {params.id}
</Text>

<HStack wrap={'wrap'} justifyContent={'space-evenly'} >

{ photos.map((e) => (
         <ImageCard 
         id={e.id}
         key={e.id}
         img={e.urls.full}
         likes={e.likes}
         


         />

))}




</HStack>

</Container>

)}
    </>
  )
}

export default Categories