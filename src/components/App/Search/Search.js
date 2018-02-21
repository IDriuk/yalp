import React, { Component } from 'react';
import './Search.css';
import Icon from '../../common/Icon/Icon';
import Suggestions from './Suggestions/Suggestions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSuggestions: false,
      searchText: ""
    }

    this.showSuggestions = this.showSuggestions.bind(this);
    this.hideSuggestions = this.hideSuggestions.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.updateSearchInput = this.updateSearchInput.bind(this);
  }

  handleSearchChange(event) {
    this.setState({searchText: event.target.value});
  }

  updateSearchInput(searchText) {
    this.setState({searchText})
  }

  showSuggestions() {
    this.setState({ showSuggestions: true });
  }

  hideSuggestions() {
    setTimeout(() => {this.setState({ showSuggestions: false })}, 200);
  }

  render () {
    const { showSuggestions, searchText } = this.state;

    return (
      <form className="business-search-form main-search yform u-space-b0">
        <div className="arrange arrange--equal arrange--stack-small">
          <div className="arrange_unit">
            <div className="main-search_suggestions-field search-field-container find-decorator">
              <label className="pseudo-input business-search-form_input business-search-form_input--find">
                <div className="pseudo-input_wrapper">
                  <span className="pseudo-input_text business-search-form_input-text">Find</span>
                  <span className="pseudo-input_field-holder">
                    <input
                      onFocus={this.showSuggestions}
                      onBlur={this.hideSuggestions}
                      onChange={this.handleSearchChange}
                      value={searchText}
                      className="pseudo-input_field business-search-form_input-field"
                      placeholder="burgers, barbers, spas, handymen…"
                      style={{
                        display: 'inline-block',
                        background: 'transparent none repeat scroll 0% 0%',
                        position: 'relative',
                        width: '100%',
                        boxSizing: 'border-box'
                      }}
                    />
                  </span>
                </div>
              </label>
              {showSuggestions && <Suggestions updateSearchInput={this.updateSearchInput} />}
            </div>
          </div>

          <div className="arrange_unit">
            <div className="arrange">
              <div className="arrange_unit arrange_unit--fill">
                <div className="main-search_suggestions-field search-field-container near-decorator">
                  <label className="pseudo-input business-search-form_input business-search-form_input--near" >
                    <div className="pseudo-input_wrapper">
                      <span className="pseudo-input_text business-search-form_input-text">Near</span>
                      <span className="pseudo-input_field-holder">
                        <input
                          className="pseudo-input_field business-search-form_input-field"
                          placeholder="address, neighborhood, city, state or zip"
                          defaultValue="San Francisco, CA"
                        />
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="arrange_unit">
                <button className="ybtn ybtn--primary ybtn--small business-search-form_button">
                  <span className="main-search_action-icon-wrap">
                    <Icon
                      name="search"
                      size={24}
                      currentColor
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Search;
