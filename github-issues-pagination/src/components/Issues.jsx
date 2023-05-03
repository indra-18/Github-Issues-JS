import React, { useEffect, useState } from 'react'
import { getIssues } from '../services/http-common'
const Issues = () => {
    const [number, setNumber] = useState(1)
    const [issueList, setIssueList] = useState([])
    useEffect(() => {
        const getOutput = async() => {
            try {
                const output = await getIssues(number)
                setIssueList(output.data)
            } catch (error) {
                console.log(error.message)
            }
        };
        getOutput(number)
    }, [number]);

  return (
    <div>
        <h1 className="text-violet-600 font-bold text-center text-2xl">Github Issues JS</h1>
        <div className='flex m-10 justify-center'>
            <button 
            id="load_prev" 
            className='font-bold px-3 text-center max-py-0.5 bg-black text-white box-border rounded-2xl'
            onClick={() => setNumber(prev =>(prev > 1) ? prev - 1 : prev)}
            >prev</button>
            <h3 className='p-2 font-mono font-extrabold font-2xl text-green-800 text-xl'>
                Page Number <span className=' text-red-700'>{number}</span>
            </h3>
            <button 
            className='font-bold px-3 text-center max-py-0.5 bg-black text-white box-border rounded-2xl' 
            id="load_next"
            onClick={() => setNumber(prev => prev + 1)}
            >next</button>
        </div>
        <div className='flex justify-center'>
            <ol className='ml-20'>
                {
                    issueList.map((issue) => (
                        <li key={issue.id}>{`ID: ${issue.id} || Title: ${issue.title}`}</li>
                    ))
                }
            </ol>
        </div>
    </div>
  )
}

export default Issues
