import React from 'react'
import {Card, Container} from 'react-bootstrap'
import {curriculumData} from "../curriculumData"
function Curriculum() {
    return (
        <Container fluid>
            {curriculumData.map(course => (
                <div className="curriculum-individual-div">
                    <Card>
                        <Card.Img variant="top" src={course.image}/>
                        <Card.Body>
                            <Card.Text>
                                {course.title}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </Container>
    )
}

export default Curriculum
