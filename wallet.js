let userBalance = 100; // fake money for testing

function enterMatch(fee) {
  if (userBalance < fee) {
    alert("Not enough balance!");
    return false;
  }
  userBalance -= fee;
  alert(`Entered match! Remaining balance: $${userBalance}`);
  return true;
}

function winMatch(fee) {
  let prize = fee * 2 * 0.95; // winner gets 95% of pot
  userBalance += prize;
  alert(`You won! New balance: $${userBalance}`);
}
