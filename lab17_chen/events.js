const events = require(`events`)

const util = require('util') 

const teams = function(name){
    this.name=name
}

// eventEmitter will inherent any teams construct
util.inherits(teams, events.EventEmitter)

const Barcelona = new teams('Barcelona')
const Milan = new teams ('Milan')

//save each constructor in an array
const teamArray = [Barcelona, Milan]

//print each teams sing forEach loop
teamArray.forEach((t)=>
t.on('nation', function(n){
    console.log(`${t.name} is ${n} football club!`)
}))


Milan.emit('nation', 'italian')



/*const eventEmitter = new events.EventEmitter
eventEmitter.on('test', function(a){
    console.log(a)
})


eventEmitter.emit('test','EVENTS IN NODE JS')*/

