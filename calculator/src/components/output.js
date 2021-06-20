import React from 'react';
import OutputRow from './outputRow';
const Output = props => {
    return (
        <div>
            <OutputRow value={props.answer} textSize={{ fontSize: '35px' }}></OutputRow>
            <OutputRow value={props.user} textSize={{ fontSize: '35px' }}></OutputRow>
        </div>
    )
}

export default Output;