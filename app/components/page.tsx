import Card from "./Card/Card";
import NavBar from "./Nav/NavBar";
import Projeto from "./Projetos/Projetos";

  


  function Pagina(){
    return(
        <div className="flex flex-col gap-4">
            <NavBar />
            <Card />
            <Projeto />

        </div>
    )
  }

  export default Pagina