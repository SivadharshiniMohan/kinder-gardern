import React from "react";
import { Link, Stack, useTheme, useMediaQuery } from "@mui/material";
import {  Link as RouterLink } from "react-router-dom";
import AdmissionBtn from "./AdmissionBtn";


const Nav = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const header= ["Home", "About","Curriculum","Contact"]
  return (

	  <Stack direction="row" justifyContent={"space-between"} alignItems={"center"} sx={{ background: "#036ea6"}} px={2} height={"10vh"} width={"100.5%"} >
		  logo
		  {header.map((head) => {
			  return <Link sx={{textDecoration:"none", color:"#fff",  fontWeight:700, cursor:"pointer", "&:hover": {
				  color: "yellow",
				  transform: "scale(1.1)", // Zoom effect
				  transition: "transform 0.2s ease-in-out", // Transition animation
				
		 
			  } }}>{head}</Link>
		  })}
		  <Stack my={5} p={10}><AdmissionBtn width="150px" height="40px" content="Book now"/></Stack>
		

</Stack>
    
  );
};

export default Nav;
