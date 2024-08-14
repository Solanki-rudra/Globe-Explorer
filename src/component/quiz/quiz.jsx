import React, { useState } from 'react'
import QuizResult from './quizResult'
import QuizQuestions from './quizQuestions'
import QuizMenu from './quizMenu';

const Quiz = () => {
  const [isShowQues, setIsShowQues] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  return (
    <div className='pt-16 bg-slate-700 min-h-screen'>
      {!isShowQues ? <QuizMenu setIsShowQues={setIsShowQues}/> : isSubmit ? <QuizResult setIsSubmit={setIsSubmit} setIsShowQues={setIsShowQues}/> : <QuizQuestions setIsShowQues={setIsShowQues} setIsSubmit={setIsSubmit}/>}
    </div>
  )
}

export default Quiz
