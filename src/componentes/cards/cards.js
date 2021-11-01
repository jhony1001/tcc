import React from "react";
import { Row, Col, Card} from "react-bootstrap";
import styles from "./cards.module.css";
import {KEY_CARRINHO} from '../carrinho/carrinho';
import {toast} from "react-toastify";
import {formatToCurrence} from "../../utils";


function Cards(props) {
  const { title, description, srcImg, preco } = props;

  const addCarrinho = () =>{
      const localCarrinho = localStorage.getItem(KEY_CARRINHO);
      const carrinho = JSON.parse(localCarrinho);
      carrinho.push(props);
      localStorage.setItem(KEY_CARRINHO, JSON.stringify(carrinho));
      toast("Adicionado ao Carrinho");
  }

  return (
    <div className={styles.cardPadding} onClick={() => addCarrinho()}>
      <Card>
        <Card.Body className={styles.cardBorderStyle} >
          <Card.Title style={{color: 'black'}}   > {title}</Card.Title>
          <Row>
            <Col style={{color: 'black'}} md={7}>{description}</Col>
            <Col md={5}>
              <img className={styles.cardImg} src={srcImg} alt="Img comida" />
            </Col>
          </Row>
          <Row>
            <Col md={12}>{formatToCurrence(preco)} </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
