/*
Learning TypeScript. Classes & Interfaces. Setters

You're given the ICuboid interface. 
Define a class Cube that implements ICuboid. Constructor function of Cube takes exactly one 
parameter length and stores the value of the argument into this.length. You will then define both a 
getter and a setter for the surfaceArea and volume of the cube.
*/

declare var ICuboid: {
  new (length: number): ICuboid;
};

interface ICuboid {
  /** Length of the cube */
  length: number;
  /** Surface area of the cube */
  surfaceArea: number;
  /** Volume of the cube */
  volume: number;
}

export class Cube implements ICuboid {
  constructor(public length: number) {}

  get surfaceArea(): number {
    return 6 * this.length ** 2;
  }

  set surfaceArea(area: number) {
    this.length = Math.sqrt(area / 6);
  }

  get volume(): number {
    return this.length ** 3;
  }

  set volume(vol: number) {
    this.length = Math.cbrt(vol);
  }
}
