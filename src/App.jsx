import { useState } from "react";
import "./App.css";

function App() {
  const [copyText, setCopyText] = useState("Copiar");
  const [password, setpassword] = useState("Teste");
  function generate() {
    //Criar uma forma de criar uma senha aleatória
    setCopyText("Copiar");
  }
  function copiar() {
    window.navigator.clipboard.writeText(password);
    setCopyText("Copiado");
  }
  return (
    <>
      <div>
        <h1>Gerador de senha</h1>
        <button onClick={generate}>Gerar</button>
        <button onClick={copiar}>{copyText}</button>
        <div className="Divsenha">{password}</div>
      </div>
    </>
  );
}

export default App;
