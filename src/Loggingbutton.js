import React from "react";

class Loggingbutton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggle: true};
    }

    //1. one way is using class fields syntax
    // handleClick = () => {
    //     console.log('this is:',this);
    // }

    // render() {
    //     return (
    //         <button onClick={this.handleClick}>
    //             Click me 
    //         </button>
    //     );
    // }

    //2. Second way is use arrow function in the callback

    handleClick(e) {
         console.log('this is:',this);
         console.log(e);
         this.setState({isToggle: !this.state.isToggle});
    }

    render() {
        return (
            <button onClick={ (e) => this.handleClick(80, e) }>
              {this.state.isToggle ? 'ON' : 'OFF'}
            </button>
        );
    }

    // Passing arguments to event handlers
    // <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
}

export default Loggingbutton;