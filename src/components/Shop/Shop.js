import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import songData from '../../songs'
const BASE_URL = 'https://itunes.apple.com/search?term='

export default class Shop extends Component {
   constructor() {
      super()
      this.state = {
         songs: [],
         searchTerm: "michael+jackson"
      }
   }

   compenentDidMount() {
     axios.get(BASE_URL + this.state.searchTerm)
     .then(response =>  {
       this.setState({songs: response.data.results})
       console.log(response.data.results)
     })
     .catch(err => {
       console.log(err);
     })
   }

   render() {
    //  const songs = this.state.songs.map((song, index) => {
      const songs = songData.map((song, index) => {
      console.log("Mapping")
       return (
         <Link to={"/shop/" + song.trackId} key={song.trackId}>
           <div>
             <span><b>{song.artistName}</b>{song.trackName}</span>
           </div>
         </Link>
       )
     })
      return (
         <div>
           <h2>Shop</h2>
           {songs}
         </div>
      )
   }

}
