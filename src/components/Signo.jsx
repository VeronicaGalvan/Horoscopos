import "./Signo.css";

function Signo({ signo, nombre, signosData }) {
  if (!signo) return null;

  return (
    <div className="signo-card">
      <h2>Tu signo es: {signo}</h2>
      <img src={signosData[signo].img} alt={signo} />
      <p>
        <strong>{nombre}</strong>, {signosData[signo].desc}
      </p>
    </div>
  );
}

export default Signo;
