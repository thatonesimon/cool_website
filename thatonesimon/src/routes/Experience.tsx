import '../App.css';
import React from 'react';

import { performanceExperience, teachingExperience } from "./data/experience-data";


export default class Experience extends React.Component {

    getExperienceList(experiences: string[]) {
        const experienceList: React.ReactElement[] = [];

        if (experiences.length <= 0) {
            return (
                <p>We're working on this :)</p>
            )
        }

        experiences.forEach(experience => {
            experienceList.push(<li>{experience}</li>)
        });

        return (
            <ul>
                {experienceList}
            </ul>
        );

    }

    render() {
        return (
            <div className='base-page'>
                <h1>
                    Performance Experience
                </h1>
                {this.getExperienceList(performanceExperience)}
                <h1>
                    Teaching Experience
                </h1>
                {this.getExperienceList(teachingExperience)}
            </div>

        );
    }

}
