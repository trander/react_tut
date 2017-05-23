import React from 'react';

class ContactEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            name: "",
            phone: ""
        };
    }

    handleClick(){
        if(!this.props.isSelected) {
            console.log("contact is not selected.");

            return;
        }
        this.props.onEdit(this.state.name, this.state.phone);
    }

    handleChange(e) {
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render() {
        return (
            <div>
                <p>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this)} />
                    <input type="text" name="phone" value={this.state.phone} onChange={this.handleClick.bind(this)} />
                    <button onClick={this.handleClick.bind(this)}> Edit </button>
                </p>
            </div>
        );
    }
}

export default ContactEditor;
