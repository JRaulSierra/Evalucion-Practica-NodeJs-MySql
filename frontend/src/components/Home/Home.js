import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

function Home(props) {
  return (
    <div>
      BIENVENIDOS
      <Button className="m-3" variant="success">
        <Link to="/login">Ingresar Al Programa</Link>
      </Button>
    </div>
  );
}

export default Home;
