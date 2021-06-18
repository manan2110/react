import React, { Component } from 'react'
import "./SearchBar.css"

export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        };
        this.handelTermChange = this.handelTermChange.bind(this);
        this.search = this.search.bind(this);
        this.handelEnter = this.handelEnter.bind(this);
    };
    handelTermChange(event) {
        this.setState({ term: event.target.value });
    }

    search() {
        this.props.onSearch(this.state.term);
    }
    handelEnter(event) {
        if (event.keyCode === 13) {
            this.search();
        }
    }
    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter Song , Album or Artist" onChange={this.handelTermChange} onKeyUp={this.handelEnter} />
                <button className="SearchButton" onclick={this.search}>SEARCH</button>
            </div>
        );
    }
}

export default SearchBar
