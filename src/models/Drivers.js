module.exports = (sequelize, Sequelize) => {
    const Driver = sequelize.define('driver', {
        Lastname: {
            type: Sequelize.STRING
        },
        Firstname: {
            type: Sequelize.STRING
        }
    })
    return Driver
}