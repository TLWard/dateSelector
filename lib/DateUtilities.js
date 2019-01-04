'use strict';

exports.__esModule = true;
exports.GetDateString = GetDateString;
exports.GetDate = GetDate;

var _react = require('react');

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function GetDateString(dte) {

    return dte.toISOString().split('T')[0];
}
function GetDate(dte) {

    return new Date(dte);
}