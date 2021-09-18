import MainPage from "./Components/MainPage/MainPage.js";
import UnderConstruction from "./Components/UnderConstruction/UnderConstruction.js";
import RutasMasCortas  from './Components/RutasMasCortas/RutasMasCortas.js'
import Mochila from './Components/Mochila/Mochila.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App =() => {
  return (
    <div className="App">
       <Router>
          <Switch>
              <Route exact path="/" component={MainPage}/>
              <Route exact path="/NotImplemented" component={UnderConstruction}/>
              <Route exact path="/RutasMasCortas" component={RutasMasCortas}/>
              <Route exact path="/Mochila" component={Mochila}/>

          </Switch>
        </Router>

    </div>
  );
}

export default App;
