function getSleepHours(day) {
  if (day === 'monday') {
    return 15;
  } else if (day === 'tuesday') {
    return 7;
  } else if (day === 'wednesday') {
    return 9;
  } else if (day === 'thursday') {
    return 8;
  } else if (day === 'friday') {
    return 7;
  } else if (day === 'saturday') {
    return 8;
  } else if (day === 'sunday') {
    return 9;
  }
};

function getActualSleepHours() {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
};

function getIdealSleepHours() {
  const idealHours = 8;
  return idealHours * 7;
};

function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if(actualSleepHours === idealSleepHours) {
    console.log('You are getting the perfect amount of sleep!');
  } else if(actualSleepHours < idealSleepHours) {
    console.log(`You should get some rest! You got ${(idealSleepHours - actualSleepHours)} hour(s) less sleep than you needed this week.`);
  } else if(actualSleepHours > idealSleepHours) {
    console.log(`You got ${(actualSleepHours - idealSleepHours)} more hours sleep than you needed.`);
  }
};

calculateSleepDebt();
