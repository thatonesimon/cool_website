import React from 'react';

import './routes.css';
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default class Contact extends React.Component {

    render() {
        return (
            <div className='base-page'>
                <h1>Contact Me!</h1>
                <main>
                    If you'd like to contact me, you can reach me at:{` `}
                    <a href="mailto:thatonesimon@gmail.com">thatonesimon@gmail.com</a>
                    <hr/>
                    <p>Or on the following platforms:</p>
                    <ListGroup>
                        <ListGroupItem variant="dark">
                            <a href="https://www.gigsalad.com/simulated_flow_san_diego">Gig Salad</a>
                        </ListGroupItem>
                        <ListGroupItem variant="dark">
                            <a href="https://www.instagram.com/simulatedflow/">Instagram</a>
                        </ListGroupItem>
                    </ListGroup>


                </main>
            </div>
        )
    }
}
