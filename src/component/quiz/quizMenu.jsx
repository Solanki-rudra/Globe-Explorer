import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { generateQuestions } from '../../features/country/quizSlice';

const QuizMenu = ({setIsShowQues}) => {
  const disptch = useDispatch()
  const [numOfQue, setNumOfQue] = useState(20);
  const totalQuestions = useSelector(state => state.quiz.totalQuestions)
  function handleChangeRange(value) {
    setNumOfQue(Number(value))
  }
  function handleStart() {
    disptch(generateQuestions(numOfQue))
    setIsShowQues(true)
  }
  return (
    <div className='w-fit mx-auto bg-gray-600 text-gray-400 rounded-lg p-10 m-4 grid place-items-center'>
      <div className='flex flex-col w-full'>
        <div className='flex flex-col gap-2'>
          <label htmlFor="queRange">Number of questions : {numOfQue}</label>
          <div className='flex items-center gap-3'>
            <button className='bg-slate-700 px-2 rounded' onClick={()=>setNumOfQue(pv=>pv>1 ? pv-1:pv)}>-</button>
            <input type="range" min={1} max={totalQuestions} name="queRange" id="queRange" value={numOfQue} onChange={(e) => handleChangeRange(e.target.value)} />
            <button className='bg-slate-700 px-2 rounded' onClick={()=>setNumOfQue(pv=>pv<100 ? pv+1:pv)}>+</button>
          </div>
        </div>
        <button onClick={handleStart} className='bg-blue-800 w-fit px-5 rounded py-2 my-2'>Start</button>
      </div>
    </div>
  )
}

export default QuizMenu
