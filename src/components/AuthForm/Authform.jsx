import { Box, Button, Flex, Input, VStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useState } from "react";
import { Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


const Authfrom = () => {
  const [isLogin , setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email:"",
    password:"",
    confirmPassword:"",
  })
  const handleAuth =()=>{
     if(!inputs.email||!inputs.password){
        alert("hi");
        return;
     }
      navigate("/");
  };
  return(
     <>
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram"/>
          {/* ----------email----------- */}
          <Input placeholder="Email" fontSize={14} type="email" 
          value={inputs.email} 
          onChange={(e)=>{setInputs({...inputs, email:e.target.value})  }}/>
          {/* ------------password--------------- */}
          <Input placeholder="password" fontSize={14} type="password"
           value={inputs.password}
          onChange={(e)=>{setInputs({...inputs, password:e.target.value})  }}/>
          {/* ----------------confirmPassword------------------ */}
          {!isLogin ? <Input placeholder="Confirm Passwrod"
          value={inputs.confirmPassword}
          onChange={(e)=>{setInputs({...inputs, confirmPassword:e.target.value})  }}
           fontSize={14} type="password"/> : null}
          <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14} onClick={handleAuth}>
            {isLogin ? "Log in" : "Sign Up"}
          </Button>
        <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
        <Box flex={2} h={'1px'} bg={'white'} />
        <Text mx={1} color={"white"} > OR</Text>
        <Box flex={2} h={'1px'} bg={'white'} />
        </Flex>
        <Flex alignItems={'center'} justifyContent={'center'} cursor={'pointer'}>
          <Image src="/google.png" w={5} alt="Google login"/>
          <Text mx={2} color={'blue.500'}>
            Login in With Google
          </Text>
        </Flex>
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
