//1. Phân tách mảng colors gồm ba phần tử và lấy ra các giá trị của các phần tử đó vào các biến firstColor, secondColor, và thirdColor.
let colorArr = ['Red', 'Green', 'Blue'];
let [firstColor, secondColor, thirdColor] = colorArr;
console.log('1. Phân tách mảng colors gồm ba phần tử và lấy ra các giá trị của các phần tử đó vào các biến firstColor, secondColor, và thirdColor.')
console.log(colorArr)
console.log('FirstColor: ' + firstColor);
console.log('SecondColor: ' + secondColor);
console.log('ThirdColor: ' + thirdColor);
//2. Phân tách đối tượng person có hai thuộc tính là name và age vào các biến tương ứng.
let personArr = [
    {
        name: 'A',
        age: 20
    }
]
let [{name, age}] = personArr;
console.log('2. Phân tách đối tượng person có hai thuộc tính là name và age vào các biến tương ứng.')
console.log(personArr)
console.log('name: ' + name);
console.log('age: ' + age);
//3. Tạo một mảng mới bằng cách nối hai mảng arr1 và arr2 vào một mảng mới sử dụng spread operator.
let arr1 = [155, 1154, 11556, 1523]
let arr2 = [255, 2254, 22556, 2523]
let arrTotal = [...arr1, ...arr2]
console.log('3. Tạo một mảng mới bằng cách nối hai mảng arr1 và arr2 vào một mảng mới sử dụng spread operator.')
console.log(arr1)
console.log(arr2)
console.log(arrTotal)
//4. Tạo một bản sao của mảng originalArray bằng cách sử dụng spread operator.
let originalArray = [3, 5, 6, 37, 145]
let copyOriginalArray = [...originalArray]
console.log('4. Tạo một bản sao của mảng originalArray bằng cách sử dụng spread operator')
console.log(copyOriginalArray)
//5. Thêm một phần tử số 4 vào cuối mảng arr bằng cách sử dụng spread operator
let newArr = [...arr1, 1, 2, 3, 4]
console.log('5. Thêm một phần tử số 4 vào cuối mảng arr bằng cách sử dụng spread operator.\n')
console.log(newArr)
//6. Cho hai đối tượng obj1 và obj2, viết một đoạn mã sử dụng Spread Operator để tạo một đối tượng mới chứa tất cả các thuộc tính từ cả hai đối tượng.
let obj1 = {school: 'Trần Hưng Đạo', class: 'C03'}
let obj2 = {name: 'A', age: 20}
let objTotal = {...obj1, ...obj2}
console.log('6. Cho hai đối tượng obj1 và obj2, viết một đoạn mã sử dụng Spread Operator để tạo một đối tượng mới chứa tất cả các thuộc tính từ cả hai đối tượng.')
console.log(obj1)
console.log(obj2)
console.log(objTotal)
//7. Cho một đối tượng person với các thuộc tính như name, age, và gender, viết một đoạn mã sử dụng Spread Operator để thêm một thuộc tính mới là country có giá trị là "Vietnam".
let person = {name: 'A', age: 20, gender: 'male'}
person = {...person, country: 'VietNam'}
console.log('7. Cho một đối tượng person với các thuộc tính như name, age, và gender, viết một đoạn mã sử dụng Spread Operator để thêm một thuộc tính mới là country có giá trị là "Vietnam"')
console.log(person)


