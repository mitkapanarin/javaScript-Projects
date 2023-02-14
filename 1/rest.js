const student = 2
const veterans = 3
const senior = 4
const regular = 1

function bill(...totalBill){
  const sum = totalBill.reduce((a,b)=>a+b, 0)
  return function discount(y){
    const firstDiscount = sum - y
    return function secretDiscount(z){
      const finalBill = firstDiscount - z
      console.log(finalBill)
      return finalBill
    }
  }
}

bill(12, 2, 1, 4, 6, 7, 1)(2)(1)