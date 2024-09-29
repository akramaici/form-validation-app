let result=document.createElement("p");
let ResultContainer=document.getElementsByClassName("result-container")[0];
let Btn=document.getElementById("btn");
let EmailPattern=/^[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]+$/;
let namePattern=/^[A-Za-z0-9]+ [A-Za-z]+$/;
let nameError=document.createElement("span");
let numberError=document.createElement("span");
let Emailerror=document.createElement("span");
let mssgerror=document.createElement("span");
function ChekName(){
   let Name=document.getElementById("name").value;
   let inputEreur=document.getElementsByClassName("info-container")[0];
   if(Name==""){ 
    nameError.textContent="name invalid";
    inputEreur.appendChild(nameError);
    result.textContent="please fix error";
    ResultContainer.appendChild(result);
    return false;
   }
   else if(!namePattern.test(Name)){ 
      nameError.textContent="write Full NAME";
    inputEreur.appendChild(nameError); 
    result.textContent="please fix error";
    ResultContainer.appendChild(result);
    return false;
   }
   else{
    result.innerHTML="";
    nameError.innerHTML= '<i class="fa-solid fa-check"></i>' ;
    inputEreur.appendChild(nameError);
    return true;
   }
}
function ChekNumber(){
    let number=document.getElementById("number").value;
    let inputEreur=document.getElementsByClassName("info-container")[1];
    if(number==""){
      numberError.textContent="phone number required";
     inputEreur.appendChild( numberError);
     result.textContent="please fix error";
     ResultContainer.appendChild(result);
     return false;
    }
    else if(number.length<10){
      numberError.textContent="Number Invalid";
     inputEreur.appendChild( numberError);
     result.textContent="please fix error";
     ResultContainer.appendChild(result);
     return false;
    }
    else{
      result.innerHTML="";
      numberError.innerHTML= '<i class="fa-solid fa-check"></i>' ;
      inputEreur.appendChild( numberError);
     return true;
    }
 }
 function ChekEmail(){
    let Email=document.getElementById("email").value;
    let inputEreur=document.getElementsByClassName("info-container")[2];
    if(Email==""){
      Emailerror.textContent="invalid email";
     inputEreur.appendChild(Emailerror);
     result.textContent="please fix error";
     ResultContainer.appendChild(result);
     return false;
    }
    else if(!EmailPattern.test(Email)){
      Emailerror.textContent="invalid email Format";
     inputEreur.appendChild(Emailerror);
     result.textContent="please fix error";
     ResultContainer.appendChild(result);
     return false;
    }
    else{ 
      result.innerHTML="";
      Emailerror.innerHTML= '<i class="fa-solid fa-check"></i>' ;
      inputEreur.appendChild(Emailerror);
     return true;
    }
 }
 function ChekMessage(){
    let mssg=document.getElementById("messg").value;
    let inputEreur=document.getElementsByClassName("info-container")[3];
    var left=30;
    var currentmssg=left-mssg.length;
    if(mssg==""){
      mssgerror.textContent="invalid message";
     inputEreur.appendChild(mssgerror);
     result.textContent="please fix error";
     ResultContainer.appendChild(result);
     return false;
    }
    else if(currentmssg>0){
      mssgerror.textContent=currentmssg +" caracters more";
     inputEreur.appendChild(mssgerror);
     result.textContent="please fix error";
     ResultContainer.appendChild(result);
     return false;
    }
    else{
      result.innerHTML="";
      mssgerror.innerHTML= '<i class="fa-solid fa-check"></i>' ;
      inputEreur.appendChild(mssgerror);
     return true;

    }
 }
 function submitBtn(){
    if(!ChekName()||!ChekNumber()|| !ChekEmail() || !ChekMessage()){
        return false;
    }
 }