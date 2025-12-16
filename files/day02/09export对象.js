const a = 10
exports.a = a
// module.exports = {a: a + 10}
console.log(exports)
console.log(module.exports)
console.log(exports === module.exports) 