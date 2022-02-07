"use strict";
// 1.
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// 2.
let threeOrMore = users.filter(language => language.languages.length >= 3);
console.log(threeOrMore);

// 3.
let userEmail = users.map(emails => emails.email);
console.log(userEmail);

// 4.
let userExp = users.map(exp => exp.yearsOfExperience);
console.log(userExp);

let totalExpAvg = userExp.reduce(function(previousValue, currentValue){
  return previousValue + currentValue / userExp.length;
})
console.log(`Average years of experience is ${totalExpAvg} years.`);

// 5.

// let longestEmail = userEmail.reduce(function(previousValue,currentValue){
//     if (previousValue < currentValue)
//         return  previousValue
//         else
//            return currentValue
//
// })
let longestEmail = userEmail.reduce((previousValue,currentValue) =>
    previousValue < currentValue ? previousValue :
        currentValue)
console.log(longestEmail);

// 6.
let nameMap = users.map(names => names.name);
console.log(nameMap)

let nameList = nameMap.reduce(function(previousValue, currentValue){
    return `${previousValue} , ${currentValue}`
})
console.log(nameList)

// Bonus: ?
// For...of loop = iterates through properties of an object.
let langList = users.reduce((uniqueSpecialties,languageList)=>
{
    for(let i  of (languageList.languages))
    {
        if(!uniqueSpecialties.includes(i))

        {
            uniqueSpecialties.push(i)
        }
  }
  return uniqueSpecialties
},[]).toString();
console.log(langList);

