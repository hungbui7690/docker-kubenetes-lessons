/*
  Unnecessary Rebuilds
  - we change something in the index.js > src code

  - build again 
    - COPY ./ ./
      RUN npm install
      > copy then run npm install 
      > run npm install every time we copy new file 
        > we cannot enjoy the benefits of caching

//////////////////////////////////////////////////

  Minimizing Cache Busting and Rebuilds    
  - we will copy 2 times: 
    + copy package.json to run the npm install 
    + then copy the rest

  - COPY ./package.json ./
    RUN npm install
    COPY ./ ./

  - build
  - change index.js then rebuild
    > now, most of the tasks can use caching
    > just COPY ./ ./ not use caching

*/

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello Word')
})

app.listen(5000, () => {
  console.log('Listening on port 5000...')
})
