function trigonometry(degree) {
  const degree_rad = degree*Math.PI/180;
  let tan, cot,sin,cos,sign;

  sin = (Math.sin(degree_rad)).toFixed(3);
  cos = (Math.cos(degree_rad)).toFixed(3);

  if ((degree/90)%2===1){
    sign = Math.sign(sin)===1;
    sign ? tan = 'Infinity' : tan='-Infinity'
    cot = 0;
  }else if ((degree/90)%2===0){
    sign = Math.sign(cos)===1;

    tan = 0;
    sign ? cot = 'Infinity' : cot='-Infinity'
  }else{
    tan = (Math.tan(degree_rad)).toFixed(3);
    cot = (1/Math.tan(degree_rad)).toFixed(3);
  }

  return {
    degree: degree,
    "deg(rad)": degree_rad,
    "sin(degree)": sin,
    "cos(degree)": cos,
    "tan(degree)": tan,
    "cot(degree)": cot
  };

}


module.exports = { trigonometry }
