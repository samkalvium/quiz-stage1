import React, { Component } from 'react'

export default class Mainpage extends Component {
    render() {
        return (
            <div className='main-body'>
                <h1>Question</h1>
                <h5>1 of 15</h5>
                <h3>Which is the only mammal that can jump?</h3>
                <div className='mcq'>
                    <div>
                        <button>Dog</button>
                        <button>Elephant</button>
                    </div>
                    <div>
                        <button>Goat</button>
                        <button>Lion</button>
                    </div>
                </div>
                <div className='options'>
                    <button className='prev'>Previous</button>
                    <button className='nxt'>Next</button>
                    <button className='quit'>Quit</button>
                </div>
            </div>
        )
    }
}
