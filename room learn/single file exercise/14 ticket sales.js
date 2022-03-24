
let arrayCityList, arrayCityToList, counter, choiceCity;
let ticketSales = {
    tehran: ['azadi', 'terminal jnob', 'karaj', 'pardis'],
    kermanshah: ['kermanshah', 'eslam abad', 'gilangharb'],
    hamedan: ['hamedan', 'asad abad'],
    oromieh: ['oromieh', 'mako', 'sardasht', 'piranshahr'],
    kordestan: ['sanndej', 'bane'],
    khozestan: ['ahvaz', 'ramhormoz', 'khoram shahr']
};

console.log('ticket sales: ', ticketSales);
let listCity = prompt('enter a valid name:\n 1. tehran\n 2. kermanshah\n 3. hamedan\n 4. oromieh\n 5. kordestan\n 6. khozestan');

choiceCity = ticketSales[listCity];
console.log('list city: \n', choiceCity.join('\n'));
