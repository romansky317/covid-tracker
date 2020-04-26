import React from 'react';
import css from './App.module.css';
import { Cards, Chart, CountryPicker } from './components';
import fetchData from './API/index';
import Icon from './images/covid-icon.png';

class App extends React.Component {

  state = {
    data: {},
    country: ''
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    // Fetch data
    console.log(fetchedData);
    // set the State
    this.setState({
      data: fetchedData,
      country: country
    })
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({
      data: fetchedData
    })
  }

  render() {

    const { data, country } = this.state;

    return (
      <div className={css.container}>
        <img className={css.image} src={Icon} alt="covid-icon" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
