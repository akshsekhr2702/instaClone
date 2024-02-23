import {  Box, Flex, Link, Text, VStack } from '@chakra-ui/react';
import SuggestedHeader from './SuggestedHeader';
import SuggestedUser from './SuggestedUser';

const SuggestedUsers = () => {
  return (
  <>
  <VStack
  py={8} px={6}
  gap={4}
  >
    <SuggestedHeader />
    <Flex alignItems={'center'} justifyContent={"space-between"} w={"full"} >
        
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
            Suggested for you
        </Text>
        <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.400"}} cursor={'pointer'}>
            See All

</Text>
    </Flex>
    <SuggestedUser avatar="https://www.pexels.com/photo/smiling-woman-carrying-basket-on-back-with-flowers-18262756/" name="rishikakumari1206" followers={23} />
    <SuggestedUser avatar="" name="rishikakumari1206" followers={23} />
    <SuggestedUser avatar="" name="rishikakumari1206" followers={23} />
   

    <Box
    fontSize={12}
    color={'gray.500'}
    mt={5}
    alignSelf={"flex-start"}
    >
        @2024 Built By{" "}
        <Link href='https://github.com/Vincenzo1206' target='_blank' color={'blue.500'} fontSize={14}>
            VINCENZO(prishika)
        </Link>

    </Box>
  </VStack>
  </>
  );
}

export default SuggestedUsers;
