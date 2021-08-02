import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import { Home, AddLink } from "./page";
import Header from "./molecules/header";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/submit-link" component={AddLink} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
