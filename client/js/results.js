console.log(JSON.parse(sessionStorage.data))


document.getElementById('userCode').innerText = 'Please use code ' + JSON.parse(sessionStorage.info).code + ' when contacting your movers'

document.getElementById('imageOne').src = JSON.parse(sessionStorage.data)[0].image_url

document.getElementById('nameOne').innerText = JSON.parse(sessionStorage.data)[0].name

/*
document.getElementById('nameOne').setAttribute('href', JSON.parse(sessionStorage.data)[0].url)
document.getElementById('nameOne').setAttribute('target', '_blank')
document.getElementById('nameOne').style.color = 'black'
*/

for (i=0; i<JSON.parse(sessionStorage.data)[0].rating; i++) {

document.getElementById('ratingOne').innerHTML += '<i class="fas fa-star"></i> '

}

document.getElementById('phoneNumberOne').innerText = JSON.parse(sessionStorage.data)[0].phone

if (!JSON.parse(sessionStorage.data)[0].price) {
    document.getElementById('priceOne').innerText = 'N/A'
    
} else {
    document.getElementById('priceOne').innerText = JSON.parse(sessionStorage.data)[0].price
    
}





document.getElementById('imageTwo').src = JSON.parse(sessionStorage.data)[1].image_url

document.getElementById('nameTwo').innerText = JSON.parse(sessionStorage.data)[1].name
/*
document.getElementById('nameTwo').setAttribute('href', JSON.parse(sessionStorage.data)[1].url)
document.getElementById('nameTwo').setAttribute('target', '_blank')
document.getElementById('nameTwo').style.color = 'black'
*/
for (i=0; i<JSON.parse(sessionStorage.data)[1].rating; i++) {

document.getElementById('ratingTwo').innerHTML += '<i class="fas fa-star"></i> '

}

document.getElementById('phoneNumberTwo').innerText = JSON.parse(sessionStorage.data)[1].phone

if (!JSON.parse(sessionStorage.data)[1].price) {
    document.getElementById('priceTwo').innerText = 'N/A'
    
} else {
    document.getElementById('priceTwo').innerText = JSON.parse(sessionStorage.data)[1].price
}




document.getElementById('imageThree').src = JSON.parse(sessionStorage.data)[2].image_url

document.getElementById('nameThree').innerText = JSON.parse(sessionStorage.data)[2].name
/*
document.getElementById('nameThree').setAttribute('href', JSON.parse(sessionStorage.data)[2].url)
document.getElementById('nameThree').setAttribute('target', '_blank')
document.getElementById('nameThree').style.color = 'black'
*/
for (i=0; i<JSON.parse(sessionStorage.data)[2].rating; i++) {

document.getElementById('ratingThree').innerHTML += '<i class="fas fa-star"></i> '

}

document.getElementById('phoneNumberThree').innerText = JSON.parse(sessionStorage.data)[2].phone

if (!JSON.parse(sessionStorage.data)[2].price) {
    document.getElementById('priceThree').innerText = 'N/A'
    
} else {
    document.getElementById('priceThree').innerText = JSON.parse(sessionStorage.data)[2].price
}



document.getElementById('imageFour').src = JSON.parse(sessionStorage.data)[3].image_url

document.getElementById('nameFour').innerText = JSON.parse(sessionStorage.data)[3].name
/*
document.getElementById('nameFour').setAttribute('href', JSON.parse(sessionStorage.data)[3].url)
document.getElementById('nameFour').setAttribute('target', '_blank')
document.getElementById('nameFour').style.color = 'black'
*/
for (i=0; i<JSON.parse(sessionStorage.data)[3].rating; i++) {

document.getElementById('ratingFour').innerHTML += '<i class="fas fa-star"></i> '

}

document.getElementById('phoneNumberFour').innerText = JSON.parse(sessionStorage.data)[3].phone

if (!JSON.parse(sessionStorage.data)[3].price) {
    document.getElementById('priceFour').innerText = 'N/A'
    
} else {
    document.getElementById('priceFour').innerText = JSON.parse(sessionStorage.data)[3].price
}



document.getElementById('imageFive').src = JSON.parse(sessionStorage.data)[4].image_url

document.getElementById('nameFive').innerText = JSON.parse(sessionStorage.data)[4].name
/*
document.getElementById('nameFive').setAttribute('href', JSON.parse(sessionStorage.data)[4].url)
document.getElementById('nameFive').setAttribute('target', '_blank')
document.getElementById('nameFive').style.color = 'black'
*/
for (i=0; i<JSON.parse(sessionStorage.data)[4].rating; i++) {

document.getElementById('ratingFive').innerHTML += '<i class="fas fa-star"></i> '

}

document.getElementById('phoneNumberFive').innerText = JSON.parse(sessionStorage.data)[4].phone

if (!JSON.parse(sessionStorage.data)[4].price) {
    document.getElementById('priceFive').innerText = 'N/A'
    
} else {
    document.getElementById('priceFive').innerText = JSON.parse(sessionStorage.data)[4].price
}


document.getElementById('fromLocation').innerText = JSON.parse(sessionStorage.info).fromLocation

document.getElementById('toLocation').innerText = JSON.parse(sessionStorage.info).toLocation

document.getElementById('homeSize').innerText = JSON.parse(sessionStorage.info).homeSize

document.getElementById('name').innerText = JSON.parse(sessionStorage.info).name

document.getElementById('email').innerHTML = JSON.parse(sessionStorage.info).email

document.getElementById('movingDate').innerText = JSON.parse(sessionStorage.info).movingDate

document.getElementById("headerStatement").innerText = "Hello " + JSON.parse(sessionStorage.info).name + "! We've found 5 movers."


var priceArrayElements = document.querySelectorAll('.pricingh5')

if ($(window).width() <= 767) {
    for (i=0;i<priceArrayElements.length;i++) {
        if (priceArrayElements[i].nextElementSibling.innerText === 'N/A') {
            priceArrayElements[i].nextElementSibling.style.display = 'none'
        }
    }
    
    
    }
        
        $(window).resize(function() {
  if ($(window).width() <= 767) {
      for (i=0;i<priceArrayElements.length;i++) {
        if (priceArrayElements[i].nextElementSibling.innerText === 'N/A') {
            priceArrayElements[i].nextElementSibling.style.display = 'none'
        }
    }
     
  } else {
      for (i=0;i<priceArrayElements.length;i++) {
          riceArrayElements[i].nextElementSibling.style.display = 'block'
      }
  }

});





