
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Container from './Components/Container/Container';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
    <Navbar/>
    <Container>
    <AboutMe />
    <Projects/>
    <Contact/>
    </Container>
    
    </>
  );
}

export default App;
