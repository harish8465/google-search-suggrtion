// Write your code here
import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onSearchResult = event => {
    this.setState({searchInput: event.target.value})
  }

  selectSuggestionItem = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    // console.log(searchInput)
    const {suggestionsList} = this.props

    const searchSuggestionsList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    // console.log(searchSuggestionsList)
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-log"
          alt="google logo"
        />
        <div className="card-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-logo"
            />
            <input
              type="search"
              placeholder="Search Google"
              value={searchInput}
              className="search-bar"
              onChange={this.onSearchResult}
            />
          </div>
          <ul>
            {searchSuggestionsList.map(each => (
              <SuggestionItem
                eachItem={each}
                selectSuggestionItem={this.selectSuggestionItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
