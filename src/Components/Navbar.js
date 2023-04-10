
import './Navbar.css'
import React,{useState,useEffect} from 'react'
import PhysicsComponent from './PhysicsComponent.js'
import ChemistryComponent from './ChemistryComponent.js'
import MathsComponent from './MathsComponent.js'
import EnglishComponent from './EnglishComponent.js'
import BiologyComponent from './BiologyComponent.js'
import SidePhysicsComponent from './SidePhysicsComponent.js'
import SideChemistryComponent from './SideChemistryComponent.js'
import SideMathsComponent from './SideMathsComponent.js'
import SideEnglishComponent from './SideEnglishComponent.js'
import SideBiologyComponent from './SideBiologyComponent.js'

function Navbar() {




  const [showPhysicsComponent, setShowPhysicsComponent] = useState(false);
  const [showSidePhysicsComponent, setShowSidePhysicsComponent] = useState(false);
  function handlePhysicsClick() {
    setShowPhysicsComponent(true);
    setShowChemistryComponent(false);
    setShowMathsComponent(false);
    setShowEnglishComponent(false);
    setShowBiologyComponent(false);

    setShowSidePhysicsComponent(true);
    setShowSideChemistryComponent(false);
    setShowSideMathsComponent(false);
    setShowSideEnglishComponent(false);
    setShowSideBiologyComponent(false);

    const fetchdata = async () => {
      let url = "https://en.wikipedia.org/w/api.php";
    
      
  try {
    let data = await fetch(url);
    let parsedData = await data.text();
    console.log(parsedData)
    
    
  } catch (error) {
    console.error("Error fetching data:", error);
  }
   
    };
    fetchdata();
  }

  const [showMathsComponent, setShowMathsComponent] = useState(false);
  const [showSideMathsComponent, setShowSideMathsComponent] = useState(false);
  function handleMathsClick() {
    setShowMathsComponent(true);
    setShowChemistryComponent(false);
    setShowPhysicsComponent(false);
    setShowEnglishComponent(false);
    setShowBiologyComponent(false);

    setShowSideMathsComponent(true);
    setShowSideChemistryComponent(false);
    setShowSidePhysicsComponent(false);
    setShowSideEnglishComponent(false);
    setShowSideBiologyComponent(false);
  }

  const [showChemistryComponent, setShowChemistryComponent] = useState(false);
  const [showSideChemistryComponent, setShowSideChemistryComponent] = useState(false);
  function handleChemistryClick() {
    setShowChemistryComponent(true);
    setShowPhysicsComponent(false);
    setShowMathsComponent(false);
    setShowEnglishComponent(false);
    setShowBiologyComponent(false);

    setShowSideChemistryComponent(true);
    setShowSidePhysicsComponent(false);
    setShowSideMathsComponent(false);
    setShowSideEnglishComponent(false);
    setShowSideBiologyComponent(false);
  }

  const [showEnglishComponent, setShowEnglishComponent] = useState(false);
  const [showSideEnglishComponent, setShowSideEnglishComponent] = useState(false);
  function handleEnglishClick() {
    setShowEnglishComponent(true);
    setShowChemistryComponent(false);
    setShowMathsComponent(false);
    setShowPhysicsComponent(false);
    setShowBiologyComponent(false);

    setShowSideEnglishComponent(true);
    setShowSideChemistryComponent(false);
    setShowSideMathsComponent(false);
    setShowSidePhysicsComponent(false);
    setShowSideBiologyComponent(false);
  }

  const [showBiologyComponent, setShowBiologyComponent] = useState(false);
  const [showSideBiologyComponent, setShowSideBiologyComponent] = useState(false);
  function handleBiologyClick() {
    setShowBiologyComponent(true);
    setShowChemistryComponent(false);
    setShowMathsComponent(false);
    setShowEnglishComponent(false);
    setShowPhysicsComponent(false);

    setShowSideBiologyComponent(true);
    setShowSideChemistryComponent(false);
    setShowSideMathsComponent(false);
    setShowSideEnglishComponent(false);
    setShowSidePhysicsComponent(false);
  }
  return (
   
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light " >
  

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto addstyle">
      <li className="nav-item active">
        <a className="nav-link" href="#" style={{color:"#34495E"}} onClick={handlePhysicsClick}>Physics</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" style={{color:"#34495E"}} onClick={handleMathsClick}>Maths</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#" style={{color:"#34495E"}} onClick={handleChemistryClick}>Chemistry</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#" style={{color:"#34495E"}} onClick={handleEnglishClick}>English</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#" style={{color:"#34495E"}} onClick={handleBiologyClick}>Biology</a>
      </li>
    </ul>
  </div>
</nav>

<div style={{display:"flex"}}>
<div className="sidecomp">
{showSidePhysicsComponent && <SidePhysicsComponent />}
{showSideChemistryComponent && <SideChemistryComponent />}
{showSideEnglishComponent && <SideEnglishComponent />}
{showSideMathsComponent && <SideMathsComponent />}
{showSideBiologyComponent && <SideBiologyComponent />}
</div>


<div className="comp">
{showPhysicsComponent && <PhysicsComponent />}
{showChemistryComponent && <ChemistryComponent />}
{showEnglishComponent && <EnglishComponent />}
{showMathsComponent && <MathsComponent />}
{showBiologyComponent && <BiologyComponent />}
</div>
</div>
    </>
  );
}

export default Navbar;
