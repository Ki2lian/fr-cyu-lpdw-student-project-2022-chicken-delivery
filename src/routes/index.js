module.exports = ( app ) => {
    require('./router_warehouse')(app)
    require('./router_driver')(app)
    require('./router_truck')(app)
    require('./router_logtemp')(app)
    require('./router_transfer')(app)
}
