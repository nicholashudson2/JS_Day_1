const fizzBuzz = (counter, arr) => {

    if (counter === 0) { // Exit point - used when counter value reaches 0.
        return ''
    }
    let val = messageBuilder(counter, arr, 0, '') // If counter is not equal to 0, calls messageBuilder method to build return string.

    if (val === '') {
        return fizzBuzz(counter - 1, arr) // Recursive call for next counter value, if current value returns empty string.
    }
    // Recursive call for next counter value, adding characters to string returned by messageBuilder.
    return fizzBuzz(counter - 1, arr) + counter + ': ' + val + '\n'
}

const messageBuilder = (counter, arr, index, val) => {
    let i = index + 1
    let message = val

    // Checking that there are remaining return messages to evaluate.
    if (i > arr.length) {
        return message
    }
    // Checking divisibility of current "counter" value by index value & verifying string is not undefined.
    if (counter % i === 0 && arr[index] !== undefined) {
        message += arr[index]
    }

    return messageBuilder(counter, arr, i, message) // Recursive call for next array index value.
}


const printEmVals = [undefined, undefined, 'fizz', undefined, 'buzz', undefined, undefined, 'wut']
console.log(fizzBuzz(100, printEmVals))