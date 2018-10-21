import React from "react"

class ClubList extends React.Component {

  constructor(props) {
      super(props)
  }

  onClickHandler = (evt) => {
    alert(this.props.id);
  }

  render() {
    return (
        <tr class="table">
        <td class="box"><a onClick={this.onClickHandler} style={{"cursor":"pointer"}}>{this.props.name}</a></td>
        <td>{this.props.city}</td>
        </tr>
    )
  }
}

export default ClubList
