const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your nickname? ', (name) => {
  rl.question('What is an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (song) => {
      rl.question('Which meal is your favourite? (eg: dinner, brunch, etc.) ', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (food) => {
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (power) => {
              console.log(`${name}, whose real name shall remain a mystery, loves to partake in ${activity}. While doing so, \n they love listening to ${song}. When it comes to food, their meal of choice will always be having ${food} \n for ${meal}. To unwind, they enjoy watching ${sport} with friends. They claim to be able to ${power}! Yowza!`)
              rl.close();
            }) }); }); }); }); 
        });})
  

