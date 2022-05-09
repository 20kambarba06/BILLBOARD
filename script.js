let a = +prompt("a");
let method = prompt(" + - * /");
let b = +prompt("b");

function canculator(elem_a, elem_method, elem_b) {
  switch (elem_method) {
    case "+":
      alert(elem_a + elem_b);
      break;
    case "-":
      alert(elem_a - elem_b);
      break;
    case "*":
      alert(elem_a * elem_b);
      break;
    case "/":
      alert(elem_a / elem_b);
      break;
    case "**":
      alert(elem_a ** elem_b);
      break;
  }
}
canculator(a, method, b);

// let name_one = 'Alex'
// let name_two = 'George'
// let name_three = 'Michael'

// function long_names(elem_one, elem_two, elem_three) {
//     let long_name = ''
//     let arr = []
//     let arr_all = []

//     arr_all.push(elem_one, elem_two, elem_three)

//     arr.push(elem_one.length, elem_two.length, elem_three.length)

//     let maxAnsw = Math.max(...arr)

//     arr_all.filter(item => {
//         if (maxAnsw === item.length) console.log(item);
//     })

//     // console.log(arr);
//     // console.log(elem_one.length);
//     // console.log(elem_three.length);

// }

// long_names(name_one, name_two, name_three)
 
function number_max(a,b){
  if(typeof(a) === 'number'){
      console.log(Math.min(a,b));
  } else if(Array.isArray(a)){
      console.log(Math.min(...a));
  } else if(typeof(a) === 'object'){
      let arr_num = Object.values(a)
      console.log(Math.min(...arr_num));
  }
}

number_max(1,2)
number_max([1,2])
number_max({a:1, b:2})