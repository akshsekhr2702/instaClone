import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";


const Pagelayout = ({children}) => {
    const {pathname}= useLocation()
  return (
    <Flex>
        {/* side bar for left */}
        {pathname !== "/auth" ? (
        <Box w={{base:"70px", md:"240px"}}>
            <Sidebar/>
        </Box>): null}
        
        {/* the page content on left */}
        <Box flex={1} w={{base:"calc(100%-70px)" , md: "calc(100%-240px)"}}>
            {children}
        </Box>
    </Flex>
  );
}

export default Pagelayout;
