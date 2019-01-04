function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import { GetDate, GetDateString } from './DateUtilities';
import '../css/DateSelector.css';

export var DateSelector = function (_React$Component) {
        _inherits(DateSelector, _React$Component);

        function DateSelector(props) {
                _classCallCheck(this, DateSelector);

                var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

                var filterText = new Date().toISOString().split('T')[0];
                _this.state = { input: filterText, time: '', dte: '', hr: 0, min: 0 };

                _this.handleChange = _this.handleChange.bind(_this);
                _this.AddDay = _this.AddDay.bind(_this);
                _this.SubtractDay = _this.SubtractDay.bind(_this);

                return _this;
        }

        DateSelector.prototype.componentDidUpdate = function componentDidUpdate() {

                //Update the parent components with the DateSelector's current date.

        };

        DateSelector.prototype.handleChange = function handleChange(e) {
                var dte = new Date(e.target.value);
                this.setState({ input: e.target.value, time: this.state.time, hr: this.state.hr, min: this.state.min });
                var dteS = GetDateString(dte);
                this.GetDateValue(dteS);
        };

        DateSelector.prototype.AddDay = function AddDay() {

                var dte = GetDate(this.state.input);
                dte.setDate(dte.getDate() + 1);
                this.GetDateValue(GetDateString(dte));
                this.setState({ input: GetDateString(dte), time: this.state.time, isModalOpen: false, dte: GetDateString(dte) });
        };

        DateSelector.prototype.SubtractDay = function SubtractDay() {

                var dte = GetDate(this.state.input);
                dte.setDate(dte.getDate() - 1);
                this.GetDateValue(GetDateString(dte));
                this.setState({ input: GetDateString(dte), time: this.state.time, isModalOpen: false, dte: GetDateString(dte) });
        };

        DateSelector.prototype.GetDateValue = function GetDateValue(dte) {

                this.props.GetDateValue(dte);
        };

        DateSelector.prototype.render = function render() {

                return React.createElement(
                        'div',
                        null,
                        React.createElement(
                                'div',
                                { className: 'container' },
                                React.createElement(
                                        'div',
                                        { className: 'leftCol' },
                                        React.createElement('img', { src: require('../images/arrow_17_512.png'), width: '35px', onClick: this.SubtractDay })
                                ),
                                React.createElement(
                                        'div',
                                        { className: 'middleCol' },
                                        React.createElement('input', { style: { fontSize: this.props.fontSize, width: '100%' },
                                                id: 'InputValue',
                                                type: 'date',
                                                value: this.state.input,
                                                onChange: this.handleChange
                                        })
                                ),
                                React.createElement(
                                        'div',
                                        { className: 'rightCol' },
                                        React.createElement('img', { src: require('../images/arrow_17_512right.png'), width: '35px', onClick: this.AddDay })
                                )
                        )
                );
        };

        return DateSelector;
}(React.Component);