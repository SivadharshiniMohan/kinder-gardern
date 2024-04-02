import { Grid, Stack, Typography, useTheme, useMediaQuery } from '@mui/material';
import React from 'react';
import about from './../asset/about.jpg';


const About = () => {
	const theme = useTheme();
	const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
	return <Stack width={"100%"}>
	<Grid container >
		<Grid item sx={12} md={6}>
		<Stack direction={"row"} flexDirection={"column"} alignItems={"center"}  height={"90vh"} justifyContent={"center"} my={5}>
				<img src={about} width={"80%"} />
				</Stack>
		</Grid>
		<Grid item sx={12} md={6}>
		<Stack direction={"row"} flexDirection={"column"} alignItems={"center"}  height={isMobileView?"":"90vh"} justifyContent={"center"}><Typography variant="h3" gutterBottom fontFamily= "Capriola" color={"#036ea6"} py={2}>
				 About us
					
        </Typography>
        <Typography variant="h5" paragraph fontFamily= "Capriola" color={"#385469B2"} mx={2}>
		We are constantly expanding the range of services offered, taking care of children of all ages. Our goal is to carefully educate and develop children in a fun way. We strive to turn the learning process into a bright event so that children study with pleasure.
				</Typography>
				</Stack>
		</Grid>
		</Grid>
		</Stack>
}
export default About;