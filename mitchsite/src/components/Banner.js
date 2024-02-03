import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Col} from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";

import headderImg from "../assets/img/headder-Img.svg";

export const Banner = () =>{

    const toRotate = ["Software Engineer", "blank" , "holder"];
    const [loopnum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(()=> {
        let ticker = setInterval(() =>{
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    },[text])

    const tick = () => {
        let i  = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1 ) : fullText.substring(0, text.length +1); 

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updatedText === ""){
            setIsDeleting(false);
            setLoopNum(loopnum +1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="banner" id="home">
                    <Col xs={12} md={6} xl={7}> 
                        <span className="tagLine">Welcome to my portfolio</span>
                        <h1>{"Hi I'm Mitchell Mercer"}<span className="wrap">software engineer</span></h1>
                        <p>New California State University Alumnus Looking to venture into the world of complex probelm solving and creation of satisfying solutions</p>
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}> 
                        <img src = {headderImg} alt ="Headder Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}