//8. Sử dụng filter để lọc ra các số chẵn từ một mảng số nguyên.
let arr = [9, 8, 2, 3, 4, 78, 99, 5, 7, 11, 13, 23, 101, 99]
let even = arr.filter(e => e % 2 === 0)
console.log('8. Sử dụng filter để lọc ra các số chẵn từ một mảng số nguyên [' + arr + "]")
console.log(even)
//9. Sử dụng filter để lọc ra các chuỗi có độ dài lớn hơn một ngưỡng cho trước từ một mảng các chuỗi.
let arrString = ["Hello World!!!", "Hello C03", "Xin Chào C03", "Good Morning"]
let lengthStr = 9;
let newArrString = arrString.filter(e => e.length > lengthStr)
console.log('9. Sử dụng filter để lọc ra các chuỗi có độ dài lớn hơn một ngưỡng cho trước từ một mảng các chuỗi.')
console.log(arrString)
console.log(newArrString)
//10. Sử dụng filter để lọc ra các đối tượng từ một mảng các đối tượng dựa trên một điều kiện cho trước.
let objectStudent = [
    {name: 'A', age: 20, score: 9},
    {name: 'B', age: 18, score: 8},
    {name: 'C', age: 21, score: 7},
    {name: 'D', age: 17, score: 10},
    {name: 'E', age: 20, score: 5}
]
let newObjStudent = objectStudent.filter(stu => stu.age > 18 && stu.score > 6)
console.log('10. Sử dụng filter để lọc ra các đối tượng từ một mảng các đối tượng dựa trên một điều kiện cho trước.')
console.log(objectStudent)
console.log(newObjStudent)
//11. Sử dụng filter để lọc ra các số nguyên tố từ một mảng số nguyên
let primeNumber = n => {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
let prime = arr.filter(primeNumber)
console.log('11. Sử dụng filter để lọc ra các số nguyên tố từ một mảng số nguyên.')
console.log(arr)
console.log(prime)
//12. Sử dụng filter để lọc ra các chuỗi không chứa ký tự số từ một mảng các chuỗi.

let ktNumber = str => /\d/.test(str);
let filterString = arrString.filter(eStr => !ktNumber(eStr))
console.log('12. Sử dụng filter để lọc ra các chuỗi không chứa ký tự số từ một mảng các chuỗi.\n')
console.log(arrString)
console.log(filterString)
//13. Sử dụng reduce để tính tổng của các số trong một mảng số nguyên.

let sumArr = arr.reduce((sum, e) => sum + e, 0)
console.log('13. Sử dụng reduce để tính tổng của các số trong một mảng số nguyên.\n')
console.log(arr)
console.log(sumArr)
//14. Sử dụng reduce để tính tích của các số trong một mảng số nguyên.

let productArr = arr.reduce((product, e) => product * e, 1)
console.log('14. Sử dụng reduce để tính tích của các số trong một mảng số nguyên.\n')
console.log(arr)
console.log(productArr)

//15. Sử dụng reduce để tìm giá trị lớn nhất trong một mảng số nguyên

let maxArr = arr.reduce((prev, next) => prev > next ? prev : next)
console.log('15. Sử dụng reduce để tìm giá trị lớn nhất trong một mảng số nguyên.')
console.log(arr)
console.log(maxArr)
//16. Sử dụng reduce để đếm số lần xuất hiện của mỗi phần tử trong một mảng.
const array = ["apple", "banana", "apple", "orange", "banana", "apple"];

let count = array => {
    return array.reduce((accumulator, currentValue) => {
        if (accumulator[currentValue]) {
            accumulator[currentValue]++;
        } else {
            accumulator[currentValue] = 1;
        }
        return accumulator;
    }, {});
}

const result = count(array);
console.log('16. Sử dụng reduce để đếm số lần xuất hiện của mỗi phần tử trong một mảng')
console.log(array)
console.log(result);
//17. Sử dụng reduce để tính tổng của các giá trị số trong một mảng các đối tượng, với mỗi đối tượng có một thuộc tính số cần tính tổng.
let object = [
    {id: 1, productName: 'Bánh', price: 9000, quantity: 20},
    {id: 2, productName: 'Kẹo', price: 7000, quantity: 10},
]
let totalQuantity = object.reduce((accumulator, currentValue) => accumulator + currentValue.quantity,0)
console.log('17. Sử dụng reduce để tính tổng của các giá trị số trong một mảng các đối tượng, với mỗi đối tượng có một thuộc tính số cần tính tổng.')
console.log(object)
console.log('Total Quantity: '+totalQuantity)