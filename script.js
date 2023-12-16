
var alphabetRegex = /^[a-zA-Z\s]+$/;
function validatename(){
    var nameInput = document.getElementById('sch').value;
    var fname=document.getElementById('sch2').value;
    var mname=document.getElementById('sch3').value;
    if (alphabetRegex.test(nameInput) && alphabetRegex.test(fname) && alphabetRegex.test(mname)){
        return true;
    }
    else{
        alert("name must contain alphabets only")
        return false;
    }
}
function validatenum()
{
    var num=document.getElementById('sch6').value;
    var valid=/^[0-9]{10}$/.test(num);
    if(valid){
        return true;
    }
    else{
        alert("enter valid phone number");
        return false;
    }
}
function validmar()
{
    var marks=document.getElementById('sch8').value;
    if(!isNaN(marks))
    {
        return true;
    }
    else{
        alert("enter valid marks");
        return false;
    }
}
function validateother()
{
    var des=document.getElementById('sch5').value;
    var date=document.getElementById('sch4').value;
    var clg=document.getElementById('sch7').value;
    return !(des.trim() === "" || date.trim() === "" || clg.trim() === "");

}
function validproofs()
{
    var p1=document.getElementById('bc');
    var p2=document.getElementById('pm');

   if(p1.checked && p2.checked)
   {
    return true;
   }
   alert("submit req documents");
    return false;
}
function calculateYears() {
    var inputDate = document.getElementById('sch5').value;

    // Create a Date object from the input value
    var selectedDate = new Date(inputDate);

    // Get the current date
    var currentDate = new Date();

    // Calculate the difference in milliseconds
    var timeDifference = currentDate - selectedDate;

    // Calculate the number of years
    var years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));
     if(years>=18)
     {
        return true;
     }
     else{
        alert("age not eligible")
        return false;
     }
}
function validateGender() {
    var genderRadios = document.getElementsByName('gender');
    var genderSelected = false;
  
    for (var i = 0; i < genderRadios.length; i++) {
      if (genderRadios[i].checked) {
        genderSelected = true;
        break;
      
      }
    }
  
    if (!genderSelected) {
      alert('Please select a gender!');
      return false;
    }
    return true;
}
function validatebranch() {
    var genderRadios = document.getElementsByName('dep');
    var genderSelected = false;
  
    for (var i = 0; i < genderRadios.length; i++) {
      if (genderRadios[i].checked) {
        genderSelected = true;
        break;
      }
    }
  
    if (!genderSelected) {
      alert('Please select a department !');
      return false;
    }
    return true;
}
function validate() {
      if( validatename() && validateother() && validatenum() )
      {
       
        if(validproofs()  && validateGender()  && calculateYears())  
        {
            var tos=document.getElementById('tos').value;
            var dropdown = document.getElementById("dep");
            var selectedValue = dropdown.options[dropdown.selectedIndex].value;
             alert("ok all fields filled");
            alert("successfully registered"+"for the student "+document.getElementById('sch').value+" in the programme  "+selectedValue+" for the study period of "+tos);
        }
        else{
            alert("no proof / no proper experience ");
        }
    
      }
      else{
        alert("fill the required fields");
      }
    
}