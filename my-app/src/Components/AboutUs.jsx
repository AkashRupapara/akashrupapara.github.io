import React from 'react'
import '../CSS/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope'
import { Row, Col } from 'react-grid-system';

const AboutUs = () => {
    return (
        <div id="outer-about">
            <center>
                <div className="About-Content">
                    HI! I am <b>Akash Rupapara</b>.<br></br>
                    I'm a Full-Stack Software Engineer from India, currently working at
                    <a href="https://www.fortinet.com/">Fortinet Inc.</a>, where I build scalable systems and security-focused products.
                    <br/><br/>
                    My interests include MEAN and MERN stack development, end-to-end product engineering, and exploring Machine Learning and Data Science applications to solve real-world problems.
                    <br/><br/>
                    Outside of work, I enjoy hiking, traveling, and discovering new and delicious cuisines.
                </div>
                <Row id="social-media-icon">
                    <Col>
                        <a href="https://github.com/AkashRupapara">
                            <FontAwesomeIcon icon={faGithub} size="3x"/>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://www.linkedin.com/in/akashrupapara/">
                            <FontAwesomeIcon icon={faLinkedinIn} size="3x" /> 
                        </a>
                    </Col>
                    <Col>
                        <a href="mailto:akash.rupapara@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} size="3x" /> 
                        </a>
                    </Col>
                </Row>
            </center>
        </div>
    )
}

export default AboutUs