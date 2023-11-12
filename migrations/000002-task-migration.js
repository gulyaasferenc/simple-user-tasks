module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('tasks', {
        id: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        name: Sequelize.DataTypes.STRING,
        description: Sequelize.DataTypes.TEXT,
        status: Sequelize.DataTypes.STRING,
        user_id: {
          type: Sequelize.DataTypes.STRING,
          references: {
            model: {
              tableName: 'users',
            },
            key: 'id',
          },
        },
        end_date: Sequelize.DataTypes.DATE,
        creation_date: Sequelize.DataTypes.DATE,
        updated_on: Sequelize.DataTypes.DATE,
      })
      .then(() => {
        queryInterface.addIndex('tasks', ['name'], {
          type: 'UNIQUE',
        })
      })
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('tasks')
  },
}
