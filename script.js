console.log('connecté !');
//https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/05_Day_Arrays/05_day_arrays.md
// Exercice III

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// III.1 Sort the array and find the min and max age

ages.sort((a,b) => a-b)
console.log(ages)

console.log(Math.min(...ages))

console.log(Math.max(...ages))

// III.2 Find the median age(one middle item or two middle items divided by two)
console.log(ages[ages.length/2])

// III.3 Find the average age(all items divided by number of items)

const total = ages.reduce((acc, curr) => {
  return acc + curr
},0)

const average = total/ages.length
console.log(total)
console.log(average)

// III.4 Find the range of the ages(max minus min)

const max = Math.max(...ages)

const min = Math.min(...ages)

const range = max - min
console.log(range)

// III.5 Compare the value of (min - average) and (max - average), use abs() method 1.

const minMinusAverage =Math.abs(min - average)

const maxMinusAverage = Math.abs(max - average)

maxMinusAverage > minMinusAverage ? console.log(maxMinusAverage, '>', minMinusAverage):console.log(minMinusAverage, '>', maxMinusAverage)

// III.6 Slice the first three countries from the countries array

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

console.log(countries.slice(0, 3))


// III.7 Divide the countries array into two equal arrays if it is even.

const countriesFirstPart = countries.slice(0, countries.length/2)

const countriesSecondPart = (countries.slice(countries.length/2))

console.log(countriesFirstPart)

console.log(countriesSecondPart)