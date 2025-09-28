import { useState } from "react";
import Formulario from "./components/formulario";
import Signo from "./components/Signo";
import "./App.css";

function App() {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [signo, setSigno] = useState("");

  const calcularSigno = () => {
  if (!fecha) return;

  const hoy = new Date().toISOString().split("T")[0];
  if (fecha > hoy) {
    alert("⚠️ La fecha no puede ser en el futuro");
    return;
  }

  const [, mes, dia] = fecha.split("-").map(Number);
  let signoZodiacal = "";

  if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) signoZodiacal = "Aries";
  else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) signoZodiacal = "Tauro";
  else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) signoZodiacal = "Géminis";
  else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) signoZodiacal = "Cáncer";
  else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) signoZodiacal = "Leo";
  else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) signoZodiacal = "Virgo";
  else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) signoZodiacal = "Libra";
  else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) signoZodiacal = "Escorpio";
  else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) signoZodiacal = "Sagitario";
  else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) signoZodiacal = "Capricornio";
  else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) signoZodiacal = "Acuario";
  else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) signoZodiacal = "Piscis";

  setSigno(signoZodiacal);
};


  const signosData = {
    Aries: { img: "/public/aries.jpeg", desc: "Es un signo zodiacal del elemento Fuego. Regido por el planeta Marte, el carnero simboliza la acción, el liderazgo, la valentía y un espíritu pionero y aventurero" }, 
    Tauro: { img: "/public/tauro.jpeg", desc: "Es un signo zodiacal del elemento tierra, regido por Venus, cuyo símbolo es la cabeza de un toro. se caracteriza por su fuerza de voluntad, lealtad, sensualidad y amor por la estabilidad y la belleza, aunque también pueden ser testarudos y posesivos|" },
    Géminis: { img: "/public/geminis.jpeg", desc: "Se caracteriza por su naturaleza dual y mutable, su curiosidad, su versatilidad y su capacidad para adaptarse a diferentes entornos, aunque puede tener dificultades para la constancia. " },
    Cáncer: { img: "/public/cancer.jpeg", desc: "Es el cuarto signo del zodíaco, pertenece al elemento Agua y su planeta regente es la Luna. Las personas nacidas bajo este signo suelen caracterizarse por ser sensibles, hogareñas, protectores, familiares y nutritivos." }, 
    Leo: { img: "/public/leo.jpeg", desc: "Es un signo de Fuego, simbolizado por el león, lo que les otorga una personalidad fuerte, enérgica, segura de sí misma y líder. Se caracterizan por ser creativos, leales, generosos y amantes de la aventura y los lujos, aunque también pueden presentar tendencias al egocentrismo, la vanidad y el autoritarismo. " }, 
    Virgo: { img: "/public/virgo.jpg", desc: "Es un signo del elemento Tierra, regido por Mercurio, caracterizado por su espíritu crítico, lógica, atención al detalle y naturaleza servicial. El símbolo de Virgo es la doncella, que representa la búsqueda de la perfección, la laboriosidad y la capacidad de llevar las cosas a buen término. " }, 
    Libra: { img: "/public/libra.jpeg", desc: "Es un signo de aire, regido por el planeta Venus, y se asocia con la justicia, el equilibrio, la armonía, la belleza y la diplomacia. Las personas nacidas bajo este signo suelen ser sociables, encantadoras, con buen gusto y una gran habilidad para mediar y resolver conflictos, aunque a veces pueden mostrarse algo volubles o excesivamente preocupadas por la aprobación ajena." }, 
    Escorpio: { img: "/public/escorpio.jpeg", desc: "Es un signo de agua, conocido por su intensidad, magnetismo y profundidad emocional. Las personas de Escorpio son apasionadas, intuitivas y muy determinadas, con una gran fuerza de voluntad y capacidad de análisis." }, 
    Sagitario: { img: "/public/sagitario.jpeg", desc: "Es un signo de Fuego, regido por el planeta Júpiter, caracterizado por su optimismo, amor por la libertad, la aventura y el conocimiento." }, 
    Capricornio: { img: "/public/capricornio.jpeg", desc: "Es un signo de Tierra, regido por el planeta Saturno, y representado por la cabra montesa. Los capricornianos se caracterizan por ser ambiciosos, responsables, disciplinados y pragmáticos, buscando constantemente el éxito y la estabilidad en sus vidas." }, 
    Acuario: { img: "/public/acuario.jpg", desc: "Es un signo de aire, conocido por ser independiente, humanitario, original e intelectual. Gobernado por Urano y con el símbolo del aguador, Acuario se relaciona con la innovación, el progreso y la libertad, aunque también puede presentar tendencias a la imprecisión. " },
    Piscis: { img: "/public/piscis.jpeg", desc: "Es un signo de Agua y de modalidad mutable, lo que les otorga una gran sensibilidad, empatía e intuición. Piscis es conocido por su profunda conexión emocional, su naturaleza compasiva y su imaginación, lo que a menudo los inclina hacia las artes y las actividades creativas." }, 
  };

  return (
    <div className="app-container">
      <h1 className="titulo">Horóscopo React</h1>
      <div className="contenido">
        <Formulario
          nombre={nombre}
          setNombre={setNombre}
          fecha={fecha}
          setFecha={setFecha}
          calcularSigno={calcularSigno}
        />
        <Signo signo={signo} nombre={nombre} signosData={signosData} />
      </div>
    </div>
  );
}

export default App;
