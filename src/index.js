import React, {Component} from 'react'
import { DateSelector } from './DateSelector'


export default class extends Component {
  GetDateValue(dte) {
    this.setState({ dte: dte });
}
  render() {
    return <div>
      <h2>Welcome to React components</h2>
      <div>
        <DateSelector GetDateValue={this.GetDateValue.bind(this)}/>
      </div>
    </div>
  }
}
