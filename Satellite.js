class Satellite {
    constructor(name, size, distanceFromPlanet) {
      this.name = name;
      this.size = size;
      this.distanceFromPlanet = distanceFromPlanet;
      this.planet = null;
    }
   
    setName(name) {
      this.name = name;
    }
   
    setSize(size) {
      this.size = size;
    }
   
    setDistanceFromPlanet(distanceFromPlanet) {
      this.distanceFromPlanet = distanceFromPlanet;
    }
   
    setPlanet(planet) {
      this.planet = planet;
    }
  }

  module.exports = Satellite;