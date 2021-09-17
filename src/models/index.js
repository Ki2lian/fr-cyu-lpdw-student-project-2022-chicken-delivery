//On met toutes les adresses des tables au meme endroit pour les apeller plus facilement 

module.exports = {
  warehouse: require('./warehouse'),
  driver: require('./driver'),
  truck: require('./truck'),
  logTemp: require('./logTemp'),
  transfer: require('./transfer')
}