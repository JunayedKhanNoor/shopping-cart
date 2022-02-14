function updateProductNumber(product, price, isIncreasing) {
  const productInput = document.getElementById(product + "-number");
  let productNumber = parseInt(productInput.value);
  //+ icon a click korle cart er value barbe, - icon a click korle cart er value kombe 1
  if (isIncreasing) {
    productNumber = productNumber + 1;
  } else if (productNumber > 0) {
    productNumber = productNumber - 1;
  }
  // 1 sei value ta k show korachi
  productInput.value = productNumber;
  //update each product total price
  const productTotal = document.getElementById(product + "-total");
  productTotal.innerText = productNumber * price;
  //calculate total of different product
  caclculateTotal();
}
function getInputVale(product){
    const productInput = document.getElementById(product+'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function caclculateTotal(){
    const phoneTotal = getInputVale("phone")*1219;
    const caseTotal = getInputVale("case")*59;
    const subTotal = phoneTotal +caseTotal;
    const tax = subTotal/10;
    const totalPrice = subTotal + tax;
    //total value gula calculate kore update kore disi
    document.getElementById("sub-total").innerText=subTotal;
    document.getElementById("tax-amount").innerText=tax;
    document.getElementById("total-price").innerText=totalPrice;
}
//Handle Phone increase decrease events
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, false);
});
//Handle Case increase decrease events
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case", 59, true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case", 59, false);
});
