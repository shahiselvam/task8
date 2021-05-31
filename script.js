
var Url = "https://holidays.abstractapi.com/v1/?api_key=055178c6ae034754b219fbc0ff329750&country=IN&year=2020"

loadvalue = ()=> {

fetch(Url)
.then(function(data){

    return data.json();

})
.then(function(value){

    display(value);
})

  .catch(function(err){

    console.log("error fetching data")
  })

}
  let date = document.createElement("input");
  date.type = "text";
  date.id = "datepicker";
  date.setAttribute("placeholder" , "select the date" , "min" , "2017-04-01", "max" , "2017-04-30")


  let submit = document.createElement("input");
  submit.type = "button";
  submit.value = "submit";
  submit.className = "btn-submit";
  submit.setAttribute('onclick', 'loadvalue()')
  document.body.append(date,submit);


  function display(data){   
    
    var found = false;
    var inputdate = document.getElementById("datepicker").value;

    if(inputdate != "")
    
  {
    for(var i in data){
    if(data[i].date == inputdate )
   {

    var found = true;
     break;
  }

 }
 if(found == true){

  alert(data[i].date +" will is a holiday due to " + data[i].name  );
 } 
 else{

  alert(  "This is not a holiday");
 }

  }

}
  