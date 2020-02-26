import React from 'react';
import Task from './components/Task';
import TaskInput from './components/TaskInput';


class App extends React.Component {
  state = {
    tasks: [
      {id: 0 , title:'Create react todo app', done: false},
      {id: 1 , title:'Use Classes', done: true},
      {id: 2 , title:'Add buttons', done: false}
    ]
  };

  addTask = task => {
    this.setState ( state => {
      let {tasks} = state;
      tasks.push({
        id: tasks.length !== 0 ? task.lenght : 0,
        title: task,
        done: false
      });
      return tasks;
    });
  }

  doneTask = id => {
    const index = this.state.tasks.map( task => task.id).indexOf(id);
    this.setState( state => {
      let {tasks} = state;
      tasks[index].done = true;
      return tasks;
    })
  }

  deleteTask = id => {
    const index = this.state.tasks.map( task => task.id).indexOf(id);
    this.setState( state => {
      let {tasks} = state;
      delete tasks[index];
      return tasks;
    })
  }

  lineDecor = () => {    
    if(!this.task.done){
      TaskInput.style['text-decoration']='underline'
    }
  }
    render() {
      const {tasks} = this.state;      
    
      return (      
        <div className='App'>
          <h1 className='top'>Tasks for the Day:</h1>
          <TaskInput addTask={this.addTask} />
          {tasks.map( task => 
            <Task 
              doneTask={ () => this.doneTask(task.id)} 
              deleteTask={ () => this.deleteTask(task.id)} 
              task={task} 
              key={task.id}
            />
            )}            
        </div>  
    );      
    }
  }

export default App;
