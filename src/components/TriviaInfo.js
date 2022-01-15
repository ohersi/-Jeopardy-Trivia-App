import React, { Component } from 'react';

class Triviainfo extends Component {
    render() {
        // console.log('TriviaInfo', this.props)
        return (
            <div>
              <div className='q-p-a'>
                <h2>Category: {this.props.triviaInfo.category?.title}</h2>
                <h2>Points: <span style={{color:'#E8A810'}}>{this.props.triviaInfo.value}</span></h2>
                <h2>Answer: {this.props.triviaInfo.question}</h2>
            </div>  
            </div>
        );
    }
}

export default Triviainfo;
