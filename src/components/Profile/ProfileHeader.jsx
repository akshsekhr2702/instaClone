import { Avatar, AvatarGroup, Button, Flex, Text, VStack, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import useUserProfileStore from '../../store/userProfileStore';
import useAuthStore from '../../store/authStore';

const ProfileHeader = () => {
  const { userProfile } = useUserProfileStore();
  const authUser = useAuthStore((state) => state.user);
  const visitingOwnProfileAndAuth = authUser && authUser.username === userProfile.username;
  const visitingAnotherProfileAndAuth = authUser && authUser.username !== userProfile.username;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
       <Flex gap={{base:4,sm:10}} py={10} direction={{base:"column",sm:"row"}}>
        <AvatarGroup
        size={{base:'xl',md:'2xl'}}
        justifySelf={'center'}
        alignSelf={"flex-start"}
        mx={'auto'}
        >
          <Avatar name='The Verse' srv={userProfile.profilePicURL} alt="profilepic"/>
        </AvatarGroup>
        <VStack alignItems={"start"}gap={2} mx={'auto'} flex={1}
        >
          <Flex gap={4} direction={{base:"column",sm:"row"}}
          justifyContent={{base:'center',sm:'flex-start'}}
          alignItems={'center'}
          w={'full'}
          >
          <Text fontSize={{base:"sm", md:'lg'}}>
            {userProfile.username}

          </Text>
          {visitingOwnProfileAndAuth && (
            <Flex gap={4} alignItems={'center'} justifyContent={'center'}>
            <Button bg={'white'} color={'black'} _hover={{bg:"red"}} onClick={onOpen} size={{base:'xs', md:"sm"}}>
              Edit Profile
            </Button>
          </Flex>

            
          )}
          {visitingAnotherProfileAndAuth && (
            <Flex gap={4} alignItems={'center'} justifyContent={'center'}>
            <Button bg={'white'} color={'black'} _hover={{bg:"red"}} size={{base:'xs', md:"sm"}}>
              Follow
            </Button>
          </Flex>

            
          )}
          

          </Flex>
          <Flex alignItems={'center'} gap={{base:2, sm:4}}>
            <Text fontSize={{base:'xs', md:'sm'}}>
            <Text as="span" fontWeight={"bold"} mr={1}>{userProfile.posts.length}</Text>
           posts
           
              </Text>
            <Text fontSize={{base:'xs', md:'sm'}}>
            <Text as="span" fontWeight={"bold"} mr={1}>{userProfile.followers.length}</Text>
            followers
          
              </Text>
              
            <Text fontSize={{base:'xs', md:'sm'}}>
            <Text as="span" fontWeight={"bold"} mr={1}>{userProfile.following.length}</Text>
           
           following
              </Text>


          </Flex>
          <Flex alignItems={'center'} gap={4}>
            <Text fontSize={"sm"} fontWeight={"bold"}>{userProfile.fullname}</Text>

          </Flex>
            <Text fontSize={"sm"} >{userProfile.bio} </Text>

        </VStack>
        {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
       </Flex>
      
    </div>
  );
}

export default ProfileHeader;
