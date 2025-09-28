import "./Formulario.css";

function Formulario({ nombre, setNombre, fecha, setFecha, calcularSigno }) {
  return (
    <div className="formulario-card">
      <h2>Ingresa tus datos</h2>
      <br />
      <label>Nombre: </label>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <br /><br />

      <label>Fecha de nacimiento: </label>
      <input 
        type="date" 
        value={fecha} 
        onChange={(e) => setFecha(e.target.value)} 
        max={new Date().toISOString().split("T")[0]} 
        />

      <br /><br /><br />

      <button onClick={calcularSigno}>Ver mi signo</button>
    </div>
  );
}

export default Formulario;
