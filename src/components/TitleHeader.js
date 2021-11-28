import React from 'react'
import Toggle from './Toggle';
import logo from './lectureleverager_banner.png';

function TitleHeader() {
    return (
        <div className="title-header">
            <Toggle />
            <img src='/images/image.png' className="photo"/>
        </div>

    )
}

export default TitleHeader