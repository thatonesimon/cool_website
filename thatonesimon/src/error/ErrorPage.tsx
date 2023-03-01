import React from 'react';
import {Link, useRouteError} from "react-router-dom";

export default function ErrorPage() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div id="error-page" style={{textAlign: "center"}}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <Link to="/">Click here to go home.</Link>
            <p>
                <i>Error: [{error.statusText || error.message}]</i>
            </p>
        </div>
    );
}