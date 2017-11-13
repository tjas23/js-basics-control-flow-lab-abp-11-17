// Write your code in this file!
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return "This one is on me!"
  } else if (distance > 2500) {
    return 'No can do.'
  } else if (distance > 2000) {
    return 'I will gladly take your thirty bucks.'
  }
}

 // function ternaryCheckCity(city) {
 //  if (city === "NYC") {
 //    return "Ok, sounds good."
 //    } else {
 //    return "No go."
 //  }
 // }
 // this works fine…

//  function ternaryCheckCity(city) {
//   city === "NYC" ? return "OK, sounds good." : return "No go."
// }
// this kills both functions

// Avi's solution:
// return (city === "NYC") ? "Ok, sounds good." : "No go."


function ternaryCheckCity(city) {
  const message = (city === "NYC" ? "Ok, sounds good." : "No go.") ;
  return message;
}
// this works!!!

// describe('switchOnCharmFromTip()', function () {
//   it('should return "Thank you so much." if the tip is generous', function () {
//     expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
//   });
//
//   it('should return "Thank you." if the tip is not as generous', function () {
//     expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
//   });
//
//   it('should return "Bye." if anything else', function () {
//     expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
//   });

function switchOnCharmFromTip(tip) {
  let answer;
  switch (tip) {
    case 'generous':
      answer = "Thank you so much." ;
      break;
    case 'not as generous':
      answer = "Thank you.";
      break;
    default:
      answer = "Bye.";
      break;
  }
  return answer;
}
