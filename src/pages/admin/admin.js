import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Accordion, Form, Table, Row, Col } from "react-bootstrap";
import "./admin.css";

class Admin extends React.Component {
  render() {
    return (
      <div>
        <h1
          style={{
            color: "grey",
            backgroundColor: "black",
            textAlign: "center",
          }}
        >
          Rock Burguer Administração
        </h1>
        <Navbar exnpand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="/">Rock Burguer Pedidos </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </Container>
        </Navbar>

        <Container>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="admin-card-hearder">
                  <div>Pedido: #1</div>
                  <div>Status: Recebido</div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                  <h2>Joni bezera</h2>
                <div>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextEmail"
                  >
                    <Form.Label column sm="12">
                      Atualizar status
                    </Form.Label>
                    <Col sm="12">
                      <Form.Select>
                        <option>Recebido</option>
                        <option>Preparando</option>
                        <option>Saiu para entrega</option>
                        <option>Finalizado</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                </div>
                <div>
                  <Row>
                    <Col md="4">
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Produto</th>
                            <th>Valor</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                          </tr>
                          <tr>
                            <td colSpan="2">Total</td>
                            <td>
                                R$ 500
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                    <Col md="5">
                        <h3>Endereço</h3>
                        <strong>Rua</strong>: xxxx
                        <br/>
                        <strong>Número</strong>: xxxx
                        <br/>
                        <strong>Bairro</strong>: xxxx
                        <br/>
                        <strong>Complemento</strong>: xxxx
                        <br/>
                        <strong>Cep</strong>: xxxx
                        <br/>
                    </Col>
                    <Col md="3">
                        <h3>Forma de Pagamento </h3>
                        <strong>Pagamento</strong>: Cartão
                    </Col>
                  </Row>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Pedido: #2 </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
    );
  }
}

export default Admin;
