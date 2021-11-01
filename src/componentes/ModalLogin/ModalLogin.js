import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const ModalLogin = (props) => {

const [state,setstate] = useState({email:"",senha:""})

const login = async ()=>{
  const payload = {
    email:state.email,
    senha:state.senha

  }
   axios.post("http://localhost:8080/api/usuarios/login",payload)
   .then((response)=>{
    console.log(response.data);

    const user = JSON.stringify(response.data)
    localStorage.setItem("user",user)
    window.location.reload()


   }).catch((erro)=>{
      alert("Login ou Senha Erradas");
   })

}

  return (
    <Modal
      onHide={props.handleModalLogin}
      show={props.modalLogin}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Faça Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={(e)=>{setstate({...state,email:e.target.value})}} value={state.email} type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={(e)=>{setstate({...state,senha:e.target.value})}} value={state.senha}  type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Modal.Footer>
            <Button onClick={()=>login()}  variant="primary">Entrar</Button>
            <Button onClick={props.handleModalConta} variant="secondary">Sair</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalLogin;
