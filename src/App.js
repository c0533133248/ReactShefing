
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'‏


import HomePage from './componnents/HomePage'
import Lists from "./componnents/Lists";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import actions from "./redux/Action";

function App() {

  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(actions.getLists());
    dispatch(actions.getPosts());
  }, [])

  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/listPosts" component={Lists} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
