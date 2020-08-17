import React from 'react';
import Cardx from './Cardx'
import Row from 'react-bootstrap/Row'

const CardxList = ({robots}) => {
    return(
        <Row>
            {
                robots.map( (item,i) => {
                    return <Cardx robot={item} />
                })
            }
        </Row>
    )
}
export default CardxList;