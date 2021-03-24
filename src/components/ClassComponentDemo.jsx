import React, { Component } from 'react';
import {FiThumbsUp, FiThumbsDown} from 'react-icons/fi';

    export default class ClassComponentDemo extends Component {
        constructor(props) {
            super(props);
            this.state = { incrementCount: 0, decrementCount: 0 };
        }
        incrementCount = () => {
            console.group("increment called");
            this.setState(
                { incrementCount: this.state.incrementCount + 1 }
            );
        };
        decrementCount = () => {
            this.setState(
                { decrementCount: this.state.decrementCount - 1 }
            );
        };

        render() {
            console.log("render called");
            return (
                <div className="main">
                    <div className="mainDiv">
                        <ClassComponentNotes />
                        <hr/>
                        <h3>Like it!!!</h3>
                            <button onClick={this.incrementCount}>
                                <FiThumbsUp />
                                {this.state.incrementCount}
                            </button>
                        <h1>Dislike it!!!</h1>
                        <h4>
                            <button onClick={this.decrementCount}>
                                <FiThumbsDown />
                                {this.state.decrementCount}
                            </button>
                        </h4>
                    </div>
                </div>
            );
        }
    }

        const ClassComponentNotes = function () {
              return (
                <div>
                  <h1>Class Components</h1>
            
                  <p>Class components are considered the "React way" of writing components.</p>
                  <dl>
                    <dt>ES6 JS Classes</dt>
                    <dd>Built on these, must understand them</dd>
                    <dt>must extend Component </dt>
                    <dd>Class components need to extend the React Component.</dd>
                    <dt>render()</dt>
                    <dd>Class components must always have a render method.</dd>
                    <dt>export</dt>
                    <dd>Only one class component exported per file.</dd>
                  </dl>
                </div>
              );
            };