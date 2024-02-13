
import React, {Component} from 'react';
import PDF from '../assets/mm-dev.pdf';

class Download extends Component {

    render(){

        return (
            <div className="resume">
                <a href = {PDF} target = '_blank'>Download PDF</a>
            </div>
        );
    }
}



export default ResumeLink;