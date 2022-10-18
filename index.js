import { reverseString, csvReadWriteStream } from './homeworks/task-1/ex-3';

// reverseString()

const CSV_FILE_PATH = './homeworks/task-1/ex-2/nodejs-hw1-ex1.csv'
const DES_PATH = './homeworks/task-1/ex-2/'

csvReadWriteStream(CSV_FILE_PATH, DES_PATH)
