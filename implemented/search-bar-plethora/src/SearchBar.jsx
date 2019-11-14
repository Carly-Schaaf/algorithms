import React from 'react';
import Search from './search.js';

function debounce(fn, time) {
    let timeout;
    return (...args) => {
        if (timeout) { clearTimeout(timeout) };

        const fnCall = () => {
           return fn(...args);
        }

        timeout = setTimeout(fnCall, time);
    }
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
        this.debouncedSearch = debounce(this.executeSearch, 3000);
    }

    executeSearch = () => {
        console.log("in the search function:" + this.state.search);
        Search(this.state.search)
                .then(results => {
                    this.props.setAppState(results);
                });
    }

    async handleInput(e) {
        await this.setState({ search: e.target.value });
        this.debouncedSearch();
    }
    // debounce --> the function has to stop being 
    // invoked for a certain time period before it actually executes

    render() {
        return(
            <input 
            onChange={this.handleInput.bind(this)}
            value={this.state.search} 
            type="text"/>
        )
    }
}

export default SearchBar;