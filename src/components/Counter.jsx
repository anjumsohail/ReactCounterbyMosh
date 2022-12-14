import React, { Component } from 'react';

class Counter extends Component {
//    state= {value:0}
getBadgeClasses(){
let classes="badge m-2 badge-";
classes +=this.props.Counter.value===0?"warning":"primary"
return classes;
}

formatCount(){ 
    const{value}=this.props.Counter;
    return value ===0?"Zero":value;
}
    render() { 
        return(
        <div>
    <span className={this.getBadgeClasses()}> {this.formatCount() }</span>
    <button 
    onClick={() => this.props.onIncrement(this.props.Counter)}
    className="btn btn-success btn-sm">
        Increament
        </button>

        <button 
    onClick={() => this.props.onDecrease(this.props.Counter)}
    className="btn btn-info btn-sm">
        Decrease
        </button>

        <button 
        onClick={() => this.props.onDelete(this.props.Counter.id)}
        className="btn btn-danger btn-sm m-2"
        >Delete </button>
        
</div> 

        );
    }
}
 
export default Counter;