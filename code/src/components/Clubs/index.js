import React from "react"
import ClubList from "../ClubList"



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



  render() {
    let slicedClubs = this.state.clubs.slice(0, this.state.clubsToShow)
    return (
      <div>

      <form>
      <input id="site-search" type="search" placeholder="Search for..." value={this.state.query} onChange={this.queryChange} />
      <input type="submit" value="Search" onClick={this.handleClick} />
           </form>


           <ul>
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
