document.getElementById('userCode').innerText = 'Please use code ' + JSON.parse(sessionStorage.info).code + ' when contacting your movers'

document.getElementById('imageOne').src = JSON.parse(sessionStorage.data)[0].image_url

document.getElementById('nameOne').innerText = JSON.parse(sessionStorage.data)[0].name

for (i=0; i<JSON.parse(sessionStorage.data)[0].rating; i++) {

document.getElementById('ratingOne').innerHTML += '<i class="fas fa-star"></i> '

}

document.getElementById('phoneNumberOne').innerText = JSON.parse(sessionStorage.data)[0].phone

if (JSON.parse(sessionStorage.data)[0].price === 0) {
    document.getElementById('priceOne').innerText = JSON.parse(sessionStorage.data)[0].price
} else {
    document.getElementById('priceOne').innerText = 'N/A'
}





document.getElementById('imageTwo').src = JSON.parse(sessionStorage.data)[1].image_url

document.getElementById('nameTwo').innerText = JSON.parse(sessionStorage.data)[1].name

for (i=0; i<JSON.parse(sessionStorage.data)[1].rating; i++) {

document.getElementById('ratingTwo').innerHTML += '<i class="fas fa-star"></i> '

}

document.getElementById('phoneNumberTwo').innerText = JSON.parse(sessionStorage.data)[1].phone

if (JSON.parse(sessionStorage.data)[1].price === 0) {
    document.getElementById('priceTwo').innerText = JSON.parse(sessionStorage.data)[1].price
} else {
    document.getElementById('priceTwo').innerText = 'N/A'
}



document.getElementById('imageThree').src = JSON.parse(sessionStorage.data)[2].image_url

document.getElementById('nameThree').innerText = JSON.parse(sessionStorage.data)[2].name

for (i=0; i<JSON.parse(sessionStorage.data)[2].rating; i++) {

document.getElementById('ratingThree').innerHTML += '<i class="fas fa-star"></i> '

}

document.getElementById('phoneNumberThree').innerText = JSON.parse(sessionStorage.data)[2].phone

if (JSON.parse(sessionStorage.data)[2].price === 0) {
    document.getElementById('priceThree').innerText = JSON.parse(sessionStorage.data)[2].price
} else {
    document.getElementById('priceThree').innerText = 'N/A'
}



document.getElementById('imageFour').src = JSON.parse(sessionStorage.data)[3].image_url

document.getElementById('nameFour').innerText = JSON.parse(sessionStorage.data)[3].name

for (i=0; i<JSON.parse(sessionStorage.data)[3].rating; i++) {

document.getElementById('ratingFour').innerHTML += '<i class="fas fa-star"></i> '

}

document.getElementById('phoneNumberFour').innerText = JSON.parse(sessionStorage.data)[3].phone

if (JSON.parse(sessionStorage.data)[3].price === 0) {
    document.getElementById('priceFour').innerText = JSON.parse(sessionStorage.data)[3].price
} else {
    document.getElementById('priceFour').innerText = 'N/A'
}



document.getElementById('imageFive').src = JSON.parse(sessionStorage.data)[4].image_url

document.getElementById('nameFive').innerText = JSON.parse(sessionStorage.data)[4].name

for (i=0; i<JSON.parse(sessionStorage.data)[4].rating; i++) {

document.getElementById('ratingFive').innerHTML += '<i class="fas fa-star"></i> '

}

document.getElementById('phoneNumberFive').innerText = JSON.parse(sessionStorage.data)[4].phone

if (JSON.parse(sessionStorage.data)[4].price === 0) {
    document.getElementById('priceFive').innerText = JSON.parse(sessionStorage.data)[4].price
} else {
    document.getElementById('priceFive').innerText = 'N/A'
}


document.getElementById('fromLocation').innerText = JSON.parse(sessionStorage.info).fromLocation

document.getElementById('toLocation').innerText = JSON.parse(sessionStorage.info).toLocation

document.getElementById('homeSize').innerText = JSON.parse(sessionStorage.info).homeSize

document.getElementById('name').innerText = JSON.parse(sessionStorage.info).name

document.getElementById('email').innerHTML = JSON.parse(sessionStorage.info).email

document.getElementById('movingDate').innerText = JSON.parse(sessionStorage.info).movingDate

document.getElementById("headerStatement").innerText = "Hello " + JSON.parse(sessionStorage.info).name + "! We've found 5 movers."