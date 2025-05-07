// /* eslint-disable react/jsx-no-undef */
// import React, { Component } from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//   static defaultProps = {
//     country: "in",
//     pageSize: "6",
//     category: "general",
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };
//    capitalize = (str)=>{
//     if (!str) return ''; // Return an empty string if the input is falsy
//     return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
//   }

//   constructor(props) {
//     super(props);

//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults: 0
//     };
//     document.title = `${this.capitalize(this.props.category)} - NewsMonkey`;
//   }

//   // async UpdateNews(){
//   //   // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e0d82d5c224b4348a3c5075d66eae2c9&pageSize=${this.props.pageSize}`;

//   //   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=015fb673871e4109895dd1f8d8e4bb29&pageSize=${this.props.pageSize}`;

//   //   // const url = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=${this.props.country}&category=${this.props.category}&apikey=4982758ec4094768b6611f8a73003a5d&pageSize=${this.props.pageSize}`;
//   //   this.setState({ loading: true });
//   //   let data = await fetch(url);
//   //   let parsedData = await data.json();
//   //   this.setState({
//   //     articles: parsedData.articles,
//   //     totalResults: parsedData.totalResults,
//   //     loading: false,
//   //   });
//   // }

//   async UpdateNews() {
//     // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e0d82d5c224b4348a3c5075d66eae2c9&page=${this.state.page}&pageSize=${this.props.pageSize}`;

//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=015fb673871e4109895dd1f8d8e4bb29&pageSize=${this.props.pageSize}`;

//     // https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=015fb673871e4109895dd1f8d8e4bb29

//     this.setState({ loading: true });
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//   }

//   async componentDidMount() {

//     this.UpdateNews();
//   }

//   hendelPreviousClick = async () => {
//     this.setState({page : this.state.page - 1})
//     this.UpdateNews();
//   };

//   hendelNextClick = async () => {

//     this.setState({page : this.state.page + 1});
//     this.UpdateNews();
//   };

// fetchMoreData = async () => {
//   this.setState({page: this.state.page + 1})
//    // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e0d82d5c224b4348a3c5075d66eae2c9&page=${this.state.page}&pageSize=${this.props.pageSize}`;

//    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=015fb673871e4109895dd1f8d8e4bb29&pageSize=${this.props.pageSize}`;

//    // https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=015fb673871e4109895dd1f8d8e4bb29

//    this.setState({ loading: true });
//    let data = await fetch(url);
//    let parsedData = await data.json();
//    this.setState({
//      articles: this.state.articles.concat( parsedData.articles),
//      totalResults: parsedData.totalResults,
//      loading: false,
//    });

//   };

//   render() {
//     return (
//       <div>
//         <div className="container my-2">

//           <h1 className="text-center" style={{ margin: "30px 0px" }}>
//             NewsMonkey - Top  {this.capitalize(this.props.category)} category
//           </h1>
//           {/* {this.state.loading && <Spinner />} */}

//           <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={<Spinner/>}
//         >

//           <div className="row">
//             {
//               this.state.articles.map((element) => {
//                 return (
//                   <div className="col-md-4" key={element.url}>
//                     <NewsItem
//                       title={element.title ? element.title.slice(0, 45) : ""}
//                       description={
//                         element.description
//                           ? element.description.slice(0, 88)
//                           : ""
//                       }
//                       imageUrl={element.urlToImage}
//                       newsUrl={element.url}
//                       author={element.author}
//                       date={element.publishedAt}
//                       source={element.source.name}
//                     />
//                   </div>
//                 );
//               })}
//           </div>
//           </InfiniteScroll>
//         </div>

//       </div>
//     );
//   }
// }

// export default News;

// import React, { Component } from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//   static defaultProps = {
//     country: "in",
//     pageSize: 6,
//     category: "general",
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };

//   capitalize = (str) => {
//     if (!str) return ''; // Return an empty string if the input is falsy
//     return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
//   }

//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults: 0
//     };
//     document.title = `${this.capitalize(this.props.category)} - NewsMonkey`;
//   }

