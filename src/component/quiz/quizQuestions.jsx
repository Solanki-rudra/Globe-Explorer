import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleChangeRadio } from '../../features/country/quizSlice'

const QuizQuestions = ({ setIsSubmit, setIsShowQues }) => {
  const globalQuestions = useSelector(state => state.quiz.globalQuiz)
  const dispatch = useDispatch()
  const [submitError, setSubmitError] = useState('');
  function handleSubmitQuestions() {
    let isAllSelected = globalQuestions.every(q => q.selectOpt !== undefined)
    if (isAllSelected) {
      setIsSubmit('')
      setIsSubmit(true)
    } else {
      setSubmitError('* All questions are required.')
    }
  }
  function handleReset() {
    setIsShowQues(false)
    setIsSubmit(false)
  }
  function handleRadioChange(id, opt) {
    dispatch(handleChangeRadio({ queId: id, selectOpt: opt }))
  }
  return (
    <div className='flex flex-col items-center py-5'>
      <div className='flex flex-wrap text-gray-400 justify-center'>
        {globalQuestions.map((que, index) => (
          <div className='p-4 border-2 border-gray-800 m-1 bg-gray-600 rounded-lg flex-1 min-w-72 md:min-w-96' key={que.id}>
            {index + 1}. {que.question}
            <div className='flex flex-col gap-1 pt-1'>
              {
                que.options.map((opt, optInd) => (
                  <label htmlFor={que.id + opt} onChange={() => handleRadioChange(que.id, opt)} className={`px-2 py-1 w-full cursor-pointer ${que.selectOpt === opt ? 'bg-blue-600' : 'bg-gray-700'} rounded hover:bg-blue-600 transition-all`} key={optInd}>
                    <input type="radio" name={que.id} id={que.id + opt} hidden />
                    {opt}
                  </label>
                ))
              }
            </div>
          </div>
        ))}
      </div>
      {submitError && <p className='text-red-700'>{submitError}</p>}
      <div className='flex gap-3'>
        <button onClick={handleReset} className='bg-blue-800 mx-auto w-fit text-white px-5 rounded py-2 my-2'>Restart</button>
        <button className='bg-blue-800 mx-auto w-fit text-white px-5 rounded py-2 my-2' onClick={handleSubmitQuestions}>Submit</button>
      </div>
    </div>
  )
}

export default QuizQuestions
