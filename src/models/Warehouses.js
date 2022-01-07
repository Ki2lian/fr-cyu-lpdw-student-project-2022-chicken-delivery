module.exports = (sequelize, Sequelize) => {
    const Warehouse = sequelize.define('warehouse', {
        Name: {
            type: Sequelize.STRING
        },
        City: {
            type: Sequelize.STRING
        }
    })
    return Warehouse
}