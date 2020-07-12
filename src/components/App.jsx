import React from "react";
import unsplash from "../unplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.state = { images: [] };
  }
  async onSearchSubmit(term) {
    const { data } = await unsplash.get(
      `https://api.unsplash.com/search/photos`,
      { params: { query: term } }
    );
    const { results } = data;
    this.setState({ images: results });
  }
  componentDidMount() {}
  render() {
    return (
      <div className="App ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        {/* Found: {this.state.images.length || "stiil searching"} images */}
      </div>
    );
  }
}
