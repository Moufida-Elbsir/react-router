import './App.css';
import React, { useState } from 'react'
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import { moviesData } from './data';
import Add from './components/Add';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Desc from './components/Desc';

const App = () => {
    const [movies, setMovies] = useState(moviesData)
    const [text, setText] = useState("")
    const [rating,setRating] = useState(1)
    const handleAdd=(newMovie)=>setMovies([...movies,newMovie])
    const handleText=(e)=>setText(e.target.value)
    const handleRating=(x)=>setRating(x)
  return (
    <div className='App'>
      <BrowserRouter>
       <Filter rating={rating} handleRating={handleRating} text={text} handleText={handleText}/>
      <Switch>
     
        <Route exact
        path="/"
        render={()=>
      <MovieList movies={movies.filter(el=>el.name.toLowerCase().includes(text.toLowerCase())&&el.rating>=rating)}/>
        } />
         <Route path="/movie/:id" render={(props)=><Desc movies={movies}{...props} />} />
      <Add add={handleAdd} />
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App

// export default class App extends Component {
//   state={
    
//     task:[{id: Math.random(),action:"Wake up",isDone:false,isVisible:true,}
//   ,{id:Math.random(),action:"Breakfast",isDone:false,isVisible:true,}]
// }
// handleAdd=(input)=>{const newAction={
//   id:Math.random(),action:input,isDone:false
// }
// this.setState({task: [...this.state.task, newAction]})
// }
// delete=(id)=>this.setState({task:this.state.task.filter(el=>el.id!==id)})
// complete=(id)=>this.setState({task:this.state.task.map(el=>el.id===id?{...el,isDone:!el.isDone}:el),})
//   render() {
//     return (
//       <div className='App'>
//         <h1>To Do List</h1>
//       <Form add={this.handleAdd}/>
//         <br />
//         <br />
        
//         <div>
      
//           {this.state.task.map(el=><div>
//             <h2 style={el.isDone?{textDecoration:"line-through"}:null}>{el.action}</h2>
//           <button onClick={()=>this.complete(el.id)}>Complete</button>
//           <button onClick={()=>this.delete(el.id)}>Delete</button>
//           </div>)}
         
//         </div>
   
//       </div>
//     )
//   }
// }

