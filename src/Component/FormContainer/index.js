import { Container, Row, Col } from "react-bootstrap";

function FormContainer({children}) {
    return ( 
        <Container className="bg-secondary">
            <Row className="justify-content-md-center">
                <Col sx={12} md={9} >
                    {children}
                </Col>
            </Row>
        </Container>
     );
}

export default FormContainer;