import React from 'react'
import {Button, Card, Col, Container, Row} from 'react-bootstrap'
import {curriculumData} from "../curriculumData"
function Curriculum() {
    return (
        <Container className="curriculum-container" fluid>
            <h4 className="curriculum-text">Our 3,000 hour curriculum</h4>
            <Row xl={2} lg={2} md={2} sm={1} xs={1}>
                {curriculumData.map(course => (
                    <Col>
                        <div className="curriculum-individual-div">
                            <Card>
                                <Card.Img variant="top" src={course.image}/>
                                <Card.Body>
                                    <Card.Text>
                                        <h5 className="course-title-text">
                                            {course.title}
                                        </h5>
                                    </Card.Text>
                                </Card.Body>
                                <div className="curriculum-card-button">
                                    <div className="card-button">
                                        <Button variant="outline-success">Visit Playlist</Button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Curriculum
