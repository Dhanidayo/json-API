const fs = require ('fs');
const fetch = require('node-fetch')

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => {
    fs.writeFile('result/posts.json', `${JSON.stringify(data,null,2)}`, (err) => {
    if (err) throw err;
    console.log('File Successfully created!');
})
})
.catch(err => console.log(err))

