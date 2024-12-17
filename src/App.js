
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(){
      super()


      this.state = {
        tasks : [
          {description : "Sport", satatus : false , id : Math.random()},
          {description : "Travel", status : false , id : Math.random()},
          {description : "study", status : false , id : Math.random()},

        ],

            textP : ""


      }
  }

 addTasks=()=> this.state.textP !== "" ? this.setState({tasks : [...this.state.tasks,{description : this.state.textP, status : false, id : Math.random()}],textP : ""}) : alert("no no")
deleteTask=(a)=> this.setState({tasks : this.state.tasks.filter((el,i,t)=>el.id !==a )})
editTask =(a)=> this.setState({tasks : this.state.tasks.map((el,i,t)=> el.id === a? {...el, status : !el.status}: el)})
render(){
  return(
    <div>
<h1>TO DO LIST</h1>
{
this.state.tasks.map((el,i,t)=>

  <div>
<h2 className= {el.status ? 'chatteb' : ""}>{el.description}</h2>

<button onClick={()=>this.editTask(el.id)}>Done</button>
<i class="fa-solid fa-trash" onClick={()=>this.deleteTask(el.id)}>

</i>
  </div>

)

}
<br/>
<br/>
<input value={this.state.textP} type='text' onChange={(e)=>this.setState({textP : e.target.value})}/>

    <button onClick={this.addTasks}>Ajouter</button>
    </div>
  )

}
}


export default App;
