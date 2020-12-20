import React from 'react'

const Text = ({setWord, setWordTwo, setWordThree}) =>{
    
    
    const inputText = (e) =>{
        console.log(e.target.value);
        setWord(e.target.value)
        
    }
    
    const inputTextTwo = (e) =>{
        console.log(e.target.value);
        setWordTwo(e.target.value)
        
    }
    
    const inputTextThree = (e) =>{
        console.log(e.target.value);
        setWordThree(e.target.value)
        
    }
    

    return(
        <div>
            <form>
                <input onChange={inputText}></input>
                <input onChange={inputTextTwo}></input>
                <input onChange={inputTextThree}></input>
                
            </form>
        </div>
    )
}


export default Text