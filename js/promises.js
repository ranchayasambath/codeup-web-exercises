"use strict";
// 1.enter user for github
// 2.call value to github url
// 3.request response from github token


function getCommit(user) {
    fetch(`https://api.github.com/users/${user}/events`, {headers: {'Authorization': GITHUB_TOKEN}})
        .then(response => response.json())
        .then(data =>
            console.log(data[0].created_at)
        )
}
getCommit("ranchayasambath");

const wait = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

wait(1000).then(() => console.log('runs after 1 second'))
wait(2000).then(() => console.log('runs after 2 second'))
wait(3000).then(() => console.log('runs after 3 second'))
wait(4000).then(() => console.log('runs after 4 second'))
wait(5000).then(() => console.log('runs after 5 second'))




