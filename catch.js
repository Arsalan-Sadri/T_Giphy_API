var ax = require("./data");

ax.then(res => {
        console.log(res.data.data);
    })
    .catch(err => {
        console.log(err);
    });