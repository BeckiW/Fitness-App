import React from "react"

class ActivityItem extends React.Component {

  state = {
    selectedActivity: "",
    selectedDuration: "",
    selectedDate: ""
  }

  // handleClick = () => {
  //   this.setState({
  //     selectedActivity: this.props.activity,
  //     selectedDuration: this.props.duration,
  //     selectedDate: this.props.date
  //   }, () => {
  //     this.props.handleClick(this.state.selectedActivity, this.state.selectedDuration, this.state.selectedDate)
  //   })
  // }

  data = JSON.parse(localStorage.getItem("data"))

  handleClick = () => {
    let index = this.data.indexOf(this.state)
    localStorage.removeItem(this.state)
  }


  render() {
    return (
      <div>
      <tr onClick={this.handleClick}>
        <td>{this.props.activity}</td>
        <td>{this.props.duration}</td>
        <td>{this.props.date}</td>
      </tr>
      </div>
    )
  }
}

export default ActivityItem
