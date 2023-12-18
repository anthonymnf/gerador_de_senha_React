import { useState } from "react";
import "./App.css";
import InputTamanho from "./Components/InputTamanho";

function App() {
  const [copyText, setCopyText] = useState("Copiar");
  const [password, setpassword] = useState("");
  const [customPasswordSize, setcustomPasswordSize] = useState("12");
  function generate() {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    let newsenha = "";
    for (let i = 0; i < customPasswordSize; i++) {
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
      <div className="container">
        <h1>Gerador de senha</h1>
        <InputTamanho
          passwordSize={customPasswordSize}
          setpasswordSize={setcustomPasswordSize}
        />
        <button onClick={generate}>Gerar</button>
        <button className="btn2" onClick={copiar}>
          {copyText}
        </button>
        <div className="divsenha">
          <b>Sua senha segura: </b>
          {password}
        </div>
      </div>
    </>
  );
}

export default App;
