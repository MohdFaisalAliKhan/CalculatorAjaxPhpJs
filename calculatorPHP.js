var op="";
var resultFinal=0;
var preSign="";
var flag=0;

function myfunction(clickedid) {//This function merely writes the input the shows it on the calculator to the user
      preSign+=clickedid;
      document.getElementById("result").innerHTML=preSign;
}
function reset(){//Function to reset the calculator
      location.reload()
  }
function operators(sign){//Function to deal with the operators and do operations in a consicutive manner.
    if(document.getElementById("result").innerHTML==""||document.getElementById("result").innerHTML=="NaN" ) {  //If operator is clicked before entering anything
        alert("Nothing to perform operation.");
       }
    else if(op!="") { 
        $.ajax({
              url:"CalculatorPHP.php",
              data:{preSign:preSign,
                    op:op,
                    resultFinal:resultFinal },
              type:"POST",
              success:function(d){
                resultFinal=d;
                console.log(resultFinal);
                document.getElementById("result").innerHTML=resultFinal;
              }
            });
            op=sign;
            preSign="";
        }
    else if(op=="") {     //When Operator is clicked for first time
        resultFinal=preSign;
        op=sign;
        document.getElementById("result").innerHTML=="";
        preSign="";
      }
    else{
         alert("something went wrong");
         }
    
}

