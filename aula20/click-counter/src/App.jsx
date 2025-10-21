import { useState } from "react";
import { useRef } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [tempo, setTempo] = useState(0)
  const [quantidade, setQuantidade] = useState(1);

  const intervaloRef = useRef(null);

  const handleChange = (event) => {
    setQuantidade(event.target.value);
  };

  const iniciar = () => {
    if (intervaloRef.current !== null) return; 
    intervaloRef.current = setInterval(() => {
      setTempo((t) => t + 1);
    }, 1000)
  }

  const parar = () => {
    clearInterval(intervaloRef.current)   
    intervaloRef.current = null;
  }

  const resetar = () => {
    parar();
    setTempo(0);
  }
  
  return (
  <main style={{minHeight:"100dvh",display:"grid",placeItems:"center",fontFamily:"system-ui"}}>
    <div style={{border:"1px solid #ddd",borderRadius:16,padding:24,textAlign:"center"}}>

      <h1>Contador de Cliques</h1>

      <p>Você clicou <strong>{count}</strong> vez(es).</p>

      <button onClick={() => setCount(c => c + parseInt(quantidade))} style={{padding:"10px 16px",borderRadius:12,cursor:"pointer"}}>
        Somar
      </button>

      <button onClick={() => {
        if (count <= 0) {
          setCount(0);
          return;
        }
        setCount(c => c - parseInt(quantidade));
      }} style={{padding:"10px 16px",borderRadius:12,cursor:"pointer"}}>
        Subtrair
      </button>

      {count > 0 && (<button onClick={() => setCount(0)} style={{marginLeft:8,padding:"10px 16px",borderRadius:12,cursor:"pointer"}}>
        Zerar
      </button>)}
      
      <input style={{marginLeft: "1rem"}} placeholder="Quantidade a Incrementar" value={quantidade} onChange={handleChange}/>
      
    </div>

    <div style={{border:"1px solid #ddd",borderRadius:16,padding:24,textAlign:"center"}}>

      <h1>Cronometro</h1>

      <p>{tempo} segundos se passaram</p>

      <button onClick={() => iniciar()} style={{padding:"10px 16px",borderRadius:12,cursor:"pointer"}}>
        Iniciar
      </button>

      <button onClick={() => parar()} style={{padding:"10px 16px",borderRadius:12,cursor:"pointer"}}>
        Pausar
      </button>

      {tempo > 0 && (<button onClick={() => resetar()} style={{marginLeft:8,padding:"10px 16px",borderRadius:12,cursor:"pointer"}}>
        Zerar
      </button>)}
            
    </div>
  </main>
  );
}