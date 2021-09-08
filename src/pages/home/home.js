import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Row, Col, Card } from 'react-bootstrap';
import styles from  './home.module.css';




class Home extends React.Component{
    render(){
      return(
        <div>
     <Row className="header pt-4">
        <Col md={4}>
          <Card className="header-card mx-4 p-2">
            Faça Login
          </Card>
       
        </Col>
      </Row>


    <Navbar expand="lg" variant="light" bg="light">
  <Container>
    <Navbar.Brand href="#">Hambúrgueres</Navbar.Brand>
  </Container>
  <Container>
    <Navbar.Brand href="#">Porções de Batata</Navbar.Brand>
  </Container>
  <Container>
    <Navbar.Brand href="#">Combos</Navbar.Brand>
  </Container>
  <Container>
    <Navbar.Brand href="#">Bebidas</Navbar.Brand>
  </Container>
  <Container>
    <Navbar.Brand href="#">Sucos</Navbar.Brand>
  </Container>
  <Container>
    <Navbar.Brand href="#">Molhos</Navbar.Brand>
  </Container>
</Navbar>

<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="https://www.sopacultural.com/wp-content/uploads/2021/05/Dia-Mundial-do-Hamburguer-sera-comemorado-em-Niteroi.jpeg" />
  <Card.Body>
    <Card.Title>Rock Burguer 1</Card.Title>
    <Card.Text>
      Pão, Carne, Salada
    </Card.Text>
    
    
  </Card.Body>
</Card>
<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="https://www.sopacultural.com/wp-content/uploads/2021/05/Dia-Mundial-do-Hamburguer-sera-comemorado-em-Niteroi.jpeg" />
  <Card.Body>
    <Card.Title>Rock Burguer 1</Card.Title>
    <Card.Text>
      Pão, Carne, Salada
    </Card.Text>
    
    
  </Card.Body>
</Card>
<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="https://www.sopacultural.com/wp-content/uploads/2021/05/Dia-Mundial-do-Hamburguer-sera-comemorado-em-Niteroi.jpeg" />
  <Card.Body>
    <Card.Title>Rock Burguer 1</Card.Title>
    <Card.Text>
      Pão, Carne, Salada
    </Card.Text>
    
    
  </Card.Body>
</Card>



<Row className="footer justify-content-md-center text-center pb-4">
        <Col md={2}>
          <Card className={styles.footerCard}>
            Sobre
          </Card>
        </Col>
        <Col md={2}>
          <Card className={styles.footerCard}>
            Meu Perfil
          </Card>
        </Col>
      </Row>

        </div>

      );
    }
  }

  export default Home;