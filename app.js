//perfect example of getters and setters

class getThings {
 constructor(size){
  this.length = size;
 }
 get Length(){
   return this.length;
 }
 set Length(value){
   this.length = value;
   console.log('this value has been set');
 }
}

let thing = new getThings(9);
console.log(thing.Length);
thing.Length = 10;





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
//   //new method
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
