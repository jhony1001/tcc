import { Modal } from "react-bootstrap";
import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const ModalConta = (props) => {
  const [state, setState] = React.useState({
    nome: "",
    senha: "",
    email: "",
    telefone: "",
    cep: "",
    endereco: "",
    bairro: "",
    numero: "",
    complemento: "",
  });

  const handleStateModalConta = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };

  const consultaCep = () => {
   
    if (state.cep.length === 8) {
      const url = `https://viacep.com.br/ws/${state.cep}/json/`;
      axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          setState({
            ...state,
            endereco: response.data.logradouro,
            bairro: response.data.bairro,
            complemento: response.data.complemento,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Modal
      onHide={() => props.handleModalConta()}
      show={props.modalConta}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Cadastrar Usuário
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              value={state.nome}
              onChange={(event) => handleStateModalConta(event)}
              name="nome"
              type="text"
              placeholder="Nome"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              value={state.senha}
              onChange={(event) => handleStateModalConta(event)}
              name="senha"
              type="password"
              placeholder="Senha"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={state.email}
              onChange={(event) => handleStateModalConta(event)}
              name="email"
              type="email"
              placeholder="Email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              value={state.telefone}
              onChange={(event) => handleStateModalConta(event)}
              name="telefone"
              type="tel"
              placeholder="Telefone"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>CEP</Form.Label>
            <Form.Control
              value={state.cep}
              onBlur={() => consultaCep()}
              onChange={(event) => handleStateModalConta(event)}
              name="cep"
              type="text"
              placeholder="Cep"
            />

            <Form.Label>Endereço</Form.Label>
            <Form.Control
              value={state.endereco}
              onChange={(event) => handleStateModalConta(event)}
              name="endereco"
              type="text"
              placeholder="Endereço"
            />

            <Form.Label>Bairro</Form.Label>
            <Form.Control
              value={state.bairro}
              onChange={(event) => handleStateModalConta(event)}
              name="bairro"
              type="text"
              placeholder="Bairro"
            />

            <Form.Label>Número</Form.Label>
            <Form.Control
              value={state.numero}
              onChange={(event) => handleStateModalConta(event)}
              name="numero"
              type="number"
              placeholder="Número"
            />

            <Form.Label>Complemento</Form.Label>
            <Form.Control
              value={state.complemento}
              onChange={(event) => handleStateModalConta(event)}
              name="complemento"
              type="text"
              placeholder="Complemento"
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Modal.Footer>
            <Button variant="primary">Criar Conta</Button>
            <Button onClick={() => props.handleModalLogin()} variant="secondary">
              Sair
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalConta;
