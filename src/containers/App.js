import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import uuid from 'uuid';
import style from './App.css';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
}

export default App;

removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: remainder});
}

render() {
    return (
        <div className={style.TodoApp}>
            Tutaj pojawią się komponenty naszej aplikacji.
        </div>
    );
}