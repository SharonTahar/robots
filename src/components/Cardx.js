import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

const Cardx = ({robot}) => {
    const {id,name,username,email} = robot;
    return(
        // <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
        //     <img src={`https://robohash.org/${id}?size=200x200`} />
        //     <h2> {name} </h2>
        //     <h4> {username} </h4>
        //     <p> {email} </p>
        // </div>
    <Col xs={12} md={3}>
        <Card style={{ width: '18rem', 'textalign': 'center' }}>
            <Card.Img variant="top" src={`https://robohash.org/${id}?size=200x200`}  />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h4> {username} </h4>
                    <h4>{email}</h4>
                    <Card.Text>
                    </Card.Text>
            </Card.Body>
        </Card>
        </Col>
    )
}
export default Cardx;