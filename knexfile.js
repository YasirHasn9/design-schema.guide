// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data.produce.db3"
    },
    // this telling sqlite that if we dont provide the value of null
    // use this as default 
    useNullAsDefault: true
  }
};
