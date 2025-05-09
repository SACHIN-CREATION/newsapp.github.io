import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  pageSize = 6;
  apikey = process.env.REACT_APP_NEWS_API 
  state= {
    progress: 0
  }
  setprogress = (progress)=>{
    this.setState({progress: progress})

  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          height={4}
        color="#f11946"
        progress={this.state.progress}
        
      />

          <Routes>
            <Route exact path="/" element={<News setprogress={this.setprogress} apikey={this.apikey}  key="general" pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path="/business" element={<News setprogress={this.setprogress} apikey={this.apikey} key="business" pageSize={this.pageSize} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News setprogress={this.setprogress} apikey={this.apikey} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
            <Route exact path="/health" element={<News setprogress={this.setprogress} apikey={this.apikey} key="health" pageSize={this.pageSize} country="us" category="health" />} />
            <Route exact path="/science" element={<News setprogress={this.setprogress} apikey={this.apikey} key="science" pageSize={this.pageSize} country="us" category="science" />} />
            <Route exact path="/sports" element={<News setprogress={this.setprogress} apikey={this.apikey} key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News setprogress={this.setprogress} apikey={this.apikey} key="technology" pageSize={this.pageSize} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
