import React, {useState} from 'react'
import Text from './components/Text'




const App = () => {
  
  
  const [word, setWord] = useState("Change Me")
  const [wordTwo, setWordTwo] = useState("")
  const [wordThree, setWordThree] = useState("")
  
  const [finalvalue, setFinalValue] = useState("")
  
  let randomValue
  let optionNumbers = 3
  const getRandomValue = () =>{
    randomValue = Math.floor(Math.random() * optionNumbers)
  }

  const changeWord = () =>{
    getRandomValue()
    console.log(randomValue);
    
    if(randomValue === 0){
      setFinalValue(word)
    }
    else if(randomValue === 1){
      setFinalValue(wordTwo)
    }
    else if (randomValue === 2){
      setFinalValue(wordThree)
    }
  }

  return(
    <div>
      <Text setWord={setWord} setWordTwo={setWordTwo} setWordThree={setWordThree} />
      
      <button onClick={changeWord}>submit</button>
      <h2>{finalvalue}</h2>
      
      
    </div>
  )
}

 


export default App;
