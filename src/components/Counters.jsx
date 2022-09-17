import React, { Component } from 'react';
import Counter from "./Counter"

class Counters extends Component {
render(){
    return (
        <div>
            
            <button onClick={this.props.onReset}
            className="btn btn-primary btn-sm m-2"> Reset
            </button>
            
            { this.props.Counters.map(counter =>(
                <Counter key={counter.id}
                 onDelete={this.props.onDelete}
                 onIncrement={this.props.onIncrement} 
                 onDecrease={this.props.onDecrease}
                 Counter ={counter}
                 />
            ))
            }
             
        </div>
    )
}
 
}

export default Counters;