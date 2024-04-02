import React from 'react';
import { Box, Typography, Button,  Stack, useMediaQuery,useTheme } from '@mui/material';
import banner from "./../asset/banner.jpg";
import AdmissionBtn from '../component/AdmissionBtn';


const Home = () => {
	const theme = useTheme();
	const isMobileView = useMediaQuery(theme.breakpoints?.down('sm'));
	return (
    <Stack
      sx={{
        backgroundImage: `url(${banner})`,
			  backgroundSize: 'cover',	
			
       
     
			
			
		  }}
		
		
			width={"100%"}
			p={2.5}
		 
		  
    >
      <Stack spacing={6} mx={5} sx={{   display: 'flex', height: '84vh',
        alignItems: 'flex-start',
        justifyContent: 'center',}}>
        <Typography variant="h3" gutterBottom fontFamily= "Capriola"  >
				  Join our friendly Wisdom family
					
        </Typography>
        <Typography variant="body1" paragraph fontFamily= "Capriola" width={"50%"} color={"#385469B2"} >
		we have a unique program that helps each child quickly adapt and feel at home. We also help each child find his own way. Become a Person, be happy and change the world for better
        </Typography>
        
        <AdmissionBtn width={isMobileView ? "200px": "20%"} height="70px" content="Admission"/>
      </Stack>
    </Stack>
  );
};

export default Home;
