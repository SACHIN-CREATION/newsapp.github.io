// /* eslint-disable jsx-a11y/anchor-is-valid */
// /* eslint-disable react/style-prop-object */
// import React, { Component } from "react";

// export class NewsItem extends Component {
//   render() {
//     let { title, description, imageUrl, newsUrl } = this.props;
//     return (
//       <div className="my-3">
//         <div className="card" style={{ width: "18rem" }}>
//           <img
//             src={
//               !imageUrl
//                 ? "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko="
//                 : imageUrl
//             }
//             className="card-img-top"
//             alt="..."
//           />
//           <div className="card-body">
//             <h5 className="card-title">{title}...</h5>
//             <p className="card-text">{description}...</p>
//             <a
//               href={newsUrl}
//               target="_blank"
//               className="btn btn-sm btn-dark"
//               rel="noreferrer"
//             >
//               Read More
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default NewsItem;

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */

// import React, { Component } from "react";

// export class NewsItem extends Component {
//   render() {
//     const { title, description, imageUrl, newsUrl, author, date,source } = this.props;

//     const defaultImage =
//       "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko=";

//     return (
//       <div className="my-3">
//         <div className="card">
//         <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" id="demo">
//                 {source}
//                 <span class="visually-hidden">unread messages</span>
//               </span>
//           <img
//             src={imageUrl || defaultImage}
//             className="card-img-top"
//             alt="news"
//           />
//           <div className="card-body">
//             <h5 className="card-title">
//               {title ? title.slice(0, 60) : "No Title"}...
//             </h5>
//             <p className="card-text">
//               {description ? description.slice(0, 100) : "No Description"}...
//             </p>
//             <p className="card-text">
//               <small className="text-danger">
//                 {" "}
//                 {!author ? "Unknown" : author} on{" "}
//                 {date && new Date(date).toGMTString()}{" "}
//               </small>
//             </p>
//             <a
//               href={newsUrl}
//               target="_blank"
//               rel="noreferrer"
//               className="btn btn-sm btn-dark"
//             >
//               Read More
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default NewsItem;

import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    const { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;

    const defaultImage =
      "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko=";

    return (
      <div className="my-3">
        <div className="card news-card">
          {" "}
          {/* Added custom class 'news-card' */}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            id="demo"
          >
            {source}
            
          </span>
          <img
            src={imageUrl || defaultImage}
            className="card-img-top"
            alt="news"
          />
          <div className="card-body">
            <h5 className="card-title">
              {title ? title.slice(0, 60) : "No Title"}...
            </h5>
            <p className="card-text">
              {description ? description.slice(0, 100) : "No Description"}...
            </p>
            <p className="card-text">
              <small className="text-danger">
                {" "}
                {!author ? "Unknown" : author} on{" "}
                {date && new Date(date).toGMTString()}{" "}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
