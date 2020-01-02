import React from 'react';


const ProcessArr = ({arr}) => {
    // Processes an array of strings or HTML objects
    return arr.map((txtOrHTML, index) => <span key={index}>{txtOrHTML}</span>)
};

function parseISOString(s) {
    // Parse yyyy-mm-dd string into a Date object that doesn't convert to UTC.
    let b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], 8));
}

function dateDiff (start, end) {
    // Calculate the difference between two dates in years and months
    let startDate = new Date(start);
    let endDate;
    if (end === 'present') {
        endDate = new Date();
    } else {
        endDate = new Date(end);
    }
    let diff = Math.floor(endDate.getTime() - startDate.getTime());
    let secs = Math.floor(diff / 1000);
    let mins = Math.floor(secs / 60);
    let hours = Math.floor(mins / 60);
    let days = Math.floor(hours / 24);
    let months = Math.floor(days / 30);
    let years = Math.floor(months / 12);
    months = Math.floor(months % 12);

    let message = "";

    if (years === 1) {
        message += years + " year ";
    } else if (years > 1) {
        message += years + " years ";
    }

    if (months === 1) {
        message += months + " month";
    } else if (months > 1) {
        message += months + " months";
    }

    if (message === '') {
        // Just show days if the period is shorter than a month
        if (days === 1) {
            message += days + " day";
        } else if (days > 1) {
            message += days + " days";
        }
    }

    return message
}

function dateConv (dtStr) {
    let dt;
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (dtStr === 'present') {
        return dtStr
    } else {
        dt = new parseISOString(dtStr);
        return '' + months[dt.getMonth()] + ' ' + dt.getFullYear()
    }


}

export {
    ProcessArr,
    parseISOString,
    dateDiff,
    dateConv
};
