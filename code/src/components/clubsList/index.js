import React from "react"
import Clubs from "./Clubs"

class ClubList extends React.Component {


  render() {
    return (
      <div>

      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.city}</td>
      </tr>
            <clubsList data={this.state.clubs.slice(0, this.state.clubsToLoad)} />
      </div>
    )
  }
}

export default ClubsList
