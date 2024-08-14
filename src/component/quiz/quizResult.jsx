import React from 'react'
import { useSelector } from 'react-redux'

const QuizResult = ({setIsShowQues,setIsSubmit}) => {
    const globalQuestions = useSelector(state => state.quiz.globalQuiz)
    function handleReset() {
        setIsShowQues(false)
        setIsSubmit(false)
    }
    return (
        <div className='pb-5 flex flex-col '>
            <div className='p-2 my-4 rounded-lg border-blue-900 border-2 text-center bg-slate-600 sm:w-[50vw] mx-4 sm:mx-auto'>
                <h1 className='text-2xl mb-3'>Result</h1>
                <div className='text-lg bg-green-600/30 p-3 rounded'>
                    <h1>Total Attempted Questions - {globalQuestions.length}</h1>
                    <h1>Correct Answer - {globalQuestions.filter(q => q.selectOpt === q.answer).length}</h1>
                    <h1>Wrong Answer - {globalQuestions.filter(q => q.selectOpt !== q.answer).length}</h1>
                    <h1>Result - {globalQuestions.filter(q => q.selectOpt === q.answer).length} out of {globalQuestions.length} marks</h1>
                    <h1>Percentage - {(globalQuestions.filter(q => q.selectOpt === q.answer).length * 100 / globalQuestions.length).toFixed(2)} %</h1>
                </div>
            </div>
            <div className='bg-slate-600 border-blue-900 p-2 mx-4 border-2 rounded-lg max-h-[60vh] overflow-y-scroll'>
                <h1 className='text-center p-2 rounded text-2xl w-fit mx-auto'>Questions</h1>
                <div className='flex flex-wrap justify-around'>
                    {globalQuestions.map((q, i) => (
                        <div className={`p-3 flex-auto relative border-2 text-gray-400 rounded m-2 ${q.selectOpt !== q.answer ? 'bg-red-600/55 border-red-700' : 'bg-green-800/55 border-green-700'}`} key={i}>
                            <span className='absolute -top-2 font-bold -right-2 bg-blue-800/80 w-7 text-center rounded-full h-7'>{q.selectOpt !== q.answer ? '-1' : '+1'}</span>
                            <h1>{i+1}. {q.question}</h1>
                            <div className='flex justify-between'>
                                <h2 className='bg-blue-900/50 px-2 mt-1 rounded'>Answer - {q.answer}</h2>
                                {q.selectOpt !== q.answer && <h2 className='bg-green-800/55 px-2 mt-1 rounded'>Selected - {q.selectOpt}</h2>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        <button onClick={handleReset} className='bg-blue-800 mx-auto w-fit px-5 rounded py-2 my-2'>Restart</button>
        </div>

    )
}

export default QuizResult
