import React, { useContext } from 'react'
import darkMode from './../assets/Moon Symbol.png'
import lightMode from './../assets/Sun.png'
import { AppContext } from './context'

function Result({homePage}){

  const {isDark,setIsDark}=useContext(AppContext)
  const{isCorrect,setIsCorrect}=useContext(AppContext)

  const theme=()=>{
    setIsDark(!isDark)
  }

  const percent =()=>((isCorrect/10)*100)
  

  percent()

  return (
    <div className='result' style={{backgroundColor:isDark?"#454444":"white"}}>
    <div>
    <div className='flex header themee'>
        <h2 style={{color:isDark?"white":"black"}}>Quiz Saga</h2>
        <button style={{backgroundColor:isDark?"#454444":"white",
           border:isDark?"2px solid white":"2px solid black"}
        }>
          <img src={isDark ? lightMode : darkMode} alt="" onClick={theme} />
          </button>
      </div>
      <div className='scorePage'>
        <h2>Final Results</h2>
        <h3>{isCorrect} out of 10 correct - ({percent()}%)</h3>
        <button onClick={homePage}>Restart</button>
      </div>
    </div>
    </div>

  )
}

export default Result
