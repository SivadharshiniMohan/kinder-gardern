import { Stack, Typography } from "@mui/material";
import React from "react";
import JuniorCard from "../component/JuniorCard";
import j1 from "./../asset/junior-1.png";
import j2 from "./../asset/junior-2.png";
import j3 from "./../asset/junior-3.png";

const Curriculum = () => {
	const junior1 = ["Сognitive ", " Speech development", " Social communication skills", " Physical development", " Development of creativity", " Motor skills improvement"];
	const junior2 = ["Knowledge expansion", " Speech development", " Learning aithmetic", " Exploring the world", " Skill development", "Self-reliance training"];
	const junior3=[" Individual approach", "Preparing for first class","special program",
	"Reading lessons",
	"Speech correction",
	"Learning new languages"]
	return <Stack sx={{background:"#eff5f6"}} width="100%" >
		<Stack direction={"row"} justifyContent={"center"}  >
       <Typography variant="h3" gutterBottom fontFamily= "Capriola" color={"#036ea6"} py={2}>
				 Curriculum
					
		</Typography>
	
	</Stack>
		<Stack m={2} direction={"row"} gap={3}><JuniorCard title="Play Ground" years="2-3 years" content={junior1} background="#fff" img={j1}/>
			<JuniorCard title="Nursery" years="3-4 years" content={junior2} background="#f3ede4" img={j2}/>
			<JuniorCard title="Junior" years="4-5 years" content={junior3} background="#70a6b1"img={j3}/>
		</Stack></Stack>
}

export default Curriculum;