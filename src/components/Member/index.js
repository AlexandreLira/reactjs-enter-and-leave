import React, { Component } from 'react'
import './styles.css'
class Member extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: props.name,
            count: 0
        }

        this.enter = this.enter.bind(this)
        this.leave = this.leave.bind(this)
    }

    enter(){
        let name = "Alexandre"
        this.setState({name: name})
    }
    
    leave(){
        let name = ""
        let count = this.state.count
        this.setState({name: name, count: count+=1})
        if(count == 10) {
            this.setState({name: "Iron Man", count: 0})
        }
        
    }
    render(){
        return (
            <div className="Member">
                {
                    this.state.name !== "" ? 
                    <h2>Welcome {this.state.name}</h2> :
                    <h2></h2>
                }
                <div className="Member-button-container">
                    <button 
                        onClick={this.enter}
                        className="Member-button"
                    >Enter</button>
                    <button 
                        onClick={this.leave}
                        className="Member-button"
                    >Leave</button>
                </div>

            
            </div>
        );
    }
}

export default Member