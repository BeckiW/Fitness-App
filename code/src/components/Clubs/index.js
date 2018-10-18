import React from "react"



class Clubs extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        clubs: [],
        clubsToLoad: 20,
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

      handleClickLoadMore = () => {
        let clubsToLoad = this.state.clubsToLoad + 20
        this.setState({
            clubsToLoad
          })
     }

  queryChange = (evt) => {
   this.setState({query: evt.target.value})
 }



  render() {
    return (
      <div>

      <form>
      <input id="site-search" type="search" placeholder="Search for..." value={this.state.query} onChange={this.queryChange} />
      <input type="submit" value="Search" onClick={this.handleClick} />
           </form>

           <ul>{this.state.clubs.map((club) => {
             let result = club.name

             return <li>{result.slice(0, this.state.clubsToLoad)}</li>})}   </ul>



             <button onClick={this.handleClickLoadMore}> Load More Clubs </button>

      </div>
    )
  }
}

export default Clubs
