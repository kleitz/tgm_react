import React from 'react'
import config from 'config'

class CitiesIndex extends React.Component {

  constructor(props) {
    super(props)
  }

  getInitialState() {
    return {}
  }

  componentDidMount() {
    fetch(config.apiDomain + "/api/cities.json").then(r => r.json()).then(json => {
      this.setState({ cities: json.cities })
    })
  }

/*
  componentWillMount () {
    console.log('CitiesIndex component will mount')
    let url = "http://localhost:3005/api/cities.json"
    let cities
    fetch(url).then(response => {
      return response.json()
    }).then(_data => {
      window.cities = _data
      console.log('cities', window.cities)
      this.cities = _data
    })
  }
*/

  render() {
    console.log('herehere')
    let cities = []
    /* this.cities.forEach( city => {
      cities.push(<div>city: {city.cityname}</div>)
    }) */
    return (
      <div>
        <h1>cities list:</h1>
        { cities }
      </div>
    )
  }
}

export default CitiesIndex

