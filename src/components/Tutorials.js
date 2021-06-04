import React from 'react'
import {Card, Button, Row, Col, Container} from 'react-bootstrap'
import {topicsData} from "../topicsData"
function Tutorials() {
    return (
        <Container className="TopicsList-container">
            <Row xl={3} lg={3} md={2} sm={1} xs={1}>
                {topicsData.map(topic => (
                    <Col key={topic.id}>
                        <Card className="individual-card">
                            <Card.Header as="h5">{topic.topic}</Card.Header>
                            <Card.Img variant="top" src={topic.image}/>
                            <Card.Body>
                                {/* <Card.Title>Special title treatment</Card.Title> */}
                                <Card.Text>
                                    {topic.info}
                                </Card.Text>
                            </Card.Body>
                            <div className="tutorial-button">
                                <div className="card-button">
                                    <Button variant="outline-success">Visit Playlist</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Tutorials
