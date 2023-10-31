import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./normalize.css";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
console.log(import.meta.env.VITE_PROYECT);

function App() {
  const [count, setCount] = useState("SEX");

  useEffect(() => {}, []);

  return (
    <>
      <header>
        <div className="titulo_pagina">
          <h1>BOT APP</h1>
        </div>
        <div className="botones">
          <Button className="boton_reiniciar">Reiniciar</Button>
          <Button className="boton_prender">Prender</Button>
          <Button className="boton_parar">Parar</Button>
        </div>
      </header>
      <div className="main">
        <div className="central_column">
          <div className="search_bar">
            <p>Barra de busqueda</p>
          </div>
          <div className="interaction_panel">
            <div className="create_interaction_button">
              <Button>Crear Interaccion</Button>
            </div>
            <div className="interaction_list">
              <div className="interaction_card">
                <div className="card_information">
                  <div className="command_name">name command</div>
                  <div className="command_message">message</div>
                </div>
                <div className="card_buttons">
                  <Button className="delete_interaction_button">
                    Eliminar interaccion
                  </Button>
                  <Button className="edit_interraction_button">
                    Edit interaccion
                  </Button>
                </div>
                <div className="card_information">
                  <div className="command_name">name command</div>
                  <div className="command_message">message</div>
                </div>
                <div className="card_buttons">
                  <Button className="delete_interaction_button">
                    Eliminar interaccion
                  </Button>
                  <Button className="edit_interraction_button">
                    Edit interaccion
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
