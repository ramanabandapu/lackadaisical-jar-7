import { Text,Box,Flex,Image, Input, Accordion,AccordionIcon,AccordionButton,AccordionItem,AccordionPanel, Button } from '@chakra-ui/react'
import "./Car.css"
import Brand from "../ankesh_work/Image/Brand1.PNG"
import { Link } from '@chakra-ui/react'
import { FaRupeeSign} from 'react-icons/fa';

import { useEffect, useState } from 'react'
const Car=()=>{

  const [data, setData] = useState([])


  const getData=async()=>{
    try{
      let data =await fetch(`https://exuberant-pantsuit-bat.cyclic.app/cars`)
      data=await data.json();
      console.log(data)
      setData(data)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getData()
  },[])

    return(
        <Box>

        <br /> 
         
         <Box>
            <Flex>
            <Text fontSize='14px' marginTop="-1px" marginLeft="30px"   color= 'black'>Popular Searches:</Text>
            <Text  fontSize='14px' marginLeft="9px" color="grey">swift -</Text>
            <Text  fontSize='14px' color='grey'> scorpio -</Text>
            <Text  fontSize='14px' color='grey'>alto  -</Text>
            <Text  fontSize='14px' color='grey'>innova -</Text>
            <Text  fontSize='14px' color='grey'>fortuner -</Text>
            <Text  fontSize='14px' color='grey'>honda city - </Text>
            <Text  fontSize='14px' color='grey'>bolero -</Text>
            <Text  fontSize='14px' color='grey'>wagon r -</Text>
            <Text  fontSize='14px' color='grey'> bmw -</Text>
            <Text  fontSize='14px' color='grey'>omni </Text>
            </Flex>
          
         </Box>
          
         <center>
         <Image
         marginTop="14px"
           marginLeft="20px"
           width="70%"
           height="70%"
           src='https://tpc.googlesyndication.com/simgad/7387030024057372507?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qktieZP_Sd13GBkR0FBdRnHsxbmqw'
           
             />
         </center>
         <br />


         {/*  SECOND SECTION */}

        
        {/* Home section */}

       <Text color='grey' marginLeft="-1185px">Home</Text>
       <Text as='b' fontSize='20px' marginLeft="-1060px">Used Cars in India</Text>
      
      {/* DROP DOWN */}

      {/* First div */}

      <Box className='d1' display="flex">
         <Box marginLeft="30px" width="330px" >
           <Box className="wRdrop_down">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem
              className="AccordionItem"
              
            >
              <h2>
                <AccordionButton>
                  <Box as="b" flex="1" width="220px" textAlign="left">
                   All Categories
                   <br />
                   
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel textAlign="left">
              Cars (3,28,194)
              </AccordionPanel>
            </AccordionItem>

            </Accordion>

            </Box>



        
       <br />
      <br />
      <br />
      <br />

      {/* LOCATION SECTION */}
 
        
       <Box marginTop="-80px" className="wRdrop_down">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem
              className="AccordionItem"
              
            >
              <h2>
                <AccordionButton>
                  <Box as="b" flex="1"  width="220px" textAlign="left">
                   LOCATIONS
                   <br />
                  {/* <Box>Cars</Box>  */}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel marginTop="-8px"  textAlign="left">
                India
              </AccordionPanel>
              <AccordionPanel marginTop="-15px"  textAlign="left">
               Maharashtra
              </AccordionPanel>
              <AccordionPanel marginTop="-15px"  textAlign="left">
               Kerala
              </AccordionPanel>
              <AccordionPanel  marginTop="-15px"  textAlign="left">
               Delhi
              </AccordionPanel>
            </AccordionItem>

            </Accordion>

            </Box>



        



      <br />

      {/* BRAND MODEL SECTION */}

     <Text  fontSize='20px' marginTop="-5px" marginLeft="-79px">BRAND AND MODEL</Text>
     <Input marginTop="9px" height="30px" width="280px" marginLeft="20px" placeholder='Search brand or model'/>

    {/* POPULAR BRAND */}

    <Text fontSize='20px'  marginTop="20px" marginLeft="-92px">POPULAR BRANDS</Text>       
      <Box marginLeft="30px" marginTop="10px">
     <img width="286px"  src={Brand}/>
     </Box>
    
    <br />
    <br /><br /><br /> 
{/* ALL BRAND */}

<Box marginTop="-80px" className="wRdrop_down">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem
              className="AccordionItem"
              
            >
              <h2>
                <AccordionButton>
                  <Box as="b" flex="1"  width="220px"  textAlign="left">
                   ALL BRANDS
                   <br />
                  {/* <Box>Cars</Box>  */}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel marginTop="-8px"  textAlign="left">
                Maruti Suzuki (1,06,919)
              </AccordionPanel>
              <AccordionPanel marginTop="-15px"  textAlign="left">
              Hyundai (55,904)
              </AccordionPanel>
              <AccordionPanel marginTop="-15px"  textAlign="left">
              Mahindra (28,779)
              </AccordionPanel>
              <AccordionPanel marginTop="-15px"  textAlign="left">
               Honda (21,877)
              </AccordionPanel>
            </AccordionItem>

            </Accordion>

            </Box>
          <br /><br /><br /><br /> 

{/* ALL MODELS */}

<Box marginTop="-80px" className="wRdrop_down">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem
              className="AccordionItem"
              
            >
              <h2>
                <AccordionButton>
                  <Box as="b" flex="1"  width="220px"  textAlign="left">
                   ALL MODELS
                   <br />
                  {/* <Box>Cars</Box>  */}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel  marginTop="-8px"  textAlign="left">
               A8l
              </AccordionPanel>
              <AccordionPanel  marginTop="-15px"  textAlign="left">
            Ambassador Ambassador
              </AccordionPanel>
              <AccordionPanel  marginTop="-15px"  textAlign="left">
             Ashok Leyland Stile
              </AccordionPanel>
              <AccordionPanel marginTop="-15px" textAlign="left">
             Aston Martin DB11
              </AccordionPanel>
            </AccordionItem>

            </Accordion>

            </Box>

    {/* BUFGET */}
<br /><br /><br /><br /> 
    <Box marginTop="-80px" className="wRdrop_down">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem
              className="AccordionItem"
              
            >
              <h2>
                <AccordionButton>
                  <Box as="b" flex="1"  width="220px"  textAlign="left">
                  BUDGET
                   <br />
                  {/* <Box>Cars</Box>  */}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel textAlign="left">
              Choose from options below
              </AccordionPanel>
              <AccordionPanel textAlign="left">
              <Box fontSize="13px"  marginTop="-8px" border="1px solid black" width="200px" height="30px">Below 1 Lac
                 19,300+ cars</Box>
              </AccordionPanel>
              <AccordionPanel textAlign="left">
              <Box fontSize="13px"  marginTop="-8px" border="1px solid black" width="200px" height="30px"> 1 Lac - 2 Lac
                 47,000+ cars</Box>
              </AccordionPanel>
              <AccordionPanel textAlign="left">
              <Box fontSize="13px"  marginTop="-8px" border="1px solid black" width="200px" height="30px"> 2 Lac - 3 Lac
                 47,800+ cars</Box>

              </AccordionPanel>

              <AccordionPanel textAlign="left">
              <Box fontSize="13px" marginTop="-8px" border="1px solid black" width="200px" height="30px"> 3 Lac - 5 Lac
     78,900+ cars</Box>
              </AccordionPanel>

            
            </AccordionItem>

            </Accordion>

            </Box>


   <br /><br /><br /><br /><br />
   

     <br />


     {/* Year */}

     <Box marginTop="-125px" className="wRdrop_down">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem
              className="AccordionItem"
              
            >
              <h2>
                <AccordionButton>
                  <Box as="b" flex="1"  width="220px"  textAlign="left">
                  YEAR
                   <br />
                  {/* <Box>Cars</Box>  */}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel textAlign="left">
              Choose from options below
              </AccordionPanel>
              <AccordionPanel textAlign="left">
              <Box fontSize="13px" marginTop="-8px" border="1px solid black" width="200px" height="30px"> Under 3 Years
25,700+ cars</Box>
              </AccordionPanel>
              <AccordionPanel textAlign="left">
              <Box fontSize="13px" marginTop="-8px"  border="1px solid black" width="200px" height="30px"> Under 5 Years
72,000+ cars</Box>
              </AccordionPanel>
              <AccordionPanel textAlign="left">
            
              <Box fontSize="13px"  marginTop="-8px" border="1px solid black" width="200px" height="30px"> Under 7 Years
1,20,000+ cars</Box>

              </AccordionPanel>

              <AccordionPanel textAlign="left">
              <Box fontSize="13px"  marginTop="-8px" border="1px solid black" width="200px" height="30px"> 7 Years and Above
1,60,000+ cars</Box>
              </AccordionPanel>

            
            </AccordionItem>

            </Accordion>

            </Box>



<br />
<br /><br /><br /><br /><br />



     {/* Km driven */}

     <Box marginTop="-125px" className="wRdrop_down">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem
              className="AccordionItem"
              
            >
              <h2>
                <AccordionButton>
                  <Box as="b" flex="1"  width="220px"  textAlign="left">
                 KM DRIVEN
                   <br />
                  {/* <Box>Cars</Box>  */}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel textAlign="left">
              Choose from options below(km)
              </AccordionPanel>
              <AccordionPanel textAlign="left">
              <Box fontSize="13px"  marginTop="-8px" border="1px solid black" width="200px" height="30px">  Below 25000 km
33,400+ cars</Box>
              </AccordionPanel>
              <AccordionPanel textAlign="left">
              <Box fontSize="13px"  marginTop="-8px"  border="1px solid black" width="200px" height="30px">  25000 km - 50000 km
42,900+  </Box>
              </AccordionPanel>
              <AccordionPanel textAlign="left">
            
              <Box fontSize="13px" marginTop="-8px" border="1px solid black" width="200px" height="30px"> 50000 km - 75000 km
65,800+  </Box>

              </AccordionPanel>

              <AccordionPanel textAlign="left">
              <Box fontSize="13px"  marginTop="-8px" border="1px solid black" width="200px" height="30px"> 75000 km - 100000 km
58,100+   </Box>
              </AccordionPanel>

            
            </AccordionItem>

            </Accordion>

            </Box>
 

<br />
<br /><br /><br /><br /><br />
{/*  Trasmission */}


<Box marginTop="-125px" className="wRdrop_down">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem
              className="AccordionItem"
              
            >
              <h2>
                <AccordionButton>
                  <Box as="b" flex="1"  width="220px"  textAlign="left">
                  TRANSMISSION
                   <br />
                  {/* <Box>Cars</Box>  */}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel textAlign="left">
              Choose from below options
              </AccordionPanel>
               
              <AccordionPanel textAlign="left">
              <Box fontSize="13px" marginTop="-8px"    border="1px solid black" width="200px" height="30px"> Automatic
59,800+ cars</Box>
              </AccordionPanel>
              <AccordionPanel textAlign="left">
           
              <Box fontSize="13px" marginTop="-8px" border="1px solid black" width="200px" height="30px">    Manual
2,50,000+ cars </Box>

              </AccordionPanel>

              

            
            </AccordionItem>

            </Accordion>

            </Box>

        </Box>


        {/* second div */}





      <Box   width="900px"  marginTop="70px"   marginLeft="50px">

         {/* DROP DOWN UPPER */}
          <Box marginLeft="-2px" marginTop="-60px"   width="500px" className="wRdrop_down">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem
            backgroundColor="white"
              className="AccordionItem"
              
            >
              <h2>
                <AccordionButton>
                  <Box as="b" flex="1"  width="200px"  textAlign="left">
                  SORT BY: Date Update
                   <br />
                  {/* <Box>Cars</Box>  */}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel textAlign="left">
              <Box fontSize="13px" marginTop="-14px"  width="200px" >   Date Published</Box>
             
              </AccordionPanel>
               
              <AccordionPanel textAlign="left">
              <Box fontSize="13px" marginTop="-14px"  width="200px" > Relevance</Box>
              </AccordionPanel>
              <AccordionPanel textAlign="left">
           
              <Box fontSize="13px" marginTop="-14px"  width="200px"  >Price: Low to High</Box>

              </AccordionPanel>

              <AccordionPanel textAlign="left">
           
           <Box fontSize="13px" marginTop="-14px" width="200px"   >Price: High to Low</Box>

           </AccordionPanel>

           <AccordionPanel textAlign="left">
           
           <Box fontSize="13px" marginTop="-14px"  width="200px" >Distance</Box>

           </AccordionPanel>
            </AccordionItem>

            </Accordion>

            </Box>





         {/* MAP THE DATA */}

         <Box  className='mainpage'>
               {
               data.map( Car =>
                   <div key = {Car.id} >
                   <br />
                        <img  style={{height:"200px",width:"260px" }} src={Car.image}/>
                        <br />
                        <Box marginTop="-10px" marginLeft="14px">  < FaRupeeSign/></Box>
                      
                        <Box fontSize="15px" color='black' marginTop='-20px' marginLeft="-160px"> {Car.price}  </Box> 
                       
                       
                        <Box marginTop="4px" fontSize="12px" color="grey" marginLeft="-160px"> {Car.distance}  </Box> 
                       
                         
                        <Box fontSize="13px" color="black" marginLeft="-140px">  {Car.title}</Box> 
                        <Box  fontSize="12px" color="grey.200"  marginLeft="-60px">   {Car.location}</Box> 
                       <br />
                       {/* <Button  colorScheme='teal' marginLeft="5px" marginTop="-5px" ><Link to="/Cart">Cart</Link></Button> */}
                        
                </div>
                   )
                 }
         </Box>
     </Box>
  </Box>

    
     
    </Box>
    )
}
export default Car






