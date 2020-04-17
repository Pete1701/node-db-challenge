
exports.up = function(knex) {
  return (
      knex.schema
        .createTable("projects", tbl => {
            tbl.increments("id", 255).primary();
            tbl.string("name", 255).notNullable().unique();
            tbl.text("description");
            tbl.boolean("completed").notNullable().defaultTo(0);
        })

        .createTable("resources", tbl => {
            tbl.increments("id", 255).primary();
            tbl.string("name", 255).notNullable().unique();
            tbl.text("description");            
        })

        .createTable("tasks", tbl => {
            tbl.increments("id", 255).primary();            
            tbl.text("description").notNullable();
            tbl.text("notes").notNullable();
            tbl.boolean("completed").notNullable().defaultTo(0);
            tbl
              .string("project_id", 255)
              .notNullable()
              .references("id")
              .inTable("projects")
              .onDelete("RESTRICT") // 'CASCADE', 'RESTRICT', 'SET NULL', 'DO NOTHING'
              .onUpdate("CASCADE");
        })
  )
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");  
};
