import React from 'react'

class TaskInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
    }

    addTask = () => {
        const {input} = this.state;
        if(input) {
            this.props.addTask(input);
            this.setState({input:''})
        }
    }

    inputChange = event => {
        this.setState({input: event.target.value})
    }

    handleEnter = event => {
        if(event.key === 'Enter') {
            this.addTask()
        }
    }

    render() {
        const {input} = this.state;  
    

        return (
            <div className='task-input'>
                <input 
                    type="text"
                    className={`task-control`}
                    placeholder="Введите название заметки"
                    onChange={this.inputChange}
                    onKeyPress={this.handleEnter}
                    value={input}>                    
                </input>
                <button onClick={this.addTask}>Add</button>
            </div>
        )
    }
}

export default TaskInput;