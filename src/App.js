import './App.css';
import Usuario from './componentes/Usuario';
import foto3 from "./fotos/joven-confiado.jpg";
import foto2 from "./fotos/chico-guapo-seguro-posando-contra-pared-blanca.jpg";
import foto1 from "./fotos/joven-hispana-ropa-informal-sombrero-sonriendo-amablemente-ofreciendo-apreton-manos-como-saludo-bienvenida-negocio-exitoso.jpg"


function App() {


   return (
    <div className="App">
      <Usuario nombre="Maria" cargo="gerente general" conoceme="cv de Maria" imagen={foto1} />
      <Usuario nombre="Luis Garcia" cargo="gerente general" conoceme="cv de Maria" imagen={foto2}/>
      <Usuario nombre="Pedro" cargo="gerente general de region" conoceme="cv de Maria" imagen={foto3}/>


    </div>
  );
}

export default App;
