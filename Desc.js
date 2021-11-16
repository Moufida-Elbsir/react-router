import React from 'react'
import { Link} from 'react-router-dom'


const Desc = (props) => {
    let movie=props.movies.find(el=>el.id===Number(props.match.params.id))
    console.log(movie)
    return (
        <div>
        
               
            <p>{movie.description}</p>
            <iframe width="560" height="315" src={movie.src} title={movie.name} allowfullscreen>

            </iframe>
            <br />
            <Link to="/">
            <button className="button-31">Home Page</button>
        </Link>
          
        </div>
    )
}

export default Desc
