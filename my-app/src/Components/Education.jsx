import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import '../CSS/styles.css';
import {Row, Col } from 'react-grid-system';
import SectionTitle from './SectionTitle';

// import styled from "@emotion/styled/macro";

// import Popup from 'reactjs-popup'
const Education = () => {
    
    
    return (
        <div id="education-main-div">
            <SectionTitle title='Education'/>
            <Row>
                <Col>
                    <div id="school-card-1">
                        <div id="display-over-school">
                        <h2>Grad: </h2>
                            <h2><b>San Jose State University</b></h2>
                            <div id="hover-school-card">
                                <div id="subtitle">
                                    MS Software Engineering
                                </div>
                                <div id="paragraph">
                                 Related Coursework:
                                 Enterprise Distributed Systems, Data Mining, Enterprise Software Platforms                                
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div id="school-card-2">
                        <div id="display-over-school">
                            <h2>Under-Grad: </h2>
                            <h2><b>Ahmedabad University</b></h2>
                            <div id="hover-school-card">
                                <div id="subtitle">
                                    Btech in Information and Communication Technology
                                </div>
                                <div id="paragraph">
                                    Related Coursework:
                                    Advanced Data Structures and Algorithms, Software Engineering, Big Data Analytics, Machine Learning
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default Education