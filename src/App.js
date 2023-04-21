import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './containers/About';
import Post from './containers/Post';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "./pages";
import PageNotFound from "./pages/404";
import Layout from "./components/VitraWrapper/Layout";
import "vitra-web-translator/dist/esm/styles/index.css";

class App extends Component {
	render() {
		return (
			<Layout>
				<Router>
					<div className="App">
						<Header />
						<Hero />

						<div className="container">
							<Switch>
								<Route exact path="/" component={MainPage} />
								<Route path="/about" component={About} />
								<Route exact path="/post/:postId" component={Post} />
								<Route component={PageNotFound} />
							</Switch>
						</div>
					</div>
				</Router>
			</Layout>
		);
	}
}

export default App;
