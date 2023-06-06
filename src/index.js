module.exports = function reverse (n) {
    let num = Math.abs(n);
    console.log(num);
    let arr = num.toString(10).split('').map(int => parseInt(int, 10));
    console.log(arr);
    arr.reverse();

    return  Number(arr.join(''));
}
