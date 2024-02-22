import { Box, Container, Image } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";


const FeedPost = ({img ,username, avatar}) => {
  return (
    <Container>
        <PostHeader  username={username}  avatar={avatar}/>
        <Box my={2}
        borderRadius={4}
        overflow={"hidden"}
        >
            <Image src={img} alt={username}/>
        </Box>
        <PostFooter username={username} />
    </Container>
  );
}

export default FeedPost;
