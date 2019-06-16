var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];
  
var dropdown = document.getElementById('planets');

 planets.forEach(function(element){ 
    var option = document.createElement('option');
    var txt = document.createTextNode(element[0]);
        option.appendChild(txt);
        dropdown.insertBefore(option,dropdown.lastChild);            
});

function calculateWeight(weight, planetName){
    var weight = (document.getElementById('user-weight').value);  
    //console.log(weight)
    var planetName = (document.getElementById('planets').value);
     console.log(planetName)
     for(i = 0; i < planets.length; i++){
      if(planetName == planets[i][0]){
      var newWeight = weight * planets[i][1];
      console.log(newWeight)
    }
  };
      return newWeight
};

function handleClickEvent(){
  var userWeight = (document.getElementById('user-weight').value);
    //console.log(userWeight)
  var planetName =(document.getElementById('planets').value);
  console.log(planetName)
  var result = calculateWeight()
  document.getElementById('output').innerHTML = 'If you were on ' + planetName + ', you would weigh ' + result + "lbs!" ;
};

document.getElementById('calculate-button').onclick =
  function(){handleClickEvent()};

  
  
  
  
 // function calculateWeight(weight, planetName) {
    // 2. Write the code to return the correct weight
  
  
  
  //function handleClickEvent() {,
    // 3. Create a variable called userWeight and assign the value of the user's weight.
  
    // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
  
    // 5. Create a variable called result and assign the value of the new calculated weight.
  
    // 6. Write code to display the message shown in the screenshot.
  

  
  // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
  
  // Bonus Challenges
  // 8. Reverse the drop down order so that the sun is first.
  // 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)// Write your JavaScript code here!