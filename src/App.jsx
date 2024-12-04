import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import { collection, getDocs } from 'firebase/firestore'; 
import { myDB } from './main';


function App() {

  const [count, setCount] = useState(0)

  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => { 
    const fetchData = async () => { 
      try { const querySnapshot = await getDocs(collection( myDB, 'items',)); 
            const dataList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); 
            setData(dataList); 
          } 
      catch (error) { 
            setError(error.message); 
      } 
      finally { 
        setLoading(false); 
      } 
    }; 
    fetchData(); 
  }, []); 
  
  if (loading) return <p>Loading...</p>; 
  if (error) return <p>Error: {error}</p>; 
  
  

  return (
    <>    
      <h1>Mensaje: {import.meta.env.VITE_MENSAJE}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>        
      </div>
      <div> 
        <h2>Firestore Data</h2> 
        <ul> 
          {data.map(item => ( <li key={item.id}>{JSON.stringify(item)}</li> ))} 
        </ul> 
      </div>      
    </>
  )
  
  
  
  

}

export default App
