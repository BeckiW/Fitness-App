import React from "react"
import Bubble from '../Bubbles'

class ClubList extends React.Component {

  constructor(props) {
      super(props)
  }

  onClickHandler = (evt) => {
    if (localStorage === "") {
      localStorage.setItem("Club id", this.props.name);
    } else {
      localStorage.removeItem("Club id")
      localStorage.setItem("Club id", this.props.name);
    }
    alert(this.props.name);
  }


  render() {
    return (
      <li className="club-list-item" onClick={this.onClickHandler}>
        <span className="club-list-name">{this.props.name}</span>
        <span className="club-list-city">{this.props.city}</span>
      </li>
    )
  }
}

export default ClubList
