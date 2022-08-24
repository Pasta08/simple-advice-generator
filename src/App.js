import { useEffect, useState } from 'react';
import './style/App.css';

function App() {
  const [ advice, setAdvice ] = useState()
  const [ loading, setLoading ] = useState(true)
  
  const getAdvice = async() =>{
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data)
    setAdvice(data)
    setLoading(false)
  }
  useEffect(()=>{
    getAdvice()
  }, [])

  if( loading === false ){
    return (
    <div className="App">
        <div className='container'>
            <span>{`ADVICE #${advice.slip.id}`}</span> 
            <p>{`"${advice.slip.advice}"`}</p>
            <img src='./images/pattern-divider-desktop.svg'/>
            <button onClick={getAdvice}>
              <img src='./images/icon-dice.svg'/>
            </button>
        </div>
    </div>
  );
  }
  
}

export default App;
