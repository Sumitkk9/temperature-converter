
function display(vlu){
  document.getElementById("inPT").value=vlu;
  var vel = document.getElementById("valuee").value;
  if(vel>=0){
    document.getElementById("result").value="0°";
    document.getElementById("valuee").value="";
  }
 };



 document.getElementById("result").value="0°"



function cal(){
  var x= document.getElementById("inPT").value;
  

  if(x==1){
    var x= document.getElementById("valuee").value
            var y= (x * (9/5)) + 32
            document.getElementById("result").value= y + "°F"
    }else if(x==2){
            var x= document.getElementById("valuee").value
            let j= 273.15 + parseFloat(x)
            document.getElementById("result").value= j +"K"
        }else if(x==3){
            var x= document.getElementById("valuee").value
            let j= (x * (9/5)) + 491.67;
            document.getElementById("result").value= j.toFixed(2)+"°R"
        }else if(x==4){
            var x= document.getElementById("valuee").value
            let j= x * 4/5
            document.getElementById("result").value= j.toFixed(1) +" °é"
        }else{
                alert("Please Select Options to Convert");
            
        }
       
       
    }
