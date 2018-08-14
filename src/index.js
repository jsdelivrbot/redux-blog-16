import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import promise from "redux-promise";
//Mis componentes
import PostsIndex from "./components/PostsIndex";
import PostsShow from "./components/PostShow";
import PostsNew from "./components/PostsNew";

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={PostsIndex} />
        <Route path="/posts/:id" component={PostsShow} />
        <Route path="/posts/new" component={PostsNew} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
