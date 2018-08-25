function initMap() {
    
      
  var map = new google.maps.Map(document.getElementById('map'), {
  });
    
   
    




  var autocomplete = new google.maps.places.Autocomplete(input);
  var autocomplete2 = new google.maps.places.Autocomplete(input2);


  // Set the data fields to return when the user selects a place.
  autocomplete.setFields(
      ['address_components', 'geometry', 'icon', 'name']);
    
    autocomplete2.setFields(
      ['address_components', 'geometry', 'icon', 'name']);

 

  autocomplete.addListener('place_changed', function() {
   
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }



  
  });
    
    autocomplete2.addListener('place_changed', function() {
   
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }


  
  });
    
   

}



function submit() {

    var inputValue = {
        fromLocation : document.getElementById('input').value ,
        toLocation : document.getElementById('input2').value,
        homeSize : document.getElementById('homeSize').value,
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        movingDate : document.getElementById('movingDate').value
    }
    
    

    fetch('http://localhost:3000/yelpSearch', {
        method: 'POST',
        body: JSON.stringify(inputValue),
        headers: { "Content-Type": "application/json"}
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data.message)
        console.log(data.info)
        sessionStorage.info = JSON.stringify(data.info)
        sessionStorage.data = JSON.stringify(data.message)
      window.location.href = 'results.html'
       

    })
}



