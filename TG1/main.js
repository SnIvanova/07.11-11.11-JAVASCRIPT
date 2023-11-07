
 let arr1 =[5,6,9]

 let arr2 =[...arr1]

 console.log(...arr1)
 console.log(...arr2)

 let obj1 = {
    name: 'mario',
    lastname: ' rossi',
    age : 20,
    citty : 'roma ',
 }

//let name= obj1.name, let lastname= obj1.lastname same as:
let{age}= obj1
console.log(age)


 let obj2 = Object.assign ({}, obj1	)
 let obj3 = {
    ...obj1,
    citty: ' ',
    age: 20,
 }


 function func1(...args) {
    console.log(args.length > 1)
 }
 func1(1,3,4,2)