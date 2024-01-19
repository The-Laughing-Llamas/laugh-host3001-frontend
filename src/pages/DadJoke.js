import React from 'react'
import { Card, CardTitle, Button, Col, CardText } from "reactstrap"
import { useState } from 'react'


const DadJoke = () => {
    const [joke, setJoke] = useState(null)
    const apiKey = process.env.REACT_APP_SECRET_KEY

    const requestJoke = async () => {
        const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            const setup = result.body[0].setup
            console.log(result.body[0].setup);
            setJoke(result.body)
            console.log(joke.body)
        } catch (error) {
            console.error(error);
        }
    }
   
    return (
        <div className="DadJoke" data-testid="DadJokeTI">
            <Col sm="6">
                <Card body>
                    <CardTitle tag="h5">
                        Dad Joke Generator
                    </CardTitle>

                    <CardText></CardText>

                    <Button onClick={requestJoke}>
                        New Joke
                    </Button>
                </Card>
            </Col>
        </div>

    )
}

export default DadJoke