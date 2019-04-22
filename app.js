class Vehicle {
  constructor(make,model,year,color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color
  }
  getThisMake(){
    return this.make;
  }
  getThisModel(){
    return this.model;
  }
  getThisYear(){
    return this.year;
  }
  setThisColor(data){
    this.color = data;
  }
  getThisColor(){
    return this.color;
  }
}

class Truck extends Vehicle {
  constructor(make, model, year, color, tankSize, fuelType, topSpeed,mpg){
    super(make, model, year, color);
    this.tankSizeGallons = tankSize;
    this.currentFuelGallons = tankSize;
    this.fuelType = 'diesel';
    this.topSpeedMPH = topSpeed;
    this.mpg = mpg;
  }

  getCurrentFuelGallons(){
    return this.currentFuelGallons;
  }
  setTankSizeGallons(data){
    this.tankSizeGallons = data;
  }
  getTankSizeGallons(){
    return this.tankSizeGallons;
  }
  setFuelTyoe(data){
    this.fuelType  = data;
  }
  getFuelType(){
    return this.fuelType;
  }
  setTopSpeedMPH(data){
    this.topSpeedMPH = data;
  }
  getTopSpeedMPH(){
    return this.topSpeedMPH;
  }
  getMPG() {
    return this.mpg;
  }

  refuelGallons(gallons){

    let totalFuel = this.currentFuelGallons + gallons;

    if (totalFuel <= this.tankSizeGallons) {
    this.currentFuelGallons = this.currentFuelGallons + gallons;
    console.log(this.make + ' ' + this.model + ' was refueled with ' + gallons + ' gallons.');
    console.log(this.make + ' ' + this.model + ' now has a total of ' +   this.currentFuelGallons + ' gallons.');
    } else {
    console.log('not enough room in the tank');
    let freeSpace = this.tankSizeGallons - this.currentFuelGallons;
    console.log('you have enough room to add' + freeSpace + ' gallons.');
    }
  }

  drive(distance,speed){
    let totalDistance = this.currentFuelGallons - 5 * this.mpg;

    if(distance <= totalDistance){

      if(speed <= this.topSpeedMPH){
        this.currentFuelGallons = this.currentFuelGallons - (distance/ this.mpg);
        console.log('this truck drove for ' + distance + ' miles.');
        console.log('this truck has ' + this.currentFuelGallons + ' gallons left.');
        this.scenario();

      } else {
        console.log('this truck can not that fast. This trucks top speed is' + this.topSpeedMPH);
      }
    } else {
      console.log('the truck can not go that far. It can only go a total of  ' + totalDistance + 'miles before refueling');
    }

  }

  scenario() {
    let number = Math.random();

    let incidents = [
      'your engine blew',
      'your tire blew out',
      'a coyote crosses the path.',
      'you get a DUI',
      'a snowstorm approaches',
      'you crash into a light pole'
    ];

    if (number > .2){
      console.log('congrats nun happed');
    }else{
      let incidentNumber = Math.floor (Math.random() * 6);
      console.log(incidents[incidentNumber]);
    }

  }

}

// //variables defined
let semiTruck = new Truck('kenworth','T500',2019,'black',100,'diesel',75,10);
// semiTruck.drive(30,40)





semiTruck.drive(40,70)
semiTruck.refuelGallons(0);




























// // perfect example of a class without setters and getters
// class User {
//  constructor(name,email){
//   this.name = name;
//   this.email = email;
//  }
//  play(){
//   return 'e@mailll';
//  }
// }
//
// class Player extends User {
//  constructor(name,email,game){
//    super(name,email)
//    this.name = name;
//    this.email = email;
//    this.game = game;
//  }
// }
// let myUser = new User('frani','e@mail.com');
// let myPlayer = new Player('frani','e@mail.com','xbox');
//
// // myPlayer.gamePlatform
// console.log(myPlayer.game)
// console.log(myUser.name)
// console.log(myUser.play())




// perfect example of getters and setters

// class getThings {
//  constructor(size,length,width){
//   this.length = length;
//   this.width = 10;
//   this.size = size;
//
//  }
//  get Length(){
//    return this.length;
//  }
//  get Width(){
//    return this.width;
//  }
//  set Length(value){
//    this.length = value;
//    console.log('this value has been set ' + this.length);
//  }
// }
//
// let thing = new getThings(9,10,11);
// console.log(thing.Length);
// console.log(thing.Width);
// thing.Length = 12;





// console.log('hi')
//
// class Square {
//   constructor(width){
//    this.width = width;
//    this.height = width;
//    this.numOfTimesReqArea = 0;
//   }
//
//   get area(){
//    this.numOfTimesReqArea++
//    return this.width * this.height;
//   }
  //new method
//   get widthTimes2(){
//     return this.width * this.width;
//   }
//
//   get heightTimes3(){
//     return this.height * this.height * this.height;
//   }
//
//   get widthTimes3(){
//
//     return this.width * this.width * this.width;
//   }
// // we are creating a new setter, look at SETTER(A)
//   set area (area){
//    this.width = Math.sqrt(area);
//    this.height = this.width;
//   }
// //we are creating a new setter, look at SETTER(B)
//   set areaPractice2(area2){
//     this.width = area2;
//     this.height = this.width;
//   }
// }
//
// //creating new variable
// let square1 = new Square(4);
// //START****OF****GETTERS
// //logging method at line 9
// console.log(square1.area)
//
// //logging the new method at line 13
// console.log(square1.widthTimes2);
//
// //logging the new method at line 17
// console.log(square1.heightTimes3);
//
// //logging the new method at line 21
// console.log(square1.widthTimes3);
//
// //START***OF**SETTERS
// //take a look at lines 9,25. We are changing the area or "setting"
// //SETTER(A)*******************************
// square1.area = 25;
//
// //SETTER(B)**********************************
// square1.area2 = 20;
//
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.numOfTimesReqArea);
// console.log(square1);
