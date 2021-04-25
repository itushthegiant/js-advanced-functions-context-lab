/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


 function createEmployeeRecord(array) {
    let testEmployee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return testEmployee;
}

function createEmployeeRecords(rowData) {
    return rowData.map(array => {
     return createEmployeeRecord(array)
    })
 }

 function createTimeInEvent(date) {
     const timeIn = date.split(" ");
     let newEvent = {
        type: 'TimeIn',
        hour: parseInt(timeIn[1]),
        date: timeIn[0]
    }
    this.timeInEvents.push(newEvent)
    return this;
 }


 function createTimeOutEvent(date) {
    const timeOut = date.split(" ");
    let newEvent = {
       type: 'TimeOut',
       hour: parseInt(timeOut[1]),
       date: timeOut[0]
   }
   this.timeOutEvents.push(newEvent)
   return this;
}


function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(day => date == day.date);
    const timeOut = this.timeOutEvents.find(day => date == day.date);
    const totalHours = (timeOut.hour - timeIn.hour) / 100;
    return totalHours;
}


function wagesEarnedOnDate(date) {
    const payRate = this.payPerHour;
    const hours = hoursWorkedOnDate.call(this, date);
    const total = hours * payRate;
    return total
}

function findEmployeeByFirstName(srcArray, firstName) {
    firstName = srcArray.find(fn => fn.firstName)
    return firstName;
}




let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}




function calculatePayroll(array) {
    return array.reduce((acc, val) => {
        return acc + allWagesFor.apply(val)
    }, 0)
}