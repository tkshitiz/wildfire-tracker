import Map from './components/Map'
import './App.css';
import Loader from './components/Loader'
import {useState, useEffect} from 'react';
function App() {

  const [eventData, setEventData]=useState([])
  const [loading, setLoading]=useState(false)

  useEffect(()=>{
    const fetchEvents = async()=>{
      setLoading(true)
      const res=await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
      // console.log(res)
      const {events}=await res.json()
      setEventData(events)
      setLoading(false)
    }
    fetchEvents()
  },[])

  return (
    <div className="App">
     {!loading ?<Map eventData={eventData}/>:<Loader />}
    </div>
  );
}

export default App;
