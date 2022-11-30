require("@babel/core").transform("code", {
  presets: ["@babel/preset-env"],
});

const fs = require('fs')
const csvtojson = require('csvtojson');

const csvReadWriteStream = (filePath, desPath) => {
  csvtojson().fromFile(filePath, 'utf8').then((jsonObj)=>{
    console.log(jsonObj);

    const logger = fs.createWriteStream(desPath + 'nodejs-hw1-ex2.txt')

    jsonObj.forEach(({Book, Author, Price}) => {
          logger.write(JSON.stringify({'book':Book,"author":Author,"price":Number(Price)}))
          logger.write('\r\n')
        }
      )
  })
}

// csvReadWriteStream()

export default csvReadWriteStream
