//Trigger calculation when enter is pressed in input
document.getElementById("totalSumma");
totalSumma.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("countPrice").click();
  }
});

//mindre error än den inbyggda toFixed
function toFixed(num, precision) {
  return (+(Math.round(+(num + "e" + precision)) + "e" + -precision)).toFixed(
    precision
  );
}

function display() {
  let t = document.getElementById("whole");
  t.style.display = "block";
} 

let totalPris, moms, prisExMoms, momssats;



 function count() {
  toFixed();

  momssats = parseFloat(
    document.querySelector('input[name="procent"]:checked').value
  );

  totalPris = +parseFloat(document.getElementById("totalSumma").value).toFixed(
    2
  );

  moms = +((totalPris / (1 + momssats)) * momssats).toFixed(2);
  prisExMoms = +(totalPris - moms).toFixed(2);

  let types = document.querySelector('input[name="buy"]:checked').value;


  /* hur tabellen visas */

//köp sverige
  if (types === "swe" && totalPris) {
    display();
    
    document.getElementById("kontoklassDebit").innerHTML = "";
    document.getElementById("kontoklassKredit").innerHTML = totalPris;

    // ta bort momsraden om moms=0, annars lägg till
if (momssats === 0) {
    document.getElementById("momsRow").style.display = "none";
} else {
    document.getElementById("kontoklass1").innerHTML = "2641 Ingående moms";
    document.getElementById("momsRow").style.display = "";
    document.getElementById("kontoklass1Debit").innerHTML = moms;
    document.getElementById("kontoklass1Kredit").innerHTML = "";
}
    
    document.getElementById("kontoklass2").innerHTML = "4010 Inköp varor";
    document.getElementById("kontoklass2Debit").innerHTML = prisExMoms;
    document.getElementById("kontoklass2Kredit").innerHTML = "";
    document.getElementsByClassName("row1")[0].style.display = "none";

    

    
  } 
  //köp eu
  else if (types === "eu" && totalPris){
    display();
    document.getElementById("kontoklassDebit").innerHTML = "";
    document.getElementById("kontoklassKredit").innerHTML = totalPris;

    if (momssats === 0) {
        document.getElementById("momsRow").style.display = "none";
        document.getElementsByClassName("row1")[0].style.display = "none";
        document.getElementById("kontoklass2").innerHTML = "4059 Inköp varor EU momsfritt";
        document.getElementById("kontoklass2Debit").innerHTML = totalPris;
        document.getElementById("kontoklass2Kredit").innerHTML = "";
    } else if (momssats === 0.06){
        document.getElementById("momsRow").style.display = "";
        document.getElementsByClassName("row1")[0].style.display = "";
        document.getElementById("kontoklass1").innerHTML = "2645 Beräknad ingående moms på förvärv från utlandet";
        document.getElementById("kontoklass1Debit").innerHTML = (0.06 * totalPris).toFixed(2);
        document.getElementById("kontoklass1Kredit").innerHTML = "";
        
        document.getElementById("kontoklass2").innerHTML = "2634 Utgående moms omvänd skatteskyldighet 6%";
        document.getElementById("kontoklass2Debit").innerHTML = "";
        document.getElementById("kontoklass2Kredit").innerHTML = (0.06 * totalPris).toFixed(2);

        document.getElementById("kontoklass3").innerHTML = "4058 Inköp varor EU, 6% moms";
        document.getElementById("kontoklass3Debit").innerHTML = totalPris;
        document.getElementById("kontoklass3Kredit").innerHTML = "";

    } else if (momssats === 0.12){
        document.getElementById("momsRow").style.display = "";
        document.getElementsByClassName("row1")[0].style.display = "";
        document.getElementById("kontoklass1").innerHTML = "2645 Beräknad ingående moms på förvärv från utlandet";
        document.getElementById("kontoklass1Debit").innerHTML = (0.12 * totalPris).toFixed(2);
        document.getElementById("kontoklass1Kredit").innerHTML = "";
        
        document.getElementById("kontoklass2").innerHTML = "2624 Utgående moms omvänd skatteskyldighet 12%";
        document.getElementById("kontoklass2Debit").innerHTML = "";
        document.getElementById("kontoklass2Kredit").innerHTML = (0.12 * totalPris).toFixed(2);

        document.getElementById("kontoklass3").innerHTML = "4557 Inköp varor EU, 12% moms ";
        document.getElementById("kontoklass3Debit").innerHTML = totalPris;
        document.getElementById("kontoklass3Kredit").innerHTML = "";

    } else if (momssats === 0.25){
        document.getElementById("momsRow").style.display = "";
        document.getElementsByClassName("row1")[0].style.display = "";
        document.getElementById("kontoklass1").innerHTML = "2645 Beräknad ingående moms på förvärv från utlandet";
        document.getElementById("kontoklass1Debit").innerHTML = (0.25 * totalPris).toFixed(2);
        document.getElementById("kontoklass1Kredit").innerHTML = "";
        
        document.getElementById("kontoklass2").innerHTML = "2614 Utgående moms omvänd skatteskyldighet 25%";
        document.getElementById("kontoklass2Debit").innerHTML = "";
        document.getElementById("kontoklass2Kredit").innerHTML = (0.25 * totalPris).toFixed(2);

        document.getElementById("kontoklass3").innerHTML = "4056 Inköp varor EU, 25% moms ";
        document.getElementById("kontoklass3Debit").innerHTML = totalPris;
        document.getElementById("kontoklass3Kredit").innerHTML = "";

    }


  }
  
  //köp world
  else if (types === "world" && totalPris){
    display();
    document.getElementById("kontoklassDebit").innerHTML = "";
    document.getElementById("kontoklassKredit").innerHTML = totalPris;

    if (momssats === 0) {
        document.getElementById("momsRow").style.display = "none";
        document.getElementsByClassName("row1")[0].style.display = "none";
        document.getElementById("kontoklass2").innerHTML = "4548 Import av varor, momsfri";
        document.getElementById("kontoklass2Debit").innerHTML = totalPris;
        document.getElementById("kontoklass2Kredit").innerHTML = "";
    } else if (momssats === 0.06){
        document.getElementById("momsRow").style.display = "";
        document.getElementsByClassName("row1")[0].style.display = "";
        document.getElementById("kontoklass1").innerHTML = "2645 Beräknad ingående moms på förvärv från utlandet";
        document.getElementById("kontoklass1Debit").innerHTML = (0.06 * totalPris).toFixed(2);
        document.getElementById("kontoklass1Kredit").innerHTML = "";
        
        document.getElementById("kontoklass2").innerHTML = "2635 Utgående moms import av varor 6%";
        document.getElementById("kontoklass2Debit").innerHTML = "";
        document.getElementById("kontoklass2Kredit").innerHTML = (0.06 * totalPris).toFixed(2);

        document.getElementById("kontoklass3").innerHTML = "4547 Import av varor, 6% moms ";
        document.getElementById("kontoklass3Debit").innerHTML = totalPris;
        document.getElementById("kontoklass3Kredit").innerHTML = "";

    } else if (momssats === 0.12){
        document.getElementById("momsRow").style.display = "";
        document.getElementsByClassName("row1")[0].style.display = "";
        document.getElementById("kontoklass1").innerHTML = "2645 Beräknad ingående moms på förvärv från utlandet";
        document.getElementById("kontoklass1Debit").innerHTML = (0.12 * totalPris).toFixed(2);
        document.getElementById("kontoklass1Kredit").innerHTML = "";
        
        document.getElementById("kontoklass2").innerHTML = "2625 Utgående moms import av varor 12%";
        document.getElementById("kontoklass2Debit").innerHTML = "";
        document.getElementById("kontoklass2Kredit").innerHTML = (0.12 * totalPris).toFixed(2);

        document.getElementById("kontoklass3").innerHTML = "4546 Import av varor, 12% moms ";
        document.getElementById("kontoklass3Debit").innerHTML = totalPris;
        document.getElementById("kontoklass3Kredit").innerHTML = "";

    } else if (momssats === 0.25){
        document.getElementById("momsRow").style.display = "";
        document.getElementsByClassName("row1")[0].style.display = "";
        document.getElementById("kontoklass1").innerHTML = "2645 Beräknad ingående moms på förvärv från utlandet";
        document.getElementById("kontoklass1Debit").innerHTML = (0.25 * totalPris).toFixed(2);
        document.getElementById("kontoklass1Kredit").innerHTML = "";
        
        document.getElementById("kontoklass2").innerHTML = "2625 Utgående moms import av varor 25%";
        document.getElementById("kontoklass2Debit").innerHTML = "";
        document.getElementById("kontoklass2Kredit").innerHTML = (0.25 * totalPris).toFixed(2);

        document.getElementById("kontoklass3").innerHTML = "4546 Import av varor, 25% moms ";
        document.getElementById("kontoklass3Debit").innerHTML = totalPris;
        document.getElementById("kontoklass3Kredit").innerHTML = "";

    }


  }
  
  

} 


