import { useState } from "react";
import "./App.css";

function App() {
  const [copyText, setCopyText] = useState("Copiar");
  const [password, setpassword] = useState("Teste");
  function generate() {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    let newsenha = "";
    for (let i = 0; i < 12; i++) {
      const position = Math.floor(Math.random() * characters.length);
      newsenha += characters[position];
    }
    setpassword(newsenha);
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
