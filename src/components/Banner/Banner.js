import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import pP2 from "../../assets/img/portfolioPNG.png";
import {ArrowRightCircle} from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["React Developer", "NodeJs Developer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker)
        };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`Hi! I am Roman`} <span className="txt-rotate"
                                                                 data-rotate='[ "React Developer", "NodeJs Developer"]'><span
                                        className="wrap">{text}</span></span></h1>
                                    <p>
                                        My name is Yakobchuk Roman Valeriyovych and I am 19 years old.
                                    </p>
                                    <hr/>
                                    <p>
                                        I am studying at
                                        the National Technical University of Ukraine "Ihor Sikorsky Kyiv Polytechnic
                                        Institute" at the Faculty of Applied Mathematics, in the KP-02 group
                                    </p>
                                    <hr/>
                                    <p>
                                        From the course I expect to develop my skills in Frontend and Backend
                                        development
                                    </p>
                                    <hr/>
                                    <p>My biggest experience in web development is an online social network with the
                                        ability to add followers, correspond and create posts, but it still lacks a
                                        lot.</p>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={pP2} alt="Header Img"/>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}