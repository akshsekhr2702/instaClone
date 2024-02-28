import { Avatar, Box, Divider, Flex, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, VStack, useDisclosure } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Comment from "../Comments/Comment";
import PostFooter from "../FeedPost/PostFooter";


const ProfilePost = ({img}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    
    <GridItem
    cursor={'pointer'}
    borderRadius={4}
    overflow={"hidden"}
    border={"1px solid whiteAlpha.600"}
    position={"relative"}
    aspectRatio={1/1}
    onClick={onOpen}
   
    >
      <Flex
      opacity={0}
      _hover={{opacity:1}}
      position={'absolute'}
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg={"blackAlpha.800"}
      transition={"all 0.3s ease"}
      zIndex={1}
      justifyContent={"center"}
      >
        <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
          <Flex>
            <AiFillHeart />
            <Text fontWeight={"bold"} ml={2}>
              7
            </Text>
          </Flex>
          <Flex>
          <FaComment />
            <Text fontWeight={"bold"} ml={2}>
              7
            </Text>
          </Flex>
        </Flex>
      </Flex>
      
      <Image src={img} alt="profile post "/>
    </GridItem>
    <Modal isOpen={isOpen} onClose={onClose}
    isCentered={true}
    size={{base:'3xl', md:'5xl'}}>
        <ModalOverlay />
        <ModalContent>
          
          <ModalCloseButton />
          <ModalBody bg={'black'} pb={5} >
          <Flex gap={4} w={{base:"90%", md:'full'}} mx={"auto"}>
            <Box
            borderRadius={4}
            overflow={"hidden"}
            border={"1px solid whiteAlpha.300"}
            flex={1.5}
            >
              <Image src={img} alt="profile pic" />


            </Box>
            <Flex flex={1} flexDir={'column'} px={10} display={{base:'none', md:'flex'}}>
                
              <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Flex>

              <Avatar
              src="/profilepic.png" size={'sm'} name="the verse" />
              <Text fontWeight={"bold"} fontSize={12}>
                The Verse
              </Text>
              </Flex>

              <Box _hover={{bg:'whiteAlpha.300', color:"red"}}>
              <MdDelete size={20} cursor={"pointer"}/>    


              </Box>
            </Flex>
            <Divider my={4} bg={'gray.500'}/>
            <VStack w={'full'} alignItems={"start"} maxH={'350px'} overflow={ 'auto'}> 
            <Comment 
               createdAt='1d ago'
               username='Rishika'
               profilePic='/profilepic.png'
               text={"dummy text frim unsplash"}
            />
            <Comment
               createdAt='1d ago'
               username='Rishika'
               profilePic='/profilepic.png'
               text={"dummy text frim unsplash"}
            />
            <Comment
               createdAt='1d ago'
               username='Rishika'
               profilePic='/profilepic.png'
               text={"dummy text frim unsplash"}
            />
            <Comment
               createdAt='1d ago'
               username='Rishika'
               profilePic='/profilepic.png'
               text={"dummy text frim unsplash"}
            />
            <Comment
               createdAt='1d ago'
               username='Rishika'
               profilePic='/profilepic.png'
               text={"dummy text frim unsplash"}
            />
            <Comment
               createdAt='1d ago'
               username='Rishika'
               profilePic='/profilepic.png'
               text={"dummy text frim unsplash"}
            />
            <Comment
               createdAt='1d ago'
               username='Rishika'
               profilePic='/profilepic.png'
               text={"dummy text frim unsplash"}
            />
            <Comment
               createdAt='1d ago'
               username='Rishika'
               profilePic='/profilepic.png'
               text={"dummy text frim unsplash"}
            />
            <Comment
               createdAt='1d ago'
               username='Rishika'
               profilePic='/profilepic.png'
               text={"dummy text frim unsplash"}
            />
            <Comment
               createdAt='1d ago'
               username='Rishika'
               profilePic='/profilepic.png'
               text={"dummy text frim unsplash"}
            />

            </VStack>
            <Divider my={4} bg={'gray.800'} />
            <PostFooter isProfilePage={true}/>
              </Flex>

          </Flex>
          </ModalBody>

          
        </ModalContent>
      </Modal>
   
    
    </>
   
  );
}

export default ProfilePost;
