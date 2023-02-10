// Moved "random" variable within the getRandEvent function so that each participant will be assigned a *different* random number 

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// declared days and made it a var variable so it can change within the code 

const getTrainingDays = raceEvent => { 
  var days;   
  if (raceEvent === 'Marathon') {
    days = 50;
  } else if (raceEvent === 'Triathlon') {
    days = 100;
  } else if (raceEvent === 'Pentathlon') {
    days = 200;
  }

  return days;
};


// Moved "name" outside of function to make it a global scope 

const logEvent = (runnerName, raceEvent) => {
  console.log(`${runnerName}'s event is: ${raceEvent}`);
};

const logTime = (runnerName, days) => {
  console.log(`${runnerName}'s time to train is: ${days} days`);
};

const raceEvent = getRandEvent();
const days = getTrainingDays (raceEvent);
const runnerName = 'Nala'

//changed "name" and "event" variable names because of deprecation 

logEvent(runnerName, raceEvent);
logTime(runnerName, days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
 
logEvent(name2, event2);
logTime(name2, days2);
