import React from 'react'
import { Card, CardTitle, Button, Col, CardText } from "reactstrap"
import { useState, useEffect } from 'react'


const DadJoke = () => {
  const [joke, setJoke] = useState([])

  const FetchJokes = async() => {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();
    setJoke(data);
  }

  useEffect(() => {
    FetchJokes();
  }, []);

  return (
    <div className="jokes">
        <Card className="jokeCard"
          style={{
            width: "450px",
            backgroundColor: "#D9D9D9",
          }}><h1>Chuck Norris Jokes</h1>
          <img src="https://m.media-amazon.com/images/I/61eS0QtpX3L._AC_UF894,1000_QL80_.jpg" alt="Chuck Norris Meets Coffee" width="350"/>
          <br />
          <p>{joke.value}</p>
          <button onClick={FetchJokes}> Make Me Laugh </button>
        </Card>
    </div>
  );
   
}

export default DadJoke