import React from 'react'
// import { withRouter, Link } from "react-router-dom";
import "./SearchPage.scss";

class SearchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      currentSearch: null,
      initialState: "",
      currentText: " ",
    };
  }

  //   this.setState({
  //     currentSearch: currentSearch.data.results,
  //   });
  // }
}

  return (
    <Layout>
      <h1>Search</h1>
      <Search onSubmit={this.handleSubmit} value={this.state.filterValue} onChange={this.handleSearchChange} />
      <form className="sort-container" onSubmit={this.handleSubmit}></form>
    </Layout>
  )


export default SearchPage