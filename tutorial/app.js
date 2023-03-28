// npm - global command, comes with node
// npm --version

// local dependency - user it in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifrest file (stores important info about project/package)
// mmanual approach (create package.json in th eroot , create properties etc)
// npm init (step by step , press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)