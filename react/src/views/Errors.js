import React from "react";
import { Container, Button } from "shards-react";
import { Link } from "react-router-dom";

const Errors = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h2>500</h2>
        <h3>Alguma coisa deu errado</h3>
        <p>Houve um problema do nosso lado. Por favor, tente novamente mais tarde.</p>
        <Button pill tag={Link} to="callcenter">&larr; Voltar</Button>
      </div>
    </div>
  </Container>
);

export default Errors;
