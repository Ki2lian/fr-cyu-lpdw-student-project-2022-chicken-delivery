module.exports = (sequelize, Sequelize) => {
    const Truck = sequelize.define('truck', {
        Plate: {
            type: Sequelize.STRING
        },
        Capacity: {
            type: Sequelize.STRING
        }
    })
    return Truck
}