import { useState } from "react";
import "./App.css";

function App() {
  const [copyText, setCopyText] = useState("Copiar");
  const [password, setpassword] = useState("");
  const [passwordSize, setpasswordSize] = useState("12");
  function generate() {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    let newsenha = "";
    for (let i = 0; i < passwordSize; i++) {
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
        <div>
          <label htmlFor="passwordSize">Tamanho: </label>
          <input
            type="number"
            id="passwordSize"
            min={1}
            value={passwordSize}
            onChange={(ev) => setpasswordSize(ev.target.value)}
          />
        </div>
        <button onClick={generate}>Gerar</button>
        <button className="btn2" onClick={copiar}>
          {copyText}
        </button>
        <div>Sua senha segura: {password}</div>
      </div>
    </>
  );
}

export default App;
