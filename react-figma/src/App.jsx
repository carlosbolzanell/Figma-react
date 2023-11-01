import Header from "./Componentes/Header";
import Banner from "./Componentes/Banner";
import Browse from "./Componentes/Browse";
import Produtos from "./Componentes/Produtos";
import Rooms from "./Componentes/Rooms";

const App = () => {
  return(
    <div>
        <Header/>
        <Banner/>
        <Browse/>
        <Produtos/>
        <Rooms/>
    </div>
  );
};

export default App;