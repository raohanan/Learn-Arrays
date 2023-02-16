// let students = [
//     {
//         "id": "1",
//         "name": "Rao Usama Bin Sohail",
//         "age": 23,
//         "section": "F",
//         "fatherName": "Rao Sohail Ahmed",
//         "Courses": [
//             {
                
//                 "name": "ITC",
//                 "teacher": "Nadeem Kafi",
//                 "Credits": 180,
//                 "total": 280,
//                 "obtained": 270
//             },
//             {
//                 "name": "Opps",
//                 "teacher": "Dr. Raoof",
//                 "Credits": 180,
//                 "total": 300,
//                 "obtained": 270
//             },
//             {
//                 "name": "CNN",
//                 "teacher": "Nadeem Kafi",
//                 "Credits": 120,
//                 "total": 200,
//                 "obtained": 170
//             }
//         ]
//     },
//     {
//         "id": "2",
//         "name": "Saad bin tariq",
//         "age": 23,
//         "section": "A",
//         "fatherName": "Rao Tariq Ahmed",
//         "Courses": [
//             {
//                 "name": "ICS",
//                 "teacher": "Nadeem Kafi",
//                 "Credits": 180,
//                 "total": 280,
//                 "obtained": 270
//             },
//             {
//                 "name": "Opps",
//                 "teacher": "Dr. Raoof",
//                 "Credits": 180,
//                 "total": 300,
//                 "obtained": 270
//             },
//             {
//                 "name": "CC",
//                 "teacher": "Mariam Feroz",
//                 "Credits": 120,
//                 "total": 200,
//                 "obtained": 170
//             }
//         ]
//     },
//     {
//         "id": "3",
//         "name": "Rao Huzaifa",
//         "age": 22,
//         "section": "F",
//         "fatherName": "Rao Sohail Ahmed",
//         "Courses": [
//             {
//                 "name": "CG",
//                 "teacher": "Nadeem sohail",
//                 "Credits": 190,
//                 "total": 290,
//                 "obtained": 250
//             },
//             {
//                 "name": "Opps",
//                 "teacher": "Dr. Raoof",
//                 "Credits": 180,
//                 "total": 300,
//                 "obtained": 270
//             },
//             {
//                 "name": "DCS",
//                 "teacher": "Saleem Anwar",
//                 "Credits": 120,
//                 "total": 200,
//                 "obtained": 160
//             }
//         ]
//     },
//     {
//         "id": "4",
//         "name": "Abdul Hanan",
//         "age": 23,
//         "section": "A",
//         "fatherName": "Sadaqat Ali",
//         "Courses": [
//             {
//                 "name": "CG",
//                 "teacher": "Humera Tariq",
//                 "Credits": 180,
//                 "total": 300,
//                 "obtained": 280
//             },
//             {
//                 "name": "Opps",
//                 "teacher": "Dr. Raoof",
//                 "Credits": 180,
//                 "total": 300,
//                 "obtained": 270
//             },
//             {
//                 "name": "ASE",
//                 "teacher": "Madiha Khuram",
//                 "Credits": 120,
//                 "total": 200,
//                 "obtained": 175
//             }
//         ]
//     },
//     {
//         "id": "5",
//         "name": "Rao Haris",
//         "age": 20,
//         "section": "D",
//         "fatherName": "Rao Jamshed",
//         "Courses": [
//             {
//                 "name": "CA",
//                 "teacher": "Taha bin niaz",
//                 "Credits": 180,
//                 "total": 280,
//                 "obtained": 240
//             },
//             {
//                 "name": "Opps",
//                 "teacher": "Dr. Raoof",
//                 "Credits": 180,
//                 "total": 300,
//                 "obtained": 270
//             },
//             {
//                 "name": "CMA",
//                 "teacher": "Sir Taha",
//                 "Credits": 120,
//                 "total": 200,
//                 "obtained": 170
//             }
//         ]
//     }
// ]

// let arr = [45,23,21,43,2,4,6,89,9]
// console.log(students[0].Courses[2].obtained);



//Array to string

// let b = students.toString()
// console.log(b)



//Array of Concat

// let newArray = students.concat(a)
// console.log(newArray)



// for each loop

// students.forEach((student)=>{
//     console.log(student.Courses)
// })



// for of loop

// for (let i of students){
//     console.log(i)
// }



// for in loop

// for (let i in students){
//     console.log(i)
// }



// Array.from

// let name = "harry"
// let arr = Array.from(name)
// console.log(arr)



//Array map method

//  let a = arr.map((value, index, array)=>{
//     console.log(value, index, array)
//    return value + index
//  })
// console.log(a)



//Array filter method

// let a = arr.filter((a)=>{
//    return a < 20
// })
// console.log(a)



//Array Reduce function

// const reduce_func = (h1,h2) => {
//     return h1 + h2
// }
// let a = arr.reduce (reduce_func)
// console.log(a)
