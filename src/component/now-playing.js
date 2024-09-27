import transformer from '../img/transformer.jpg'
import deadpool from '../img/deadpool.jpg'
function Nowplay () {
    return (
        <div>
            <h1>Now PLaying</h1>
            <img src={transformer} style={img}></img>
            <h1>Transformer: One</h1>
            <p>Transformer one is a perquel about how optimus prime and megatron used to be</p>
            <img src={deadpool} style={img}></img>
            <p>Deadpool 3 is a sequel to the last movie deadpool 2, now deadpool have to cooperate with wolverine</p>
        </div>
    )
}

export default Nowplay

const img = {
    width: '200px',
    height: '200px'
}