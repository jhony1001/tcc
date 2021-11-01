import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faTimes,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Dropdown, Button } from "react-bootstrap";
import React from "react";
import {formatToCurrence} from "../../utils";
export const KEY_CARRINHO = "carrinho";


const Carrinho = (props) => {
  let localCarrinho = localStorage.getItem(KEY_CARRINHO);
  let [listaCarrinho, setListaCarrinho] = React.useState([]);

  const updateCarrinho = () => {
    localCarrinho = localStorage.getItem(KEY_CARRINHO);
    if (!localCarrinho) {
      localStorage.setItem(KEY_CARRINHO, "[]");
    } else {
      setListaCarrinho(JSON.parse(localCarrinho));
    }
  };

  React.useEffect(() => {
    updateCarrinho();
  }, []);

  const closeCarrinho = (index) => {
    if (index > -1) {
      listaCarrinho.splice(index, 1);

      localStorage.setItem(KEY_CARRINHO, JSON.stringify(listaCarrinho));

      setListaCarrinho(listaCarrinho);
    }
  };

  const abrirFinalizarCompra = () =>{
    
    const usuario = localStorage.getItem("user")
    
    if (usuario == null){
      alert("Você Precisa estar logado para finalizar compras")
      return
    }
    props.handleModalCarrinho()
  }

  return (
    <>
      <Dropdown autoClose="outside" onClick={() => updateCarrinho()}>
        <Dropdown.Toggle variant="default">
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {listaCarrinho.map((item, index) => {
            return (
              <div key={`carrinho${item.id}`}>
                <Dropdown.Item style={{ display: "flex" }}>
                  <div style={{ width: "100%" }}>
                    {`${item.title} ${formatToCurrence(item.preco)}`}
                  </div>
                  <div
                    style={{
                      textAlign: "end",
                      width: "40px",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon
                      onClick={() => closeCarrinho(index)}
                      color="red"
                      icon={faTimes}
                    />
                  </div>
                </Dropdown.Item>
                {index !== listaCarrinho.length - 1 && <Dropdown.Divider />}
              </div>
            );
          })}

          {listaCarrinho.length === 0 && (
            <Dropdown.Item>Sem itens</Dropdown.Item>
          )}
          <div style={{ textAlign: "center" }}>
            <Button onClick={()=>abrirFinalizarCompra()} variant="outline-success">
              {" "}
              <FontAwesomeIcon  icon={faCheck} /> Finalizar Compra
            </Button>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default Carrinho;
