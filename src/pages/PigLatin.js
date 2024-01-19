import React, { useState } from "react"
import PigvsLlamma from "../assets/pigvsllama.jpeg"
import { Input, Col } from "reactstrap"

const PigLatin = () => {
  const [userInput, setUserInput] = useState(
    "apple through queen squeal fry fluent"
  )
  const [inputTranslated, setInputTranslated] = useState("")

  
  const myPigLatinCodeHere = () => {
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    const translatedWordsArray = arrayOfUserInput.map((eachWord) => {
      console.log("eachWord:", eachWord)

      const vowelsArray = eachWord.split("").filter((vowel) => {
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u" ||
          vowel === "A" ||
          vowel === "E" ||
          vowel === "I" ||
          vowel === "O" ||
          vowel === "U"
        )
      })
      console.log("vowelsArray:", vowelsArray)
      

        if (eachWord[0] === vowelsArray[0]) {
          eachWord = eachWord.concat("way")
        } else if (eachWord.indexOf("qu") !== -1 && eachWord.indexOf("qu") < eachWord.indexOf(vowelsArray[0])) {
          eachWord = eachWord.slice(eachWord.indexOf("qu")+2).concat(eachWord.slice(0, eachWord.indexOf("qu")+2)).concat("ay")
        } else if (eachWord.indexOf("y") !== -1 && eachWord.indexOf(vowelsArray[0]) === -1) {
          eachWord = eachWord.slice(eachWord.indexOf("y")).concat(eachWord.slice(0, eachWord.indexOf("y"))).concat("ay")
        } else (
          eachWord = eachWord.slice(eachWord.indexOf(vowelsArray[0])).concat(eachWord.slice(0, eachWord.indexOf(vowelsArray[0]))).concat("ay")
        )
       
      return eachWord
    })

    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    setInputTranslated(translatedWords)
  }

  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <>
      <div className="pig-latin-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={PigvsLlamma}
          alt="PigLatin image: Pig vs Llama"
          className="pigLatinImage"
        />
        <br />
        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <div className="text-box">
          <Col sm={10} >
            <Input
                type="textarea"
                className="user-input"
                onChange={handleChange}
                value={userInput}
                data-testid="PigLatinInput"

            />
            </Col>
            </div>
          <h3>{inputTranslated}</h3>
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
      </div>
    </>
  )
}

export default PigLatin