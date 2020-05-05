const server = require('./api/server.js');

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));


/*
database schema is the structure of our data 
like what columns does it have and how they are related 
to other tables
and the constrains and data type of the columns 




migrations is stepwise on how our schema change (tables)
create a table and drop 
*/