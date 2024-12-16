import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {modeStatus: false}
  changeMode = () => {
    this.setState(prevState => ({modeStatus: !prevState.modeStatus}))
  }
  render() {
    const {modeStatus} = this.state
    let mode
    let containerClassName
    if (modeStatus === true) {
      mode = 'Dark Mode'
      containerClassName = 'lightmode'
    } else {
      mode = 'Light Mode'
      containerClassName = 'darkmode'
    }
    return (
      <div className="bg-container">
        <div className={containerClassName}>
          <h1>Click to change the mode</h1>
          <button className="custom-button" onClick={this.changeMode}>
            {mode}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
