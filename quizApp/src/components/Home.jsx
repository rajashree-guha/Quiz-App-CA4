import React from 'react'

function Home({quizPage}){
  return (
    <div className='homeBg'>
        <h1>Quiz Saga</h1>
        {/* on clicking on the button the page will change  */}
        <button onClick={quizPage}>Start Now</button>
    </div>
  )
}

export default Home
