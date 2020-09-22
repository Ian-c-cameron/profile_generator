const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let userInfo = {
  name: "What's your name? Nicknames are also acceptable :",
  activity: "What's an activity you like doing?",
  music: "What do you listen to while doing that?",
  mealOTheDay: "Which meal is your favourite (eg: dinner, brunch, etc.)",
  food: "What's your favourite thing to eat for that meal?",
  sport: "Which sport is your absolute favourite?",
  superpower: "What is your superpower? In a few words, tell us what you are amazing at!"
};


const askQuestions = (index, userInfo) => {
  const keys = Object.keys(userInfo);
  if (index === keys.length) {
    console.log(`${userInfo.name} loves to listen to ${userInfo.music} while ${userInfo.activity}, devouring ${userInfo.food} for ${userInfo.mealOTheDay}, prefers ${userInfo.sport} over any other sport, and is amazing at ${userInfo.superpower}.`);
    return rl.close();
  }
  rl.question(userInfo[keys[index]], (answer) => {
    userInfo[keys[index]] = answer;
    askQuestions(index + 1, userInfo);
  });
  
};
askQuestions(0, userInfo);
