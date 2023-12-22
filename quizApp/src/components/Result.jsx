import React, { useContext } from 'react'
import darkMode from './../assets/Moon Symbol.png'
import lightMode from './../assets/Sun.png'
import { AppContext } from './context'

function Result({homePage}){

  const {isDark,setIsDark}=useContext(AppContext)
  const{isCorrect,setIsCorrect}=useContext(AppContext)

  // setting theme
  const theme=()=>{
    setIsDark(!isDark)
  }

  // calculating  score percentage 
  const percent =()=>((isCorrect/10)*100)

  //based upon the score a text will be shown
  const getScoreText = () => {
    const percentage = percent();
    if (percentage >= 90) {
      return "Congratulations! You're a quiz master!";
    } else if (percentage >= 60) {
      return "Well done! You're on the right track.";
    } else {
      return "Keep going! There's room to improve.";
    }
  };
  

  // html code 
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
        <h3 id="msg">{getScoreText()}</h3>
        <h3>{isCorrect} out of 10 correct - ({percent()}%)</h3>
        <div className='accuracy'><div style={{width:`${percent()}%`,backgroundColor:"#C61BCB",borderRadius:"5px"}} id='accuracyMarker'></div></div>
        {/* on clicking on the button the page will change  */}
        <button onClick={homePage}>Restart</button>
      </div>
    </div>
    </div>

  )
}

export default Result
