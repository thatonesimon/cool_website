import '../App.css';
import React from 'react';

import { performanceExperience, teachingExperience } from "./data/experienceData";
import { ListGroup, ListGroupItem } from "react-bootstrap";


export default class Experience extends React.Component {

    getExperienceListGroupsYear(experiences: string[]) {
        return experiences.map(experience => {
            return (
                <ListGroupItem variant="dark">
                    {experience}
                </ListGroupItem>
            )
        })
    }

    getExperienceListGroups(experiences: {[year: string]: string[]}) {
        const experienceList: React.ReactElement[] = [];

        const years: string[] = Object.keys(experiences)
            .sort((a, b) => parseInt(b) - parseInt(a));

        if (years.length <= 0) {
            return (
                <p>We're working on this :)</p>
            )
        }

        for (let year of years) {
            experienceList.push(
                <div className="experience">
                    <h2>
                        {year}
                    </h2>
                    <ListGroup>
                        {this.getExperienceListGroupsYear(experiences[year])}
                    </ListGroup>
                </div>
            )
        }

        return experienceList;
    }

    render() {
        return (
            <div className='base-page'>
                <h1>
                    Performance Experience
                </h1>
                {this.getExperienceListGroups(performanceExperience)}
                <h1>
                    Teaching Experience
                </h1>
                {this.getExperienceListGroups(teachingExperience)}
            </div>

        );
    }

}
