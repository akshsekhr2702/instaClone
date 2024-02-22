import { Box, Container, Flex, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import Authform from '../../components/AuthForm/Authform';


const Authpage = () => {
  return (
 
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4} py={10}>
       <Container maxW={"container.md"} padding={0}>
        <Flex> 
            {/* LHS */}
        <Box display={{base:'none',md:'block'}}>
            <Image src='/auth.png' h={575} alt='Phone IMG' />
            
        </Box>
         <VStack spacing={4} align={"stretch"}>
            <Authform/>
            <Box textAlign={"center"}>Get the app</Box>
            <Flex gap={5} justifyContent={"center"}>
                <Image src='/playstore.png' h={"10"} alt='PLAYSTORE'/>
                <Image src='/microsoft.png' h={"10"} alt='PLAYSTORE'/>

            </Flex>
        </VStack></Flex>
       
        {/* RHS         */}
       

       </Container>


 </Flex>
  );
}

export default Authpage;
