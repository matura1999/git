"use strict";

// curly function 柯里化
function add(x) {
  return function (y) {
    return x + y;
  };
}

var hehe = add(100)(2);
console.log(hehe); // 闭包

function fn() {
  var xx = 1;
  return function () {
    xx += 1;
    console.log(xx); //在这个函数里面xx被用到了，所以它并没有被回收掉，
    //所以这个内部函数和xx这个变量之间形成了一个闭包
  };
}

var fn2 = fn();
fn2();
fn2();
fn2(); // 合起来的连环adder
// function adder(num) {
//     var total = num;  // 因为是闭包，所以每次call xxx函数的时候，这里定义的变量并不会被重置，因为并没有call到这行
//     //定义一个函数，然后最后返回一个函数，这样就可以实现连环
//     var xxx = function (num) {
//         //到达连环的最后了，没有更多需要加的数了，直接出结果
//         if (num === undefined) {
//             return total;
//         }
//         // 如果还有数要加，就先把这次的数加到total里，继续return这个xxx函数用来接收下一个input
//         total += num;
//         return xxx;
//     }
//     return xxx; //xxx函数和total形成了闭包
// }
// var result = adder(10)(20)(30)(40)();
// console.log(result);
// 更复杂一点的adder（只考虑从左到右的顺序计算）

function adder(num) {
  var total = num;
  var operator = "";

  var xxx = function xxx(num) {
    if (num === undefined) {
      return total;
    }

    if (typeof num === "string") {
      operator = num;
    }

    if (typeof num === "number") {
      switch (operator) {
        case '+':
          total += num;
          break;

        case '-':
          total -= num;
          break;

        case '*':
          total *= num;
          break;

        case '/':
          total /= num;
          break;
      }
    }

    return xxx;
  };

  return xxx;
}

var result = adder(10)("+")(20)("*")(5)();
console.log(result);