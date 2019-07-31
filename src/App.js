import React, { Fragment, Component, Suspense } from "react";
import axios from "axios";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Single from "./components/Single/Single";
import Loader from "./components/Loading/Loader";
const Posts = React.lazy(() => import("./components/Posts/Posts"));
class App extends Component {
  state = {
    posts: [],
    comments: [],
    loading: false
  };

  componentDidMount = async () => {
    this.setState({
      loading: true
    });
    const res1 = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const res2 = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const final = res1.data.slice(0, 5);
    console.log(final);
    this.setState({
      posts: final,
      comments: res2.data,
      loading: false
    });
  };

  getMore = async () => {
    let sec = await axios.get("https://jsonplaceholder.typicode.com/posts");

    const data = sec.data.slice(0, 5);
    console.log(data);
    this.setState({
      posts: { ...this.state.posts, data }
    });
  };

  render() {
    let details = props => {
      let name = props.match.params.topic;
      let current = this.state.posts.find(
        ind => ind.title.toLowerCase() === name.toLowerCase()
      );
      console.log(current);
      return (
        <Single {...props} data={current} comments={this.state.comments} />
      );
    };

    return (
      <Fragment>
        <Suspense fallback={<div>Loading...</div>}>
          {this.state.loading === true ? (
            <div className="centered">
              <Loader />
            </div>
          ) : (
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Posts posts={this.state.posts} />}
              />
              <Route exact path="/topics/:topic" render={details} />
            </Switch>
          )}
        </Suspense>
        <div className="text-center">
          <button onClick={this.getMore} className="btn btn-primary m-3">
            Load More
          </button>
        </div>
      </Fragment>
    );
  }
}

export default App;
