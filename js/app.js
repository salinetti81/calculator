// Calculator
  // result
   function e(element)
   {
      return document.getElementById(element);
   }
  // inputs
   function f(element)
   {
      return parseFloat(e(element).value);     
   }
  // update result
   function updateResult()
   {
      // total savings
      e("inputE").value = f("inputA") - (f("inputB")) - f("inputC") ;
         e = e || 0
      // short term savings
      e("inputF").value = f("inputE") * .20 ;
      // long term savings
      e("inputG").value = f("inputE") * .80 ;
   } 

   //end of calculator