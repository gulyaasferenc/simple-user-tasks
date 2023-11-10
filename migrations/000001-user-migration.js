module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('users', {
        id: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        first_name: Sequelize.DataTypes.STRING,
        last_name: Sequelize.DataTypes.STRING,
        username: { type: Sequelize.DataTypes.STRING, allowNull: false },
        creation_date: Sequelize.DataTypes.DATE,
        updated_on: Sequelize.DataTypes.DATE,
      })
      .then(() => {
        queryInterface.addIndex('users', ['username'], {
          type: 'UNIQUE',
        })
      })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  },
}
