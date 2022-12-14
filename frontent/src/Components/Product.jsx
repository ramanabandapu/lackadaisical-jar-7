import { Text,Box,Flex,Image, Input} from '@chakra-ui/react'
import "./Product.css"
import Brand from "../Image/Brand.PNG"
const Product=()=>{

    return(
        <Box>

         <Text>Product Page</Text>
         
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

       <Text color='grey' marginLeft="-974px">Home</Text>
       <Text as='b' fontSize='20px' marginLeft="-847px">Used Cars in India</Text>
       
       <Text marginTop="10px"  fontSize='17px' marginLeft="-920px" color="black">CATEGORIES</Text>

        <Text marginTop="10px"  marginLeft="-850px"> All Categories</Text>
       <Box fontSize="15px" marginLeft="-1px"   width="230px" height="30px"> Cars (3,27,966)</Box>

       <br />
      <br />
      <br />
      <br />

      {/* LOCATION SECTION */}

       <Text  fontSize='20px' marginTop="-60px" marginLeft="-907px" color="black">LOCATIONS</Text> 
       <Text color='grey' marginLeft="-970px">India</Text>
        
      <br />

      {/* BRAND MODEL SECTION */}

     <Text  fontSize='20px' marginTop="-5px" marginLeft="-830px">BRAND AND MODEL</Text>
     <Input marginTop="9px" height="30px" width="240px" marginLeft="-777px" placeholder='Search brand or model'/>

    {/* POPULAR BRAND */}

    <Text fontSize='20px' marginTop="14px" marginLeft="-844px">POPULAR BRANDS</Text>       
      <Box marginLeft="30px" marginTop="10px">
     <img width="250px"  src={Brand}/>
     </Box>
    

    {/* BUFGET */}
   <br /><br /><br /><br /><br />
   <Text fontSize='20px' marginTop="-90px" marginLeft="-935px"> BUDGET</Text>

   <Text fontSize="13px" color='grey'  marginLeft="-845px">Choose from options below</Text>
  
   <Box fontSize="13px" marginTop="10px" marginLeft="39px" border="1px solid black" width="230px" height="30px">Below 1 Lac
    19,300+ cars</Box>

    <Box fontSize="13px" marginTop="6px" marginLeft="39px" border="1px solid black" width="230px" height="30px"> 1 Lac - 2 Lac
    47,000+ cars</Box>

    <Box fontSize="13px" marginTop="6px" marginLeft="39px" border="1px solid black" width="230px" height="30px"> 2 Lac - 3 Lac
    47,800+ cars</Box>

    <Box fontSize="13px" marginTop="6px" marginLeft="39px" border="1px solid black" width="230px" height="30px"> 3 Lac - 5 Lac
     78,900+ cars</Box>

     <br />


     {/* Year */}


     <Text fontSize='20px' marginLeft="-960px">YEAR</Text>

   <Text fontSize="13px" color='grey' marginLeft="-845px">Choose from options below</Text>

   <Box fontSize="13px" marginTop="10px" marginLeft="39px" border="1px solid black" width="230px" height="30px"> Under 3 Years
25,700+ cars</Box>

 <Box fontSize="13px" marginTop="6px" marginLeft="39px" border="1px solid black" width="230px" height="30px"> Under 5 Years
72,000+ cars</Box>

 <Box fontSize="13px" marginTop="6px" marginLeft="39px" border="1px solid black" width="230px" height="30px"> Under 7 Years
1,20,000+ cars</Box>

 <Box fontSize="13px" marginTop="6px" marginLeft="39px" border="1px solid black" width="230px" height="30px"> 7 Years and Above
1,60,000+ cars</Box>

<br />




     {/* Km driven */}

     <Text fontSize='20px' marginLeft="-900px">KM DRIVEN</Text>

<Text fontSize="13px" color='grey' marginLeft="-814px"> Choose from options below (km)</Text>

<Box fontSize="13px" marginTop="10px" marginLeft="39px" border="1px solid black" width="230px" height="30px"> Below 25000 km
33,400+ cars</Box>

 <Box fontSize="13px" marginTop="6px" marginLeft="39px" border="1px solid black" width="230px" height="30px">  25000 km - 50000 km
42,900+ cars</Box>

 <Box fontSize="13px" marginTop="6px" marginLeft="39px" border="1px solid black" width="230px" height="30px"> 50000 km - 75000 km
65,800+ cars</Box>

 <Box fontSize="13px" marginTop="6px" marginLeft="39px" border="1px solid black" width="230px" height="30px">  75000 km - 100000 km
58,100+ cars</Box>

<br />
{/*  Trasmission */}

<Text fontSize='20px' marginLeft="-870px">TRANSMISSION</Text>

<Text fontSize="13px" color='grey' marginLeft="-845px"> Choose from below options</Text>

<Box fontSize="13px" marginTop="10px" marginLeft="39px" border="1px solid black" width="230px" height="30px"> Automatic
59,800+ cars</Box>

 <Box fontSize="13px" marginTop="6px" marginLeft="39px" border="1px solid black" width="230px" height="30px"> Manual
2,50,000+ cars</Box>

    <Box id="vertical-line"></Box>






















     </Box>
    )
}
export default Product