//   async UpdateNews(page = this.state.page) {
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=015fb673871e4109895dd1f8d8e4bb29&page=${page}&pageSize=${this.props.pageSize}`;

//     this.setState({ loading: true });
//     let data = await fetch(url);
//     let parsedData = await data.json();

//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//       page: page
//     });
//   }

//   async componentDidMount() {
//     this.UpdateNews(1);
//   }

//   handlePreviousClick = async () => {
//     const newPage = this.state.page - 1;
//     this.UpdateNews(newPage);
//   };

//   handleNextClick = async () => {
//     const newPage = this.state.page + 1;
//     this.UpdateNews(newPage);
//   };
//   fetchMoreData = async () => {
//     // Calculate the next page number
//     const nextPage = this.state.page + 1;

//     // Update the page number in state
//     this.setState({ page: nextPage });

//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=015fb673871e4109895dd1f8d8e4bb29&page=${nextPage}&pageSize=${this.props.pageSize}`;

//     try {
//       let data = await fetch(url);
//       let parsedData = await data.json();

//       if (parsedData.articles && parsedData.articles.length > 0) {
//         this.setState({
//           articles: [...this.state.articles, ...parsedData.articles],
//           totalResults: parsedData.totalResults
//         });
//       }
//     } catch (error) {
//       console.error("Error fetching more news:", error);
//     }
//   }
//   render() {
//     return (
//       <div>
//         <div className="container my-2">
//           <h1 className="text-center" style={{ margin: "30px 0px" }}>
//             NewsMonkey - Top {this.capitalize(this.props.category)} category
//           </h1>

//           {/* {this.state.loading && <Spinner />} */}
//           <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={<Spinner/>}
//          >

//           <div className="row">
//             {!this.state.loading &&
//               this.state.articles.map((element) => {
//                 return (
//                   <div className="col-md-4" key={element.url}>
//                     <NewsItem
//                       title={element.title ? element.title.slice(0, 45) : ""}
//                       description={
//                         element.description
//                           ? element.description.slice(0, 88)
//                           : ""
//                       }
//                       imageUrl={element.urlToImage}
//                       newsUrl={element.url}
//                       author={element.author}
//                       date={element.publishedAt}
//                       source={element.source.name}
//                     />
//                   </div>
//                 );
//               })}
//           </div>
//           </InfiniteScroll>
//         </div>

//       </div>
//     );
//   }
// }

// export default News;

import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalize = (str) => {
    if (!str) return ""; // Return an empty string if the input is falsy
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalize(this.props.category)} - NewsMonkey`;
  }

  async UpdateNews(page = this.state.page) {
    this.props.setprogress(10);
    
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${page}&pageSize=${this.props.pageSize}`;
    
    // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=${this.props.pageSize}`;

    



console.log("API URL:", url);


    
    // 

    this.setState({ loading: true });
    try {
      let data = await fetch(url);
      this.props.setprogress(30);
      let parsedData = await data.json();
      this.props.setprogress(70);

      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
        page: page,
      });
      this.props.setprogress(100);
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  }

  async componentDidMount() {
    this.UpdateNews(1);
  }

  // handlePreviousClick = async () => {
  //   const newPage = this.state.page - 1;
  //   this.UpdateNews(newPage);
  // };

  // handleNextClick = async () => {
  //   const newPage = this.state.page + 1;
  //   this.UpdateNews(newPage);
  // };

  fetchMoreData = async () => {
    // Calculate the next page number
    const nextPage = this.state.page + 1;

    // Update the page number in state
    this.setState({ page: nextPage });

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${nextPage}&pageSize=${this.props.pageSize}`;

    

    

    try {
      let data = await fetch(url);
      let parsedData = await data.json();

      if (parsedData.articles && parsedData.articles.length > 0) {
        this.setState({
          articles: [...this.state.articles, ...parsedData.articles],
          totalResults: parsedData.totalResults,
        });
      }
    } catch (error) {
      console.error("Error fetching more news:", error);
    }
  };

  render() {
    return (
      <div>
        <div className="container my-2">
          <h1 className="text-center" style={{ margin: "30px 0px" }}>
            NewsMonkey - Top {this.capitalize(this.props.category)} Headlines
          </h1>

          {this.state.loading && this.state.articles.length === 0 && (
            <Spinner />
          )}

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length < this.state.totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {this.state.articles.map((element, index) => (
                  <div className="col-md-4" key={`${element.url}-${index}`}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default News;
