import { useState } from "react";
import { useRef } from "react";

export default function App() {
  const [nome, setNome] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nome.trim() === "") {
      alert("Por favor, insira um nome válido.");
      return;
    }
    setVisible(true);
  }
  
  return (
  <main style={{minHeight:"100dvh",display:"grid",placeItems:"center",fontFamily:"system-ui"}}>
    <div style={{border:"1px solid #ddd",borderRadius:16,padding:24,textAlign:"center"}}>

      <h1>Tela Incial</h1>

      {visible && <p>{nome}</p>}

      <form onSubmit={handleSubmit}>

        <input value={nome} onChange={(e) => setNome(e.target.value)}></input>

        <div style={{marginTop:"1rem"}}>

          <button type="submit" style={{padding:"10px 16px",borderRadius:12,cursor:"pointer"}}>
            Entrar
          </button>

        </div>

      </form>

      <button onClick={() => {setNome(''); setVisible(false);}} style={{padding:"10px 16px",borderRadius:12,cursor:"pointer"}}>
        Sair
      </button>

    </div>
            
  </main>
  );
}