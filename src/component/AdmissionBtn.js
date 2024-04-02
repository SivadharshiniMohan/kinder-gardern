import { Button } from '@mui/material';
import React from 'react';

const AdmissionBtn = (props) => {
	const { width , height, content} = props;
	return   <Button  sx={{borderRadius:"100px", width:{width}, height:{height}, fontFamily:"Capriola", background:"#ffae44", color:"#fff", fontWeight:700, transition: 'transform 0.3s ease-in-out', // Add transition effect
	'&:hover': {
	background:"#92c251",
  transform: 'scale(1.1)', // Scale effect on hover
},}}>
{content}
</Button>
}

export default AdmissionBtn;