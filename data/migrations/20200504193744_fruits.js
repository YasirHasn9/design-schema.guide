exports.up = async function(knex) {
  // in the up function is where we define and draw our tables
  // with the needed columns
  await knex.schema.createTable("fruits", tbl => {
    tbl.increments("id");
    tbl
      .text("name", 128)
      .notNullable()
      .unique();
    tbl.decimal("aveWeightOz").notNullable();
    tbl.boolean("delicious");
  });
};

exports.down = async function(knex) {
  //   in the down function contains a commend that
  // will roll the changes that we make in the up function
  // if we want to undo them
  await knex.schema.dropTableIfExists("fruits");
};
