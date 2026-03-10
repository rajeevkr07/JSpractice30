/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const res = []; // new Array(arr.length);

    for(const i in arr){
       res.push(fn(arr[i], Number(i)))
    } 
  
   return res;
};

 // return arr.map(fn);
    // map comes from Functional programming no state, no variables
