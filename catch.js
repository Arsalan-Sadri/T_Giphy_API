var ax = require("./data");

ax.then(data => {
        console.log(data.data);
    })
    .catch(err => {
        console.log(err);
    });