import React from 'react'
import { Heading } from '@chakra-ui/react';
import Toggle from './Toggle';
import logo from './lectureleverager_banner.png';

function TitleHeader() {
    return (
        <div className="title-header">
            <Toggle />
            {/* <img src={require('/images/image.png')} /> */}
            {/* <img src="./image.png"/> */}
            {/* <img src={logo} alt="Logo" /> */}
            <img src='/images/image.png' className="photo"/>
        </div>

    )
}

export default TitleHeader