module.exports = (sequelize, Sequelize) => {
    const Transfer = sequelize.define('transfer', {
        Collect: {
            type: Sequelize.BOOLEAN
        },
        NbChicken: {
            type: Sequelize.INTEGER
        }
    })
    return Transfer
}