import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

const JuniorCard = (props) => {
	const {title, years, content, background, img} = props;
	return <Stack>
					<Stack direction={"row"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"} sx ={{borderRadius:"15px", background:background}} width={"fit-content"} p={5} > 

		<Typography variant="h3" gutterBottom fontFamily="Capriola" color={"#036ea6"} py={2}>
				{title}
					
			</Typography>
			
			<Typography variant="body1" color={"#ffae44"}>
				{years}
			</Typography>
		<Grid container>
			<Grid item sm={10}>
			{content.map((data, index) => {
				return <Typography variant="body1" textAlign={"left"} p={2}>
			{index+1} {data}
			</Typography>

			})
			}
			
		
			</Grid>
			<Grid item sm={2} bottom={10} mt={10}>
			<img src={img} width={50} height={100}/>
			</Grid>
			</Grid>
				
			</Stack>
	</Stack>
}

export default JuniorCard;