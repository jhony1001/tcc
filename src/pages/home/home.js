import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Row, Col, Card, Nav, NavDropdown } from "react-bootstrap";
import styles from "./home.module.css";
import Cards from "../../componentes/cards/cards";
import ModalLogin from "../../componentes/ModalLogin/ModalLogin";
import ModalConta from "../../componentes/ModalConta/ModalConta";
import ModalCarrinho from "../../componentes/ModalCarrinho/ModalCarrinho";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Carrinho from "../../componentes/carrinho/carrinho";
import axios from "axios";


class Home extends React.Component {
  state = {
    modalLogin: false,
    modalConta: false,
    modalCarrinho:false,
    user:null,

    listBurger: [],
    listBebidas: [],
    listSucos: [],
    listMolhos: [],
    listCombos: [],
    listBatatas: [],
  };

  

  componentDidMount(){
    axios.get("http://localhost:8080/api/produtos").then((response)=>{
     const listProdutos = response.data;
     
     const listBurger = listProdutos.filter((produto) => produto.tipo === "hamburguer");
     this.setState({...this.state, listBurger:listBurger});

     const listBebidas = listProdutos.filter((produto) => produto.tipo === "bebidas");
     this.setState({...this.state, listBebidas});

     const listSucos = listProdutos.filter((produto) => produto.tipo === "sucos");
     this.setState({...this.state, listSucos});
     
     const listCombos = listProdutos.filter((produto) => produto.tipo === "combos");
     this.setState({...this.state, listCombos});


     const listBatatas = listProdutos.filter((produto) => produto.tipo === "batata");
     this.setState({...this.state, listBatatas});
     
     const listMolhos = listProdutos.filter((produto) => produto.tipo === "molhos");
     this.setState({...this.state, listMolhos});
    })
    .catch((e)=>{
      console.log(e)
      alert("Falha ao carregar produtos");
    })

    
    const usuario = localStorage.getItem("user")
    if (usuario != null){
      const usuarioObject = JSON.parse(usuario);
      this.setState({...this.state,user:usuarioObject})
    }
  }

  handleModalLogin() {
    this.setState({ modalLogin: !this.state.modalLogin });
  }

  handleModalConta() {
    this.setState({ modalConta: !this.state.modalConta });
  }

  handleModalCarrinho() {
    this.setState({modalCarrinho: !this.state.modalCarrinho})
  }

  handleLogout() {
    localStorage.removeItem("user")
    this.setState({user:null})
    window.location.reload();
  }


  render() {
    return (
      <div>
       
       <h1 style={{color: 'grey', backgroundColor:'black', textAlign:'center'}} >Rock Burguer</h1>
        
        <ModalLogin
          handleModalLogin={() => this.handleModalLogin()}
          modalLogin={this.state.modalLogin}
        />
        <ModalConta
          handleModalConta={() => this.handleModalConta()}
          modalConta={this.state.modalConta}
        />
         <ModalCarrinho
          handleModalCarrinho={() => this.handleModalCarrinho()}
          modalCarrinho={this.state.modalCarrinho}
        />

        <Navbar exnpand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="/">Rock Burguer</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#Burguer">Hambúrgueres</Nav.Link>
                <Nav.Link href="#Batata">Porçoes de Batata</Nav.Link>
                <Nav.Link href="#Combos">Combos</Nav.Link>
                <Nav.Link href="#Bebidas">Bebidas</Nav.Link>
                <Nav.Link href="#Sucos">Sucos</Nav.Link>
                <Nav.Link href="#Molhos">Molhos</Nav.Link>
              </Nav>
              <Nav>
                
                  {
                    this.state.user?
                    <Nav.Link onClick={() => this.handleLogout()} href="#deets">
                       Logout
                    </Nav.Link>
                    :
                    <Nav.Link onClick={() => this.handleModalLogin()} href="#deets">
                       Faça Login
                    </Nav.Link>

                  }
                <Nav.Link onClick={() => this.handleModalConta()} href="#deets">
                  Criar Conta
                </Nav.Link>

                <Nav.Link>
                  <Carrinho handleModalCarrinho={() => this.handleModalCarrinho()}  />
                </Nav.Link>


              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container>
          <section id="Burguer">
            <h2>Hambúrgueres</h2>
            <Row>
              {this.state.listBurger.map((burger) => {
                return (
                  <Col
                    key={burger.id}
                    md={4}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Cards
                      id={burger.id}
                      title={burger.nome}
                      description={burger.descricao}
                      srcImg={burger.imagem}
                      preco={burger.preco}
                    />
                  </Col>
                );
              })}
            </Row>
          </section>

          <section id="Batata">
            <h2>Batatas</h2>
            <Row>
              {this.state.listBatatas.map((batata) => {
                return (
                  <Col
                    key={batata.id}
                    md={4}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Cards
                      id={batata.id}
                      title={batata.nome}
                      description={batata.descricao}
                      srcImg={batata.imagem}
                      preco={batata.preco}
                    />
                  </Col>
                );
              })}
            </Row>
          </section>

          <section id="Bebidas">
            <h2>Bebidas</h2>
            <Row>
              {this.state.listBebidas.map((burger) => {
                return (
                  <Col
                    key={burger.id}
                    md={4}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Cards
                      id={burger.id}
                      title={burger.nome}
                      description={burger.descricao}
                      srcImg={burger.imagem}
                      preco={burger.preco}
                    />
                  </Col>
                );
              })}
            </Row>
          </section>

          <section id="Sucos">
            <h2>Sucos</h2>
            <Row>
              {this.state.listSucos.map((burger) => {
                return (
                  <Col
                    key={burger.id}
                    md={4}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Cards
                      id={burger.id}
                      title={burger.nome}
                      description={burger.descricao}
                      srcImg={burger.imagem}
                      preco={burger.preco}
                    />
                  </Col>
                );
              })}
            </Row>
          </section>

          <section id="Molhos">
            <h2>Molhos</h2>
            <Row>
              {this.state.listMolhos.map((burger) => {
                return (
                  <Col
                    key={burger.id}
                    md={4}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Cards
                      id={burger.id}
                      title={burger.nome}
                      description={burger.descricao}
                      srcImg={burger.imagem}
                      preco={burger.preco}
                    />
                  </Col>
                );
              })}
            </Row>
          </section>

          <section id="Combos">
            <h2>Combos</h2>
            <Row>
              {this.state.listCombos.map((burger) => {
                return (
                  <Col
                    key={burger.id}
                    md={4}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Cards
                      id={burger.id}
                      title={burger.nome}
                      description={burger.descricao}
                      srcImg={burger.imagem}
                      preco={burger.preco}
                    />
                  </Col>
                );
              })}
            </Row>
          </section>
        </Container>

        <Row className="footer justify-content-md-center text-center pb-4">
          <Col md={2}>
            <Card className={styles.footerCard}>Sobre</Card>
          </Col>
          <Col md={2}>
            <Card className={styles.footerCard}>Meu Perfil</Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
