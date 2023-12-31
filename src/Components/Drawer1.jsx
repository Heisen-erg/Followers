import {
    Drawer,
   useColorMode,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react';
  import {motion} from "framer-motion"
  import {Link} from "react-router-dom"
  
  import { Tabs, TabList, Tab  } from '@chakra-ui/react'
  import React from "react";
  import { useDisclosure } from '@chakra-ui/react';
  import { Button } from '@chakra-ui/react';

  function Drawer1() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const { colorMode, toggleColorMode } = useColorMode()
  
    return (
      <>
      <div style={{backgroundColor:'grey',height:'6vh'}}>
      <motion.div
      initial={{ opacity: 0 ,x:0 }}
      animate={{ opacity: 1, x:0}}
      transition={{duration:1}}
      
    > <Button ref={btnRef} color={'black.900'} marginLeft={1} marginTop={1} w={'3vw'} h={'5vh'} onClick={onOpen}>
        <i className="bi bi-list"></i>
        </Button> </motion.div>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
          size={'xs'}
         
        >
          <DrawerOverlay   />
          <DrawerContent  bgColor={'blackAlpha.900'} color={'white'}  onClick={onClose} >
            <DrawerCloseButton />
            <Tabs variant={'unstyled'} >
  <TabList   flexDirection={'column'} rowGap={'2'}>
   <Tab> <Link to='/'>  <Tab marginTop={'5vh'} _hover={{boxShadow:' inset 1px 1px 1px white'}} w={'300px'} ><div> <i className="bi bi-house-door"> </i>  <p>HOME</p> </div>    </Tab></Link></Tab>
   <Tab> <Link to="/Contact"  >  <Tab marginTop={'.3vh'} _hover={{boxShadow:' inset 1px 1px 1px white'}} w={'300px'} > <div>  <i className="bi bi-person-lines-fill"></i> <p>CONTACT</p> </div>  </Tab>   </Link></Tab>
   <Tab> <Link to='/pricing'> <Tab marginTop={'.3vh'} _hover={{boxShadow:' inset 1px 1px 1px white'}} w={'300px'} > <div> <i className="bi bi-currency-rupee"></i> <p>PRICING</p >  </div></Tab> </Link></Tab>
   <Tab  marginTop={'.3vh'} onClick={toggleColorMode} _hover={{boxShadow:' inset 1px 1px 1px white'}} > <Link><i className="bi bi-moon"  p-4 ></i> <p>DARK MODE</p> </Link>  </Tab>
    <Tab> <Link to="/register"> <Tab marginTop={'.3vh'} _hover={{boxShadow:' inset 1px 1px 1px white'}} w={'300px'}  > <div> <i className="bi bi-envelope"></i> <p>REGISTER</p> </div>  </Tab></Link> </Tab>
    <Tab marginTop={'.3vh'}   _hover={{boxShadow:' inset 1px 1px 1px white'}} >  <Link><i className="bi bi-box-arrow-right"></i> <p>LOGIN</p></Link>  </Tab>
    <Tab> <Link to="/admin"> <Tab marginTop={'.3vh'} _hover={{boxShadow:' inset 1px 1px 1px white'}} w={'300px'}  > <div> <i className="bi bi-envelope"></i> <p>ADMIN</p> </div>  </Tab></Link> </Tab>
  </TabList>
  </Tabs>
  
            
  
         
          </DrawerContent>
        </Drawer>
      

        </div>
      </>

    )
  }

export default Drawer1;