import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import { useState } from "react";


const SuggestedUser = ( {avatar, name , followers}) => {
  const [isFollowed, setFollowed] = useState(false)
  return (

    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name={name} size={"md"} src={avatar}>
        </Avatar>
       <VStack spacing={2}>
        <Box fontSize={12} fontWeight={"bold"}>
          {name}

        </Box>
        <Box fontSize={11} color={"gray.500"}>
          {followers} followers

        </Box>

       </VStack>

      </Flex> 
      <Button
      fontSize={13}
      bg={"transparent"}
      p={0}
      h={"max-content"}
      fontWeight={"medium"}
      cursor={"pointer"}
      _hover={{color:"white"}}
      color={"blue.400"}
      onClick={()=> setFollowed(!isFollowed)}
      >
        {isFollowed ? "Unfollow" : "Follow"}
        </Button>
    </Flex>
  );
}

export default SuggestedUser;
