const load = document.querySelector(".reload");
const disp = document.querySelector(".disp");
const finish = document.querySelector(".finish");
let info = document.querySelector("#info");
//let next = document.getElementById("btnNext");

// next.addEventListener('click',function(){

//     document.getElementById("fm1").style.display = "none"
//     document.getElementById("fm2").style.display = "block"
// })


load.addEventListener("click",function(){
    location.reload();
})

finish.addEventListener("click",function(){
    // alert("Bolan");
    confirm("Do you want to submit?")
    const qn1 = document.exam.q1.value;
    const qn2 = document.exam.q2.value;
    const qn3 = document.exam.q3.value;
    const qn4 = document.exam.q4.value;
    const qn5 = document.exam.q5.value;
    const qn6 = document.exam.q6.value;
    const qn7 = document.exam.q7.value;
    const qn8 = document.exam.q8.value;
    const qn9 = document.exam.q9.value;
    const qn10 = document.exam.q10.value;
    const qn11 = document.exam.q11.value;
    const qn12 = document.exam.q12.value;
    const qn13 = document.exam.q13.value;
    const qn14 = document.exam.q14.value;
    const qn15 = document.exam.q15.value;
    const qn16 = document.exam.q16.value;
    const qn17 = document.exam.q17.value;
    const qn18 = document.exam.q18.value;
    const qn19 = document.exam.q19.value;
    const qn20 = document.exam.q20.value;

// alert(qn1);
    let result = 0;
    //message
    let message = ["Excellent","Try header","Poor Attempt"];
    let answer = ["Late","All of the above","They get on the plane","Leaves","International civil Aviation organization","During take-off and landing",
"When it arrives","Get on another plane","ICAO","Take you up to the second floor","At airport customs","English","Seats","Ground staff communications",
"A lavatory","Help you carry your baggage","1986","Passengers","Cananda","A flight to London"];
    

     if(qn1===answer[0]){
       result++;
     }
     if(qn2===answer[1]){
         result++;
     }

     if(qn3===answer[2]){
         result++;
     }
     if(qn4===answer[3]){
        result++;
      }
      if(qn5===answer[4]){
          result++;
      }
 
      if(qn6===answer[5]){
          result++;
      }
      if(qn7===answer[6]){
        result++;
      }
      if(qn8===answer[7]){
          result++;
      }
 
      if(qn9===answer[8]){
          result++;
      }
      if(qn10===answer[9]){
        result++;
      }
      if(qn11===answer[10]){
          result++;
      }
 
      if(qn12===answer[11]){
          result++;
      }
      if(qn13===answer[12]){
        result++;
      }
      if(qn14===answer[13]){
          result++;
      }
 
      if(qn15===answer[14]){
          result++;
      }
      if(qn16===answer[15]){
        result++;
      }
      if(qn17===answer[16]){
          result++;
      }
 
      if(qn18===answer[17]){
          result++;
      }
      if(qn19===answer[18]){
        result++;
      }
      if(qn20===answer[19]){
          result++;
      }
 
      localStorage.setItem("score",result)
      localStorage.setItem("ck", check)
    //   window.location="result.html"
    window.open("result.html","newWindow","location=true, resizable=false, width=450, height=350, top=250, left=250")

     //check how many question users got correctlly
     //alert(result)
     let check;
     if(result < 1){
          check = 2;
     }
     else if(result > 0 && result < 3){
         check = 1;
     }
     else if(result > 2){
         check = 0;
     }

   info.innerHTML = message[check]; 
   document.getElementById("ans").innerHTML = `You scored ${result}`;
   if(result==1){
    document.getElementById("ans").innerHTML="You Scored "+result+" correct";
    }else if(result > 1){
        document.getElementById("ans").innerHTML="You Scored "+result+" corrects";
     disp.classList.add("good");
    }else{
        document.getElementById("ans").innerHTML="You Scored "+result;
    disp.classList.add("poor");
    }
})





let countDown = new Date("October ,02 2021 02:40:25")

let count = setInterval(function() {

  let currentDate = new Date().getTime();

  let timeDiff = countDown - currentDate;

  
  let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  document.getElementById("examTime").innerHTML = minutes + "m " + seconds + "s ";

  if (timeDiff < 0) {
    clearInterval(count);
    document.getElementById("buhari").innerHTML = "Pls Buhari your time in the has EXPIRED as President of. \n Republic of Nigeria Vacate the office as soon as possible";
  }
}, 1000);