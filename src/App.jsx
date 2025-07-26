import { useEffect, useState } from 'react'

import ChoiceCard from "./components/choiceCard"
import getTopCharacters from "./services/getTopCharacters"
import getChoices from './services/getChoices';
import { LoaderCircle } from "lucide-react";

function App() {
  const [characters, setCharacters] = useState([]) // array of all characters 
  const [currentChoices, setCurrentChoices] = useState([]) // current 4 choices
  const [correctChoice, setCorrectChoice] = useState(null) //correct choice
  const [loading, setLoading] = useState(true) 
  
  const delay = time => new Promise(res => setTimeout(res, time));

  // generates the question 
  const generateNewQuestion = () => {
    if (characters.length > 0) { // characters has to be initialized first
      const choices = getChoices(characters) // gets array of four characters
      const correct = choices[Math.floor(Math.random() * choices.length)] //picks a random character
      setCurrentChoices(choices) 
      setCorrectChoice(correct)
    }
  }

  const handleGuess = (choice) => { 
    const isCorrect = choice.mal_id === correctChoice.mal_id
    
    setTimeout(() => {
      generateNewQuestion()
    }, 600) 
    
    return isCorrect
  }

  useEffect(() => { //initiates the characters state
    const fetchData = async () => {
      const allCharacters = []
      for (let i = 1; i < 3; i++) { // 25 characters each iteration
        const result = await getTopCharacters(i)
        allCharacters.push(...result)
        await delay(800)
      }
      setCharacters(allCharacters)
      setLoading(false)
    } 

    fetchData()
  }, []) // empty dependency array, so only loads once

  // Generate first question when characters are loaded
  useEffect(() => {
    if (characters.length > 0 && !loading) {
      generateNewQuestion()
    }
  }, [characters, loading])

  if (loading) { //display this while loading
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        Loading...
        <LoaderCircle className="animate-spin size-10"/>
      </div>
    );
  }

  return (
    <>
      {!loading && currentChoices.length > 0 && correctChoice && (
        <ChoiceCard 
          choices={currentChoices}
          correctChoice={correctChoice}
          onGuess={handleGuess}
        />
      )}
    </>
  )
}

export default App
