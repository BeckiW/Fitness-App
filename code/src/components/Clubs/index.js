import React from "react"
import ClubList from "../clubList"
import { Link } from 'react-router-dom'

class Clubs extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        clubs: [],
        clubsToShow: 20,
        query: ""
      }
    }

  handleClick = (evt) => {
    //this.setState({query: evt.target.value})
    console.log(this.state.query)
    evt.preventDefault()

    let searchTerm = this.state.query

    if (searchTerm === "") {
      alert("That was an invalid search, try again")
    } else {
      const url = `https://api.www.svenskaspel.se/player/sponsorship/autocomplete?search=${searchTerm}&numResponses=100`
      fetch(url).then((response) => {
        return response.json()
      }).then((json) => {
        this.setState({
          clubs: json.data
        })
        console.log(json.data)
      })
    }}

  onChangeClubHandler = (evt) => {
    if (localStorage === "") {
      localStorage.setItem("Club id", this.props.name);
    } else {
      localStorage.removeItem("Club id")
      localStorage.setItem("Club id", this.props.name);
    }
  }

  handleClickLoadMore = () => {
    let newClubsToShow = this.state.clubsToShow + 20
    this.setState({
        clubsToShow: newClubsToShow
      })
  }

  queryChange = (evt) => {
   this.setState({query: evt.target.value})
  }

 club  = localStorage.getItem("Club id")

  render() {
    let slicedClubs = this.state.clubs.slice(0, this.state.clubsToShow)
    return (
      <div>
        <div className="navigation">
          <br />
          <div className="vertical-navigation">
            <Link to="/activity">Add an activity <i class="fas fa-arrow-right"></i></Link>
            <br />
            <Link to="/stats">View stats page <i class="fas fa-arrow-right"></i></Link>
            <br />
            <Link to="/badges">View your badges <i class="fas fa-arrow-right"></i></Link>
          </div>
        </div>
        <h2>{this.club}</h2>
        <div className="instructions">
          <div className="text">
            <h3>Get active and support your sports club!</h3>
            <h4>1. Choose your sports club</h4>
            <h4>2. Add your fitness activities</h4>
            <h4>3. Earn points for your team! <em>1 minute = 10 points</em></h4>
          </div>
          <img className="gif" src="./images/cycling.gif" alt="illustrated cycling animation" />
        </div>
        <h1>Choose your Club</h1>
        <form>
          <input id="site-search" type="search" placeholder="Search for..." value={this.state.query} onChange={this.queryChange} />
          <input type="submit" value="Search" onClick={this.handleClick} />
        </form>
         <ul className="club-list">
            {slicedClubs.map(club => (
               <ClubList
                 id={club.id}
                 name={club.name}
                 city={club.city} />
             ))}
         </ul>
        <button onClick={this.handleClickLoadMore}> Load More Clubs </button>
      </div>
    )
  }
}

export default Clubs
