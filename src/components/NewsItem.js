import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2018/12/instagram-buy-an-ipad.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-primary">
              Read the full story
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
