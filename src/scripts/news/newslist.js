import React, { Component } from "react";
import APImanager from "../../modules/apimanager";
import NewsCard from "../../scripts/news/newscard";

class NewsList extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    APImanager.getAll("articles").then(articles => {
      this.setState({
        articles: articles
      });
    });
  };

  deleteArticle = id => {
    APImanager.delete("articles", id).then(() => {
      APImanager.getAll("articles").then(newArticle => {
        this.setState({
          articles: newArticle
        });
      });
    });
  };

  render() {

    return (
      <>
        <div>
          <h2 className="newsHeader">Witchy News</h2>
          <section>
            <button
              type="button"
              className="btn"
              onClick={() => {
                this.props.history.push("/news/new");
              }}
            >
              Enter News Article
            </button>
          </section>
        </div>
        <div>
          {this.state.articles.map(article => (
            <NewsCard
              key={article.id}
              article={article}
              deleteArticle={this.deleteArticle}
              {...this.props}
            />
          ))}
        </div>
      </>
    );
  }
}

export default NewsList;
