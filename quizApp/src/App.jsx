import "./App.css";
import React,{useContext,useState} from "react";
import QuestionBox from "./components/QuestionBox"
import Result from "./components/Result"
import Home from "./components/Home"
import Questions from './resources/quizQuestion';
import { AppContext } from "./components/context";

function App() {

  //use state and use context 
  const [currPage,setCurrPage]=useState("home")
  const [currQuestion,setCurrQuestion]=useState(0)
  const {isDark,setIsDark}=useContext(AppContext)
  const{isCorrect,setIsCorrect}=useContext(AppContext)

  
  //  declaring functions 
  let quiz = () => {
    setCurrPage("questions");
    setCurrQuestion(0)
    setIsCorrect(0)
  };

  let result = (i,option) => {
    if(currQuestion === 9){
      setCurrPage("result");
    }
    else{
      if(option==Questions[i].answer){
        setIsCorrect((prev)=>prev+1)
      }
      setCurrQuestion((prevIndex) => prevIndex + 1);
      
    }
  };
  
  let home=()=>{
    setCurrPage("home")
  }


  //conditional rendenring to change pages 
  return (
    <div>
      {currPage === "home" && <Home quizPage={quiz} />}
      {currPage === "questions" && (
        <QuestionBox resultPage={result} i={currQuestion} />
      )}
      {currPage === "result" && <Result homePage={home}/>}
    </div>
  );
}

export default App;
