//defining a function for calc tip amount
function tipCalculate()
{
  let ba, tp, np, pamt, tpamt, fbamt; //local vars
  //data coll
  ba=+bamt.value;
  np=+nop.value;
  tp=+tipp.value;
  //calc's
  pamt=ba*tp/100;
  tpamt=pamt*np;
  fbamt=ba+tpamt;
  //displaying op's
  tippp.innerHTML="Tip per Person &nbsp; &#8377;"+pamt;
  tottip.innerHTML="Total Tip Amount &nbsp; &#8377;"+tpamt;
  totbill.innerHTML="Total Bill Amount &nbsp; &#8377;"+fbamt; // value => innerHTML  for html ope support  
}