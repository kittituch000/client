let ex = require('./exchange.js');
ex.euro();

console.log('\n--------------------- EXCHANGE MONEY ---------------------'+'\n\nTHBaht --> EURO\n\nTHB = ')

let stdin = process.openStdin()
stdin.addListener("data", (d) => {
        console.log('Your Exchange is '+ d/eur + ' EUR.\n\n----------------------------------------------------------' )
        stdin.end()
});


