import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import LeftBar from './LeftBar';
import RightBar from "./RightBar";
import '../public/HomePage.css'

class HomePage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row  main_page">
                    <div className=" col-lg-3" >
                        <div className="left">
                            <LeftBar />
                        </div>
                    </div>
                    <div className="col-lg-9" >
                        <div className="right">
                            <RightBar />
                        </div>
                    </div>
                </div>
            </div>
            // below code is also correct but this code has some problem of extra-padding
            // <Container fluid="true">
            //     <Row>
            //         <Col lg={3} className="left"> <LeftBar></LeftBar></Col>
            //         <Col lg={9} className="right" > <RightBar></RightBar></Col>
            //     </Row>
            // </Container>



        )
    }
}
export default HomePage