function theBeatlesPlay(musicians, instruments) {
  var theBeatles = [];
  if (musicians.length == instruments.length) {
   for (var c = 0; c < musicians.length; c++) {
     theBeatles.push(musicians[c] + ' plays ' + instruments[c]);
   } 
  }
  else;
  return theBeatles;
}

function johnLennonFacts(facts) {
  let c = 0;
  while (c < facts.length) {
    facts[c] = facts[c] + '!!!';
  }
  return facts
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

console.log(johnLennonFacts(facts));
