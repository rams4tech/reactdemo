import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(items => this.setState({ items }));
    }

    render() {
        return ( <
            div >
            <
            h3 > TODO List < /h3> <
            TodoList items = { this.state.items }
            /> <
            form onSubmit = { this.handleSubmit } >
            <
            input onChange = { this.handleChange }
            value = { this.state.text }
            /> <
            button >
            Add# { this.state.items.length + 1 } <
            /button> <
            /form> <
            /div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            id: Date.now(),
            title: this.state.text,
        }
        this.setState(prev => ({
            items: prev.items.concat(newItem),
            text: ''
        }));
    }
}

class TodoList extends React.Component {
    render() {
        return ( <
            ul > {
                this.props.items.map(item => ( <
                    li key = { item.id } > { item.title } < /li>
                ))
            } <
            /ul>
        )
    }
}


// ========================================

ReactDOM.render( <
    Todo / > ,
    document.getElementById('root')
);