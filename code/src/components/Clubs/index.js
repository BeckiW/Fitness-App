import React from "react"

let URL = `https://api.www.svenskaspel.se/player/sponsorship/autocomplete?search=${query}&numResponses={integer}`
let query =  ""

class Clubs extends React.Component {



  constructor(props) {
      super(props)
      this.state = {
        clubs: ""
      }
    }

    onFilterTextChange = (evt) => {
    this.query = evt.target.value;
    this.forceUpdate();
  }


    componentDidMount() {
      fetch(URL).then((response) => {
        return response.json()
      }).then((json) => {
        this.setState({
          clubs: json.data
        })
      })
    }






  render() {


    return (
      <div>

      <input type="text" onChange={onFilterTextChange} />



      </div>
    )
  }

}

export default Clubs
