exports.up = async function(knex) {
  // table instead of createTable because the table is already existed
  await knex.schema.table("fruits", tbl => {
    tbl.text("color");
  });
};

exports.down = async function(knex) {
  await knex.schema.table("fruits", tbl => {
    tbl.dropColumn("color");
  });
};
