import React from 'react'
import toast from 'react-hot-toast'

const ChoiceCard = ({ choices, correctChoice, onGuess }) => {
  
  const handleGuess = (choice) => {
    const isCorrect = onGuess(choice)
    
    if (isCorrect) {
      toast.success('Correct!')
    } else {
      toast.error('Incorrect')
    }
  }

  return (
    < >
    <div className='text-slate-950	'>
    <h1 className='text-white text-5xl text-center font-medium mb-5'>who is this?</h1>
      <img src={correctChoice.images.jpg.image_url} alt={correctChoice.name} className="m-auto border-4 max-w-xs max-h-96 object-contain border-white rounded-lg"/>
      <div className='grid grid-cols-2 grid-rows-2 gap-2 max-w-3xl mx-auto mt-8 '>
      {choices.map((choice) => (
        
        <div className="card bg-base-100 w-96 shadow-sm mx-auto " key={choice.mal_id}>
          <button 
            onClick={() => handleGuess(choice)} 
            className="card-body justify-center border-4 rounded-lg border-black-500/50 bg-blue-300 hover:bg-blue-500">
            <h2 className="card-title justify-center">{choice.name}</h2>
          </button>
        </div>
        
      ))}
      </div>
      </div>
    </>
  )
}

export default ChoiceCard
