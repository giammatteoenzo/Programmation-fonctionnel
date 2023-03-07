class Planet {
    constructor(name, radius, mass, distanceFromSun, numberOfMoons, atmosphereComposition) {
      this.name = name;
      this.radius = radius;
      this.mass = mass;
      this.distanceFromSun = distanceFromSun;
      this.numberOfMoons = numberOfMoons;
      this.atmosphereComposition = atmosphereComposition;
    }
}

module.exports = Planet;