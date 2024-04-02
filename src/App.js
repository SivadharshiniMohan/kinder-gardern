import { Stack } from '@mui/material';
import NavBar from './component/nav';
import Home from './pages/Home';
import About from './pages/About';
import Curriculum from './pages/cuccriculam';

function App() {
  return (
	  <Stack sx={{fontFamily: "Capriola" }} maxWidth={"95.5vw"} >
		  <NavBar />
		  <Home />
		  <About />
		  <Curriculum/>	
	  </Stack>
  );
}

export default App;
