import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div>
        <p>This is a News Component</p>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    );
  }
}

export default News;
