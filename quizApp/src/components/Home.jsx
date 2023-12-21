import React from 'react'
// import Bg from "./../assets/Bg.jpg"

function Home({quizPage}){
  return (
    <div className='homeBg'>
        <h1>Quiz Saga</h1>
        <button onClick={quizPage}>Start Now</button>
    </div>
  )
}

export default Home
