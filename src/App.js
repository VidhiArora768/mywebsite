import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar'


// $env:NODE_OPTIONS = "--openssl-legacy-provider"
// url = f"https://en.wikipedia.org/wiki/{topic}"
/* useEffect(() => {
    const fetchdata = async () => {
      let url = `https://api.weatherapi.com/v1/current.json?key=7cd13524b1e548e9a50165506232803&q=${country}&aqi=no`;
      props.setProgress(50)
      setLoading(true)
      
  try {
    let data = await fetch(url);
    let parsedData = await data.json();

    let tempC = parsedData.current.temp_c ;
    setTemp(tempC);
    let lastUpdated=parsedData.current.last_updated;
    setLast(lastUpdated)
    let imageurl=parsedData.current.condition.icon;
    setImageurl(imageurl)
    let text=parsedData.current.condition.text;
    setText(text)
    setTimeout(()=>{
      setLoading(false)
    },500)
    props.setProgress(100)
    
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
   
    };

    fetchdata();
  }, [country]); */




function App() {
  return (
   <>
    <HomePage/>
    <Navbar></Navbar>
    </>
  );
}

export default App;

