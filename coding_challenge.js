/*
*************************CODING TASK*********************************

1. Create variables to represent scores of exams for Matt and Simon and set values 80 and 45;
2. Create variable to set the lower limit for passing an exam and assign to it value as 51;
3. Write the condition in if statement, which will check if both students have passed an exam and log
   the result in console;
4. Use else if statement in order to check if one of the students has passed an exam and log the result
   in console;
5. Use else statement in order to display in console that both students have failed;
6. In case of passing the exam by one of the students, find out which one was that and display in console
   as an additional information the student name and his points
7. Test all the possible cases (a. both students passed; b. Matt passed and Simon failed; c. Simon passed and
  Matt failed; d. both students failed).
*/


console.log('=========== 1 ~ 6 ==========')
const scoreMatt = 80;
const scoreSimon = 45;
const passScore = 51;

if (scoreMatt >= passScore && scoreSimon >= passScore) {
  console.log("Both students have passed an exam.")
} else if (scoreMatt >= passScore || scoreSimon >= passScore) {
  console.log("One of the students has passed an exam.")
  if (scoreMatt >= passScore) {
    console.log("Matt")
    console.log(scoreMatt)
  } else {
    console.log("Simon")
    console.log(scoreSimon)
  }
} else {
  console.log("Both students have failed.")
}

// 7
function scoreTest(sm, ss, ps) {
  if (sm >= ps && ss >= ps) {
    console.log("Both students have passed an exam.")
  } else if (sm >= ps || ss >= ps) {
    console.log("One of the students has passed an exam.")
    if (sm >= ps) {
      console.log("Matt")
      console.log(sm)
    } else {
      console.log("Simon")
      console.log(ss)
    }
  } else {
    console.log("Both students have failed.")
  }
}

console.log('=========== 7 - a ==========')
scoreTest(90, 90, 50) // a
console.log('=========== 7 - b ==========')
scoreTest(90, 10, 50) // b
console.log('=========== 7 - c ==========')
scoreTest(10, 90, 50) // c
console.log('=========== 7 - d ==========')
scoreTest(10, 10, 50) // d
