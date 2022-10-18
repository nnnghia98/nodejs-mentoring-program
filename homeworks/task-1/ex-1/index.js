const { stdin, stdout } = require('node:process')

const reverseString = () => {
  stdin.on("data", input => {
    input = input.toString().split("").reverse()
    input.shift()
    input = input.join("")
    stdout.write(input + "\n\n")
  })
}

// reverseString()

export default reverseString
