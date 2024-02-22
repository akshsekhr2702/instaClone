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
    <SuggestedUser avatar="https://instagram.fblr1-5.fna.fbcdn.net/v/t51.2885-19/273955963_3155643701429447_6067706368413161401_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fblr1-5.fna.fbcdn.net&_nc_cat=111&_nc_ohc=GSafkhBjM2QAX9Dex30&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCB37KgIa1HWsWIoubazZEZ5ur4kJn9_yHIL0pShGX5oQ&oe=65D67E52&_nc_sid=8b3546" name="rishikakumari1206" followers={23} />
    <SuggestedUser />
    <SuggestedUser />

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
