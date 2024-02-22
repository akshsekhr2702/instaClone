import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react';
import FeedPost from '../FeedPost/FeedPost';
import { useEffect, useState } from 'react';


const FeedPosts = () => {
  const[isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },2000)
  },[])
  return (

<Container maxW={"container.sm"} px={10} py={10}>
  {isLoading && [0,1,2,4].map((_, idx)=>(
    <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
     <Flex gap={3}>
      <SkeletonCircle size="10" />
      <VStack gap={2} alignItems={"flex-start"}>
        <Skeleton height={"20px"} w={"200px"}/>
        <Skeleton height={"20px"} w={"200px"}/>
        
      </VStack>
    </Flex>
    <Skeleton w={'full'}>
      <Box h={"500px"}>Contents wrapped</Box>
    </Skeleton>

    </VStack>
  ))}
    {!isLoading &&(
        <>
        <FeedPost
    username="homie_12" img='/The Verse-logos.jpeg' avatar='/img1.png' />
    <FeedPost
    username="homboi" img='/img3.png' avatar='/img1.png' />
    <FeedPost
    username="homie_12" img='/img2.png' avatar='/img3.png' />
    <FeedPost
    username="homie_12" img='/img4.png' avatar='/img4.png' />
        </>
      )
    }
    





</Container>
  );
}

export default FeedPosts;
