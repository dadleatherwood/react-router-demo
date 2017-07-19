import React, {Component} from 'react'
import songs from '../../songs'

export default class Product extends Component {
   constructor() {
      super()
      this.state = {
        song: {}
      }
   }
   componentDidMount() {
      const id = parseInt(this.props.match.params.id)
      const song = songs.find((element) => {
        return element.trackId === id
      })
      this.setState({song: song})
   }

   compenentWillReceiveProps(nextProps) {
     //Only on Updates
   }
   render() {
     const {song} = this.state
      return (
        <div>
         <h1>{song.trackName}</h1>
         <h1>{song.artistName}</h1>
         <img src={song.artworkUrl100} alt=""/>
         <p>{song.artistName}</p>
        </div>
      )
   }
}
