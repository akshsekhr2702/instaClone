import { Box, Button, Flex, Input, VStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useState } from "react";
import { Text } from "@chakra-ui/react";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";



const Authfrom = () => {
  const [isLogin , setIsLogin] = useState(true);
  
  
  
  return(
     <>
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram"/>
          {/* ----------email----------- */}
          {isLogin ? <Login /> : <Signup />}
        <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
        <Box flex={2} h={'1px'} bg={'white'} />
        <Text mx={1} color={"white"} > OR</Text>
        <Box flex={2} h={'1px'} bg={'white'} />
        </Flex>
       <GoogleAuth />
        </VStack>

  </Box>
  <Box border={"1px solid gray"} borderRadius={4} padding={5}>
<Flex alignItems={"center"} justifyContent={"center"}>
  <Box>
    {isLogin? "Don't have an account" : "Already have an account?"}
  

  </Box>
  <Box onClick={()=> setIsLogin(!isLogin)}  color={'blue.400'} cursor={"pointer"}>
      {isLogin? "Sign Up":"Log in"}
  </Box>
  </Flex>
  </Box>
 </>
  )
   
  ;
}

export default Authfrom;
