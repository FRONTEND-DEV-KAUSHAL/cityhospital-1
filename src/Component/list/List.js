import React from 'react';
import {Card, CardBody, CardText, CardTitle, CardSubtitle, Button} from 'reactstrap';

function List({data}) {
    return (
        data.map((o, i)=>{
            return(
                <div>
            <Card
            >
                <CardBody>
                    <CardTitle tag="h5">
                        {o.name}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {o.price}
                    </CardSubtitle>
                    <CardText>
                        {o.expiry}
                    </CardText>
                    <Button>
                        Button
                    </Button>
                </CardBody>
            </Card>
        </div>
            )
        })
        
        
    );
}

export default List;