import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {tossResult: 0, heads: 0, tails: 0, total: 0}

  onChange = () => {
    const {heads, tails, total} = this.state
    const values = Math.floor(Math.random() * 2)

    if (values === 0) {
      const newHeads = heads + 1
      const totalCount = total + 1
      this.setState({tossResult: values, heads: newHeads, total: totalCount})
    } else {
      const newTails = tails + 1
      const totalCount = total + 1
      this.setState({tossResult: values, tails: newTails, total: totalCount})
    }
  }

  render() {
    const {tossResult, heads, tails, total} = this.state
    return (
      <div className="yellow">
        <div className="white">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          {tossResult ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              className="sizing"
              alt="toss result"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              className="sizing"
              alt="toss result"
            />
          )}
          <button onClick={this.onChange} className="but">
            Toss Coin
          </button>
          <div className="row">
            <p>Total:{total}</p>
            <p>Heads:{heads}</p>
            <p>Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
