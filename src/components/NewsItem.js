import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date}=this.props;
    return (
      <div>
                        <div className="card my-3">
                <img src={imageUrl} //style={{height: "20rem"}}
                 className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {date?new Date(date).toGMTString():"Unknown"}</small></p>
                    <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
                </div>
                </div>
      </div>
    )
  }
}

export default NewsItem;
