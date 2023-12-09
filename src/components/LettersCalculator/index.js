// Write your code here.

import {component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}
  onChange = e => {
    this.setState({count: e.target.value})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="card">
          <div className="text-container">
            <h1>Calculate the Letters you Enter</h1>
            <div>
              <label htmlFor="Letter">Enter the phrase</label>
              <br />
              <input
                type="text"
                placeholder="Enter the phrase"
                id="letter"
                className="typing"
                onChange={this.onChange}
              />
            </div>
            <br />
            <p type="button" className="button">
              No.of letters: {count.Length}
            </p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alr="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
