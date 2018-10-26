import React from "react"

class ActivityItem extends React.Component {

  state = {
    selectedActivity: "",
    selectedDuration: "",
    selectedDate: ""
  }

  // handleClick = () => {
  //     this.props.handleClick(this.props.selectedActivity, this.props.selectedDuration, this.props.selectedDate)
  // }

  data = JSON.parse(localStorage.getItem("data"))

  handleClick = () => {
    this.setState({
      selectedActivity: this.props.activity,
      selectedDuration: this.props.duration,
      selectedDate: this.props.date
    }, () => this.updateLocalStorage()
  )}

  updateLocalStorage = () => {
    let updatedData = this.data.filter((obj) => {
      return obj.selectedDate !== this.state.selectedDate;
    })
    localStorage.removeItem("data")
    console.log("updatedData: ", updatedData)
    localStorage.setItem("data", JSON.stringify(updatedData))
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
