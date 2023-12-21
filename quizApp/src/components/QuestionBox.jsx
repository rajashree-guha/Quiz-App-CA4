import React, { useContext, useState } from 'react';
import darkMode from './../assets/Moon Symbol.png';
import lightMode from './../assets/Sun.png';
import Questions from '../resources/quizQuestion';
import { AppContext } from './context';

function QuestionBox({ resultPage, i}) {
  const [highlighted, setHighlighted] = useState(false)
  const {isDark,setIsDark}= useContext(AppContext)
  const{isCorrect,setIsCorrect}=useContext(AppContext)

  const theme=()=>{
    setIsDark(!isDark)
  }

  return (
    <div className='quiz' style={{backgroundColor:isDark?"#454444":"white"}}>
       <div>
      <div>
        <div className='flex header'>
          <h2 style={{color:isDark?"white":"black"}}>Quiz Saga</h2>
          <button style={{backgroundColor:isDark?"#454444":"white",
           border:isDark?"2px solid white":"2px solid black"}
        }>
          <img src={isDark ? lightMode : darkMode} alt="" onClick={theme} />
          </button>
        </div>
        <div className='QuizPage'>
          <div className='flex'>
            <h5>{`${i + 1} out of 10`}</h5>
            <h5><b>Score: {isCorrect}</b></h5>
          </div>
          <h3 style={{ color: highlighted ? "#EE0000" : "#000000" }}>{Questions[i].question}</h3>
          <div className='grid'>
            <button onClick={()=>{
              resultPage(i,Questions[i].optionA)
            }} >{Questions[i].optionA}</button>
            <button onClick={()=>{
              resultPage(i,Questions[i].optionB)
            }}>{Questions[i].optionB}</button>
            <button onClick={()=>{
              resultPage(i,Questions[i].optionC)
            }}>{Questions[i].optionC}</button>
            <button onClick={()=>{
              resultPage(i,Questions[i].optionD)
            }}>{Questions[i].optionD}</button>
          </div>
          <div className='flex options'>
            <button onClick={() => setHighlighted(true)}>Highlight</button>
            <button onClick={() => setHighlighted(false)}>Remove Highlight</button>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
}

export default QuestionBox;