module.exports = function reverse (n) {

    const arr = String(Math.abs(n)).split('').reverse();

    const res = Number(arr.join(''))
    return res
}
