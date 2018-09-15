import React, { Component } from "react";

class CountryList extends Component {
  render() {
    return (
      <div>
        <ul className="countryContainer">
          {this.props.filteredCountries.map(country => {
            return <li className="countryName" key={country}>{country}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default CountryList;
