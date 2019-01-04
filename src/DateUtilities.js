import * as React from 'react';


export function GetDateString(dte) {

    return dte.toISOString().split('T')[0];
}
export function GetDate(dte) {

    return new Date(dte);
}
