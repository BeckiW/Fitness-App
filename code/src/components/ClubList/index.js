import React from "react"

class ClubList extends React.Component {

  render() {
    return (
      <li>
        {this.props.name}<br />
        {this.props.city}
      </li>
    )
  }
}

export default ClubList
