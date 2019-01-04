import * as React from 'react';
import { GetDate, GetDateString } from './DateUtilities';
import '../css/DateSelector.css';

export class DateSelector extends React.Component {

    constructor(props) {
        super(props);

        var filterText = new Date().toISOString().split('T')[0];
        this.state = { input: filterText, time: '', dte: '', hr: 0, min: 0 };

        this.handleChange = this.handleChange.bind(this);
        this.AddDay = this.AddDay.bind(this);
        this.SubtractDay = this.SubtractDay.bind(this);

    }
    handleChange(e) {
        var dte = new Date(e.target.value);
        this.setState({ input: e.target.value, time: this.state.time, hr: this.state.hr, min: this.state.min });
        let dteS = GetDateString(dte);
        this.GetDateValue(dteS);
      
    };
    AddDay() {

        var dte = GetDate(this.state.input);
        dte.setDate(dte.getDate() + 1);
        this.GetDateValue(GetDateString(dte));
        this.setState({ input: GetDateString(dte), time: this.state.time, isModalOpen: false, dte: GetDateString(dte) });
      
    };
    SubtractDay() {

        var dte = GetDate(this.state.input);
        dte.setDate(dte.getDate() - 1);
        this.GetDateValue(GetDateString(dte));
        this.setState({ input: GetDateString(dte), time: this.state.time, isModalOpen: false, dte: GetDateString(dte) });
    };
    GetDateValue(dte) {

        this.props.GetDateValue(dte);
    }
    render() {

        

        return (
                <div>
                <div className="container">

                    <div className="leftCol" ><img src={require('../images/arrow_17_512.png')} width='35px' onClick={this.SubtractDay} /></div>

                    <div className="middleCol"  >
                            <input style={{ fontSize: this.props.fontSize, width:'100%' }}
                                id='InputValue'
                                type="date"
                                value={this.state.input}
                                onChange={this.handleChange}
                            />
                     </div>
                   
                    <div className="rightCol"><img src={require('../images/arrow_17_512right.png')} width='35px' onClick={this.AddDay} /></div>

                </div>
                </div>
                
        );

    }
}
