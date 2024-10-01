import { Link } from "react-router-dom"
function Navigation () {
    return (
        <nav style={navstyle}>
            <h2>MovieCatalogue</h2>
            <ul style={ulstyle}>
                <li><Link to="/" style={listyle}>Home</Link></li>
                <li><Link to="/now-playing" style={listyle}>Now Playing</Link></li>
                <li><Link to="/upcoming" style={listyle}>Upcoming</Link></li>
                <li><Link to="/search" style={listyle}>Search Movie</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation

const navstyle = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "Center",
    margin: "2rem"
}

const ulstyle = {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    gap: "5rem",
    fontSize: "1.3rem"
}

const listyle = {
    textDecoration: "none"
}
