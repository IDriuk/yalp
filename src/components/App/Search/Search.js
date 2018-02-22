import React, { Component } from 'react';
import './Search.css';
import Icon from '../../common/Icon/Icon';
import Suggestions from './Suggestions/Suggestions';
import Spinner from './Spinner/Spinner';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchSuggestions: false,
      searchText: "",
      showLocationsSuggestions: false,
      submit: false
    }

    this.showSearchSuggestions = this.showSearchSuggestions.bind(this);
    this.hideSearchSuggestions = this.hideSearchSuggestions.bind(this);
    this.submit = this.submit.bind(this);

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.updateSearchInput = this.updateSearchInput.bind(this);

    this.showLocationsSuggestions = this.showLocationsSuggestions.bind(this);
    this.hideLocationsSuggestions = this.hideLocationsSuggestions.bind(this);
  }

  handleSearchChange(event) {
    this.setState({searchText: event.target.value});
  }

  updateSearchInput(searchText) {
    this.setState({searchText})
  }

  showSearchSuggestions() {
    this.setState({ showSearchSuggestions: true });
  }

  hideSearchSuggestions() {
    setTimeout(() => {this.setState({ showSearchSuggestions: false })}, 200);
  }

  showLocationsSuggestions() {
    this.setState({ showLocationsSuggestions: true });
  }

  hideLocationsSuggestions() {
    setTimeout(() => {this.setState({ showLocationsSuggestions: false })}, 200);
  }

  submit(e) {
    e.preventDefault();
    this.setState({ submit: true });
    setTimeout(() => {this.setState({ submit: false })}, 1000);
  }

  render () {
    const { showSearchSuggestions, searchText, showLocationsSuggestions, submit } = this.state;

    return (
      <form
        onSubmit={this.submit}
        className="business-search-form main-search yform u-space-b0">
        <div className="arrange arrange--equal arrange--stack-small">
          <div className="arrange_unit">
            <div className="main-search_suggestions-field search-field-container find-decorator">
              <label className="pseudo-input business-search-form_input business-search-form_input--find">
                <div className="pseudo-input_wrapper">
                  <span className="pseudo-input_text business-search-form_input-text">Find</span>
                  <span className="pseudo-input_field-holder">
                    <input
                      onFocus={this.showSearchSuggestions}
                      onBlur={this.hideSearchSuggestions}
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
              {showSearchSuggestions && <Suggestions search updateSearchInput={this.updateSearchInput} />}
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
                          onFocus={this.showLocationsSuggestions}
                          onBlur={this.hideLocationsSuggestions}
                          className="pseudo-input_field business-search-form_input-field"
                          placeholder="address, neighborhood, city, state or zip"
                          defaultValue="San Francisco, CA"
                        />
                      </span>
                    </div>
                  </label>
                  {showLocationsSuggestions && <Suggestions locations />}
                </div>
              </div>

              <div className="arrange_unit">
                <button className="ybtn ybtn--primary ybtn--small business-search-form_button">
                  {submit ?
                    <Spinner /> :
                    <span className="main-search_action-icon-wrap">
                      <Icon
                        name="search"
                        size={24}
                        currentColor
                      />
                    </span>}
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
