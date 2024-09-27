import jurassic from '../img/jurassic.jpg'
import doom from '../img/doom.jpeg'
function Upcoming () {
    return (
        <div>
            <h1>Upcoming Movies</h1>
            <img src={jurassic} style={img} alt='jurassic'></img>
            <h3>Jurassic World: Rebirth</h3>
            <p>This movie a sequel after the venet happend in jurassic World: Domination, 
                set to be release 2027</p>
            <img src={doom} style={img} alt='doomsday'></img>
            <h3>Avengers: Doomsday</h3>
            <p>This movie is a sequel after the big event happend in Avengers: 
                Endgame, This movie is set to be release in 2026</p>
        </div>
    )
}

export default Upcoming

const img = {
    width: '200px',
    height: '200px'
}