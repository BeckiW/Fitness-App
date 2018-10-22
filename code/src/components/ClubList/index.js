import React from "react"
import Bubble from '../Bubbles'

class ClubList extends React.Component {

  constructor(props) {
      super(props)
  }

  onClickHandler = (evt) => {
    alert(this.props.id);
  }

  render() {
    return (
      <div>
        <tr class="table">
        <td class="box"><a onClick={this.onClickHandler} style={{"cursor":"pointer"}}>{this.props.name}</a></td>
        <td>{this.props.city}</td>
        </tr>

        </div>
    )
  }
}

export default ClubList
