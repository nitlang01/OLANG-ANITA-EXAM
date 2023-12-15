//Data 2
const data = [1,3,5,6,"hello", "guava", "hello world", 34,56 ,54]
  const numberArry = [453,656,67645,5476,798,5678,989,34545,6465768,79,76545364,75,8789,987,64765,]

//3(i)
//ASCENDING ORDER
function arrSort(arr) {
  arr.sort(function(a,b) {  return a - b});
}
console.log(arrSort(numberArry))
console.log(arrSort(data))

//DESCENDING ORDER
function arrSort(arr) {
  arr.sort(function(a,b) {  return b - a});
}
console.log(arrSort(numberArry))
console.log(arrSort(data))


//3(ii)
data.forEach(element => {element
    console.log (element)})

numberArry.forEach(element => {element
    console.log (element)})


//3(iii)
const total = numberArry.reduce((element, total) => element + total)
console.log(total)

//3(iv)
const arr = ["I", "am", "a", "fine", "girl"]
console.log(arr)