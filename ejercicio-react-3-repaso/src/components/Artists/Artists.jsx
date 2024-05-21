import './Artists.css'

const Artists = (props) => {
    const printSongs = props.songs.map((song) => {
    return <div className="text-artists">
        <p>Title: {song.title}</p>
        <p>Artist: {song.artist}</p>
        <p>Album: {song.album}</p>
        <p>Duration: {song.duration}</p>
        <br/></div>
    })
return <div> {printSongs} </div>
}

export default Artists