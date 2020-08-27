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

function adder(num) {
  var total = num; //定义一个函数，然后最后返回一个函数，这样就可以实现连环

  var xxx = function xxx(num) {
    //到达连环的最后了，没有更多需要加的数了，直接出结果
    if (num === undefined) {
      return total;
    } // 如果还有数要加，就先把这次的数加到total里，继续return这个xxx函数用来接收下一个input


    total += num;
    return xxx;
  };

  return xxx; //xxx函数和total形成了闭包
}

var result = adder(10)(20)(30)(40)();
console.log(result);