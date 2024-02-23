import { Container, Flex } from '@chakra-ui/react';
import React from 'react';
import ProfileHeader from '../../components/Profile/ProfileHeader';
import Profiletabs from '../../components/Profile/Profiletabs';
import ProfilePosts from '../../components/Profile/ProfilePosts';

const ProfilePage = () => {
  return (
    <Container maxW={"container.lg"} py={5}>
        <Flex py={10} px={4} pl={{base:4, md:10}} w={"full"} mx={"auto"} flexDirection={"column"}>
            <ProfileHeader />
        </Flex>
        <Flex>
            <Profiletabs />
            <ProfilePosts />
        </Flex>

    </Container>
  );
}

export default ProfilePage;
