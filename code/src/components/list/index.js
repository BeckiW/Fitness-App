import React from "react"
import Activity from "../activity"
import Calendar from "../calendar"
import 'react-day-picker/lib/style.css'

class List extends React.Component {

  constructor(){
    super();
    this.state = {
      data: ""
    }
  }

  setActivityList(params){
    this.setState({
      data: params
    })
  }

  render() {
    return(
      <div>
        <p>Parent</p>
        <Activity callback={this.setActivityList.bind(this)} />
        <Calendar data={this.state.data} />
      </div>
    )
  }

}

export default List
