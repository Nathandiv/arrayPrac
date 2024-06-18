let Besket = [
['Banana','Apple','Orange','Mango','Cherries'],
['Nokia','Blackberry','Honor','Iphone'],
['HP','MacBook','MacBook','Dell']
];


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

const people = {
    fullnames:'Nathan',
    Age:30,
    isMale:true,
    talk: function(){
        console.log(`W3 are talking to ${this.fullnames}`)
    }
    
}



const people2 = {
    fullnames:'Nathan',
    Age:30,
    isMale:true,
    dancing: ()=> {
        console.log(`Hi ${people2.isMale} `)
    }
}

people.talk();
people2.dancing();







