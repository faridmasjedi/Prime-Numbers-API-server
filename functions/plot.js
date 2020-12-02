// todo:
// the input: take a function - x(start) - x(end)
// the goal: have a result of different (x,y) of a function and pass it -
// as can use this points to plot the function.
function fun1(x) {return Math.sin(x);  }

function funPoint (xss,xll) {
  let xs = Number(xss);
  let xl = Number(xll);
  let scale = (xll-xss)
  const func = Math.sin;

  var xx, yy, dx=4, result=[];
  for (var i=xs; i<=xl; i++) {
  xx = dx*i/scale;
  yy = func(xx);
  result.push([xx,yy])
  }
  return result;
}

module.exports = {funPoint}
