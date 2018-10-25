import React from 'react'
import moment from 'moment'
import Clubs from './Clubs'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ClubList from './ClubList'
import Activity from "./activity"
import Stats from "./stats"
import GamePage from "./GamePage"

const activityList = ["swim", "hike", "gym"];
const durationList = [0.5, 1, 2, 4, 8];


class App extends React.Component {

  state = {
    data: localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [],
    swimTime: [],
    hikeTime: [],
    gymTime: [],
    streamData: [],
    calendarData: [],
    pointsData: {}
  }

  componentDidMount() {
    this.updateData();
  }

  updateData() {
    this.addBubbleData()
    this.addStreamData()
    this.addCalendarData()
    this.addPointsData()
  }

  addEntry = (selectedEntry) => {
    const data = this.state.data
    if (this.state.data !== null) {
      data.push(selectedEntry)
      this.setState({
        data
      }, () => this.updateData())
      localStorage.setItem("data", JSON.stringify(data))
    }
  }


  // Setup arrays of activity times
  addBubbleData = () => {
    activityList.forEach((activityType) => {
      let totalTime = 0;
      if (this.state.data !== null) {
        this.state.data.forEach((activity) => {
          if (activity.selectedActivity === activityType) {
            totalTime += parseFloat(activity.selectedDuration);
          }
        })
        let stateEntry = activityType + "Time";
        this.setState({
          [stateEntry]: totalTime
        })
      }
    })
  }

  // setup stream data
  addStreamData = () => {
    let streamData = []
    if (this.state.data !== null) {
    for(let daysAgo = 30; daysAgo >= 0; --daysAgo) {
      let loopDate = moment().subtract('days', daysAgo)
      let entry = {
        "date": loopDate,
        "swim": 0,
        "hike": 0,
        "gym": 0
      }
      let dayActivities = this.state.data.filter((activity) => {
        let activityDate = moment(activity.selectedDate)
        return activityDate.isSame(loopDate, 'day');
      })
      dayActivities.forEach((activity) => {
        entry[activity.selectedActivity] += parseFloat(activity.selectedDuration);
      })
      streamData.push(entry)
    }
    this.setState({
      streamData
    })
    console.log('streamData ' + streamData);
    }
  }

  // setup calendardata
  addCalendarData = () => {
    let activitiesByDay = {}

    // Go over all activities and figure out how many hours of each activity occured each day
    this.state.data.forEach((activity) => {
      let day = moment(activity.selectedDate).format("YYYY-MM-DD");
      let activityType = activity.selectedActivity;

      if (activitiesByDay[day] === undefined) {
        activitiesByDay[day] = {
          "swim": 0,
          "hike": 0,
          "gym": 0,
          "total": 0
        }
      }

      activitiesByDay[day][activityType] += parseFloat(activity.selectedDuration);
      activitiesByDay[day]["total"] += parseFloat(activity.selectedDuration);
    })

    console.log(activitiesByDay)

    // Go over all of the dates and figure out the colour of that square
    let calendarData = []
    let days = Object.keys(activitiesByDay)

    days.forEach((day) => {
      let dayData = activitiesByDay[day]
      let value = 0;

      if ((dayData.swim > 0) && (dayData.swim == dayData.total)) {
        value = 100;
      } else if ((dayData.hike > 0) && (dayData.hike == dayData.total)) {
        value = 200;
      } else if ((dayData.gym > 0) && (dayData.gym == dayData.total)) {
        value = 300;
      } else {
        value = 400;
      }

      let entry = {
        day: day,
        value: value
      }

      calendarData.push(entry);
    })

    this.setState({
      calendarData
    })
  }


  addPointsData = () => {

    let activitiesByDay = {}

    // Go over all activities and figure out how many hours of each activity occured each day
    this.state.data.forEach((activity) => {
      let day = moment(activity.selectedDate).format("YYYY-MM-DD");
      let activityType = activity.selectedActivity;

      if (activitiesByDay[day] === undefined) {
        activitiesByDay[day] = {
          "swim": 0,
          "hike": 0,
          "gym": 0,
          "total": 0
        }
      }

      activitiesByDay[day][activityType] += parseFloat(activity.selectedDuration);
      activitiesByDay[day]["total"] += parseFloat(activity.selectedDuration);
    })

    console.log('hello ' + activitiesByDay)

    // Go over all of the dates and figure out the colour of that square
    let pointsData = {}
    let days = Object.keys(activitiesByDay)
    let duration = 0;
    let points = 0;

    days.forEach((day) => {
      let dayData = activitiesByDay[day]

      duration += dayData.total
      points = duration *10;

      let entry = {
        club: localStorage.getItem("Club id"),
        points: points
      }

      pointsData = entry;

    })

    this.setState({
      pointsData
    })
}

  render() {
    return (
        <Router>
        <div>
          <Switch>
              <Route exact path="/" component={Clubs} />
              <Route exact
                path="/activity"
                render={(props) => <Activity {...props}
                  activityList={activityList}
                  durationList={durationList}
                  calendarData={this.state.calendarData}
                  onClick={this.addEntry}

                  />}
              />
                <Route exact path="/stats"
                  render={(props) => <Stats {...props}
                    swimTime={this.state.swimTime}
                    hikeTime={this.state.hikeTime}
                    gymTime={this.state.gymTime}
                    streamData={this.state.streamData}
                    />}
                  />


                    />

              <Route path="/list" component={ClubList}/>
            </Switch>
          </div>
        </Router>
    )
  }
}

export default App
