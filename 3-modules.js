//CommonJS, every file is modu;e (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
require('./7-mind-grenade')


sayHi('Susan')
sayHi(names.firstName)
sayHi(names.lastName)