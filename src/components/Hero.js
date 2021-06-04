import React from 'react'
import {Button, Container, Jumbotron} from 'react-bootstrap'

function Hero() {
    return (
        <div fluid>
            <Jumbotron className="hero-jumbotron">
                <Container className="hero-div">
                    <h1 className="hero-title">Learn to Code for Free</h1>
                    <h4 className="hero-description">
                        Build skills with our 3,000 hour curruculum and youtube video tutorials taught by the experts of industry.
                    </h4>
                    <div className="hero-button">
                        <Button variant="success">Enroll for Free</Button>
                    </div>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Hero
