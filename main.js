// let Besket = [
//   ["Banana", "Apple", "Orange", "Mango", "Cherries"],
//   ["Nokia", "Blackberry", "Honor", "Iphone"],
//   ["HP", "MacBook", "MacBook", "Dell"],
// ];

// Besket  [3] = 0;
// console .log(Besket [2] [2]);

// length of the arrays of Besket
// let size = Besket.length;
// console.log (size);

// length of the 2nd Array only
// let size = (Besket[2]).length;
// console.log (size);

// how to put the whole arrays in a String
// console.log(Besket.toString());

// how to put and array in a String
// let phones = ['Nokia','Blackberry','Honor','Iphone']
// console.log(phones.toString());

// using pop method and deleting the last item
// let phones = ['Nokia','Blackberry','Honor','Iphone'];
// phones.pop ()
// console.log(phones)

// using pop method and deleting the last Arrays
// Besket.pop()
// console.log(Besket)

// const people = {
//     fullnames:'Nathan',
//     Age:30,
//     isMale:true,

// }

// console.log (people.fullnames)
// console.log (people.Age)

// using Objects
// const people = {
//     fullnames:'Nathan',
//     Age:30,
//     isMale:true,
//     talk: function(){
//         console.log(`W3 are talking to ${this.fullnames}`)
//     }

// }

// people.talk();

// the Objects and functions in a object
// const people = {
//     fullnames:'Nathan',
//     Age:30,
//     isMale:true,
//     talk: function(){
//         console.log(`W3 are talking to ${this.fullnames}`)
//     }

// }

// const people2 = {
//     fullnames:'Nathan',
//     Age:30,
//     isMale:true,
//     dancing: ()=> {
//         console.log(`Hi ${people2.isMale} `)
//     }
// }

// people.talk();
// people2.dancing();

// using more than one function in a object
// const people = {
//     fullnames:'Nathan',
//     Age:30,
//     isMale:true,
//     talk: function(){
//         console.log(`W3 are talking to ${this.fullnames}`)
//     },

//     me: function(){
//         console.log("object")
//     },

//     whatever: function(){
//         console.log("whatever")
//     }

// }

// people.talk();
// people.me();
// people.whatever();

// using arrays and objects
// const family = [
//   {
//     name: "Jack",
//     Age: 44,
//     gender: "male",
//   },
//   { name: "Jade", Age: 23, gender: "male" },
//   { name: "Jack", Age: 20, gender: "Female" },
//   { name: "Jack", Age: 44, gender: "male" },
// ];

// console.log(family[1])

// using arrays, objects and Push (add)
// const family = [
//     {
//       name: "Jack",
//       Age: 44,
//       gender: "male",
//     },
//     { name: "Jade", Age: 23, gender: "male" },
//     { name: "Jack", Age: 20, gender: "Female" },
//     { name: "Jack", Age: 44, gender: "male" },
//   ];

//   family.push({name: "Gugu", Age: 26, gender: "Female"})

//   console.log(family)

// using arrays, objects and splice (deleting)
// const family = [
//     {
//       name: "Jack",
//       Age: 44,
//       gender: "male",
//     },
//     { name: "Jade", Age: 23, gender: "male" },
//     { name: "Jack", Age: 20, gender: "Female" },
//     { name: "Jack", Age: 44, gender: "male" },
//   ];

//   family.splice(0,1)

//   console.log(family)

// const family = [
//   {
//     name: "Jack",
//     Age: 44,
//     gender: "male",
//     toString: function () {
//       return this.name;
//     },
   
//   },

//   {
//     name: "Jade",
//     Age: 23,
//     gender: "male",
//     toString: function () {
//       return this.name;
      
//     },

//   },
//   {
//     name: "tth",
//     Age: 20,
//     gender: "Female",
//     toString: function () {
//       return this.name;
//     }
  
//   },
//   {
//     name: "kkk",
//     Age: 44,
//     gender: "male",
//     toString: function () {
//       return this.name;
//     }
   
//   },
// ];

// const result = family.join(" and ");
// console.log(result);
// console.log(family[0])

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.join(" and " ))




// let arrays = [
//   [1,2,3,4],
//   ['A','B','C','D'],
//   ['1A','2B','3C','4D']
// ]


// console.log(arrays[2][1]);

let firstName = "Jade";
let lastName = "Smith";

let person = {
  firstName : "Sarah",
  lastName : "John",
  Age :18,
  fullName : function(){return person.firstName + "" + person.lastName}
}
console.log(person.fullName())

