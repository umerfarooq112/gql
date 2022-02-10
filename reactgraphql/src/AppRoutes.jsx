import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import CreatePost from "./Createpost";
import SinglePost from "./SinglePost";

function AppRoutes() {
  return (
    <div>
      <Switch>
        <Route path="/createPost" component={CreatePost} />
        <Route path="/singlepost/:id" component={SinglePost} />
        <Route path="/" component={App} />
      </Switch>
    </div>
  );
}

export default AppRoutes;
