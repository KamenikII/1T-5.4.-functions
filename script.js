// _____FUNCTIONS_____
// task 1
function isAdult(age) {
    if (age => 14) return true
    else return false
}

// task 2
function season(month) {
    if (month >= 3 && month <=5) return "Spring"
    else if (month >= 6 && month <=8) return "Summer"
    else if (month >= 9 && month <=11) return "Autumn"
    else return "Winter"
}

// task 3
function symbolCounter(word, symb) {
    let s = 0
    for (let i=0; i<word.length; i++) {
        if (word[i] === symb) s++
    }
    return s
}

// task 4
function filter(a) {
    let obj = {
        evenNums: [],
        oddNums: []
    }
    if (a===1) return obj.oddNums.push(1)
    else {
        for (let i=1; i<=a; i++) {
            if (i % 2 === 0) obj.evenNums.push(i)
            else obj.oddNums.push(i)
        }
        return obj
    }
}

// task 5
function summ(a) {
    if (a===1) return 1
    return (a + summ(a-1))
}

// _____TESTS_____
// task 1
console.log(isAdult(10))
console.log(isAdult(16))
console.log()

// task 2
console.log(season(1))
console.log(season(3))
console.log(season(6))
console.log(season(9))
console.log()

// task 3
console.log(symbolCounter("Hello", "l"))
console.log(symbolCounter("JavaScript", "J"))
console.log()

// task 4
console.log(filter(1))
console.log(filter(10))
console.log()

// task 5
console.log(summ(10))
console.log(summ(13))