import React from 'react';
import Navbar from "../components/Navbar/Navbar";

const About = () => {
    return (
        <div>
            <Navbar logo={true}/>
            <p className={'about'}>Данное приложение сделано в учебных целях...</p>
        </div>

    );
};

export default About;