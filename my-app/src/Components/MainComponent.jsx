import React from 'react'
import AboutUs from './AboutUs'
import Education from './Education'
import Footer from './Footer'
import Skills from './Skills'
import Experience from './Experience'
import { Row, Col } from 'react-grid-system';


function MainComponent() {
    return (
        <div id="main-div">
            <AboutUs />
            <Education />
            <Row style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Col style={{width: '50%'}}>
                    <Skills />
                </Col>
                <Col style={{width: '50%'}}>
                    <Experience />
                </Col>
            </Row>
            <Footer />
        </div>
    )
}

export default MainComponent