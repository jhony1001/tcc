import { Modal } from "react-bootstrap";
import React, { useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {formatToCurrence} from "../../utils";
import axios from "axios";
import {toast} from "react-toastify";

const ModalCarrinho = (props) => {
  const [state, setState] = React.useState({
    cep: "",
    endereco: "",
    bairro: "",
    numero: "",
    complemento: "",
    valorTotal: 0,
    itens:[]
  });

  const [formPayment, setFormPayment] = React.useState("cartão")

  useEffect(() => {
    const usuario = localStorage.getItem("user");

    if(usuario !== null){
      const usuarioObject = JSON.parse(usuario);

    const carrinho = localStorage.getItem("carrinho");
    const carrinhoObject = JSON.parse(carrinho);
    
    console.log(carrinhoObject)
    let valortotal = 0;

    for(let i = 0; i < carrinhoObject.length; i++ ){
      valortotal += parseFloat(carrinhoObject[i].preco);
    }

    setState({
      userId: usuarioObject.id,
      cep: usuarioObject.cep,
      endereco: usuarioObject.rua,
      bairro: usuarioObject.bairro,
      numero: usuarioObject.numero,
      complemento: usuarioObject.complemento,
      valorTotal: valortotal,
      itens:carrinhoObject
    });
    }
    
  }, [props.modalCarrinho]);

  const finalizarPedido = () =>{

    const productsId = state.itens.map((i)=> {
      return  {
        produto_id: i.id.toString()
      }
    });

   const payload = {
      tipo_pagamento: formPayment,
      usuarios_id: state.userId.toString(),
      produtos_id: productsId
    }

    axios.post("http://localhost:8080/api/pedidos/create",payload)
    .then(response =>{
      console.log(response.data);

      localStorage.setItem("carrinho", "[]");

      toast.success("Pedido realizado com sucesso! Em Breve seu pedido estará a caminho!");
      props.handleModalCarrinho();
      
    }).catch(err =>{
      console.log(err);
      toast.error("Falha ao realizar pedido!");
    })

    console.log(payload);
  }

  return (
    <Modal
      onHide={props.handleModalCarrinho}
      show={props.modalCarrinho}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Pedido</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h4>Tempo de entrega 45~60 Min</h4>
        <h5>Endereço de Entrega:</h5>

        <Row>
          <Col>
            Cep: {state.cep}
            <br></br>
            Rua: {state.endereco}
            <br></br>
            Bairro: {state.bairro}
            <br></br>
            n°: {state.numero}
            <br></br>
            Complemento: {state.complemento}
            <br></br>
            <br></br>
            <br></br>
            Valor Total: {formatToCurrence(state.valorTotal)}
            <br></br>
          </Col>
          <Col>
            <b>Formas de Pagamentos:</b>
            <br></br>
            <Form.Check label="Na Maquinha(cartão)" type="radio" name="formaPagamento" checked="checked" onClick={()=> setFormPayment("cartão")}/>
            <Form.Check label="No Dinheiro" type="radio" name="formaPagamento" onClick={()=> setFormPayment("dinheiro")}/>
            
          </Col>
        </Row>
      </Modal.Body>
      <Button variant="success" onClick={()=> finalizarPedido()}>
        {" "}
        <FontAwesomeIcon icon={faCheck} /> Finalizar Compra
      </Button>
    </Modal>
  );
};

export default ModalCarrinho;
