import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {first: null, second: null, key1: null, key2: null}

  firstName = () => {
    const {first, second, key1, key2} = this.state
    if (first === null) {
      this.setState(prevState => ({first: 'Joe', key1: 'name-1'}))
    } else {
      this.setState(prevState => ({first: null, key1: null}))
    }
  }

  lastName = () => {
    const {first, second, key1, key2} = this.state
    if (second === null) {
      this.setState(prevState => ({second: 'Jonas', key2: 'name-1'}))
    } else {
      this.setState(prevState => ({second: null, key2: null}))
    }
  }

  render() {
    const {first, second, key1, key2} = this.state

    return (
      <div className="bg-container">
        <h1 className="header">Show/Hide</h1>
        <div className="btn-cont">
          <div className="btn-cont-2">
            <button className="button" type="button" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            <div>
              <p className={key1}>{first}</p>
            </div>
          </div>
          <div className="btn-cont-2">
            <button className="button" type="button" onClick={this.lastName}>
              Show/Hide Lastname
            </button>
            <div>
              <p className={key2}>{second}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
