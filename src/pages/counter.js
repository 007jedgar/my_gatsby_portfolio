import React, {Component} from "react"
import { Link } from "gatsby"


class Counter extends Component {
    constructor() {
        super() 

        this.state = {
            count: 0,
        }
    }

    add = () => {
        this.setState({ count: this.state.count + 1})
    }
    subtract = () => {
        this.setState({ count: this.state.count - 1})
    }

    render() {
        return (
            <div style={{color: 'blue'}}>
                <h1>Counter</h1>

                <h3>Current count {this.state.count}</h3>

                <button onClick={this.add}>Plus</button><br />
                <button onClick={this.subtract}>Minus</button>
                <br />
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default Counter
