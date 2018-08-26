module.exports = {
    
   yelpSearch(req, res) {
       
       const yelp = require('yelp-fusion');
       var nodemailer = require('nodemailer');
 
const client = yelp.client(process.env.YELP);
 console.log('test1')
client.search({
  term:'moving company',
  location: req.body.fromLocation,
    attributes: 'request_a_quote'
}).then(response => {
 console.log('test2')
    response.jsonBody.businesses.sort((a, b) => (a.rating) - (b.rating)).reverse().length = 5;
    
    

    var formInfo = {
        fromLocation: req.body.fromLocation,
        toLocation: req.body.toLocation,
        homeSize: req.body.homeSize,
        name: req.body.name,
        email: req.body.email,
        movingDate : req.body.movingDate,
        code: Math.floor(Math.random()*90000) + 100000
    };
    
    let privatekey = {
  "type": "service_account",
  "project_id": "boxwood-charmer-186806",
  "private_key_id": "bb6c63aa80ca5257b363e363933b142601708073",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCzlO1E0Aj72fW5\nZ4+ruiiy4uxrUP8g9wL5zDEb/NL3EtYDL1otuu2XZfU6Cj9T3P0yrnqOKkXKcKwJ\nwqbAqDcDNm8H48laMEx/TW349YzKMkB83SACDTG6xgAQfqki1yMlmANmCR01OwAl\nLiuyDsyLJnX5WHovTch3NM0DOLSG0MqUe+6Zd9kHe3een3JrjkeA/3weXyUgAvxi\nBJmTbJshunoURTX/jYkMI540hGIi2/tLV+EJzSl1DrMrIpxGfOa+p3DQkR4d0GNj\ndnWJKoV3ZEBgxpKeSUuoSawEKIXsLvJyia/xt+CubHYY3nhHdZJGUcicUoM60P6L\n91F4W+1NAgMBAAECggEAHNukS0gRAYPTkHE7bbGzI5gCvPYdoYsAL+snwyMcNbcR\nrB5aY/njf05Tm3mVFqFvEMtoB1t0rqTviHv+tvvxJzOCoSZyL2uOh3CGaRjwgHeV\n1Frmb132bVivHvdzr5UZ4Ust1KJHTswF6HOkcu8c4ImUMLcOn3Zk7f8OqONeY0F6\nOe/1CWlaMWcmfoiFU6Cm65WYqNDM0B/E5nnPXku1rnrPFn78v8IR4ZQVI1VmaMIe\nuI8P9D/B69pSL+XynVe31O3moxKZOhoB/f+4SRnpTXh9UK1yQ4tF/4tmt/1p45hT\nF2IXOP466lTUAcrc4SAJpq2uhc0ifEe/nDBaXRj/YQKBgQDY2cwZfncvvCMoKpyz\n3LczR+HU+gFvLxRFf8g2VXuepL94oj/QX4YCxm/vaMwK+ZblWhud0csG0wz6a9+D\nSpKXAZV4luru0eJNx+thR2NXfV4vGHiRUfsXs7Xaw1YZ6WRPu54UvXVjnUTHs+Al\nCdJw8TAcSEc0rfFlaGgF7G20XQKBgQDUAKpKdKc93vWS2thwjMZE0j5tJS5tr/ef\naIt3KOm7G26/JmWgYkFDzGGjT/FTImbygk+ch/PKFpHqedwBxmSgD5QA+gqeRSFV\n6hCxhadHE9slDY7ZIRjYhnCvlthIeOxh/UaHIsVwKG+pRlUA35EyQgFTkWTQbh47\nAfFQ4ieNsQKBgHghX/IXn0twfEF6KclyUoM0JSVpQnYnrKE7wtxmys7+EZxwtc1n\nvcO3zrbgZXkG/9Ma8gWh/UlQjfYE4JPJMiA5nmZppMicuTPBtuHzPFNxfkW01sYa\nlnFw+yOv5vj/1LRfCZoPwwJmU34WZeve3xf2ZWKln9zNJ9e32Ti+2595AoGBALU/\ntFdfkDQnUFCzZWQkFsZz8QcjSKRiUxQoL0Q66EkdVPt7els6ZY3vSHJ1QF7RBK7E\nlge/e8AEt899S4kA8rqdVu3W2AkkFTH8oTUEjVUJNsxg4QXlc/Z6ShD0qAidyYql\nHQ0fvyj6iSxxgu7yNJKBN90YatZ/rrzIFmYOU76hAoGBAIIquD1/QwX06q+goQ9n\nYCScal/Dxq7xfn51bBpMudC6IOj8bY2X543OnxVCmy0YLJ4iJKTSEkchiFsmn5ws\nMRPykhJtB4B692HolI1cHic4WaTPMu6Dpp9rJDlXVgW9uueanahWDIG7x2Ad404+\nbrgDILFJ2V9UD7kcmLFB1o1u\n-----END PRIVATE KEY-----\n",
  "client_email": "google-sheets-node@boxwood-charmer-186806.iam.gserviceaccount.com",
  "client_id": "114831110676200170118",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/google-sheets-node%40boxwood-charmer-186806.iam.gserviceaccount.com"
}
       
       const {google} = require('googleapis');
       
  const oauth2Client = new google.auth.OAuth2(
    '283356505022-q9r424mo7ikqahkspuu5idvada2uvgif.apps.googleusercontent.com',
    'DFuL4WZacMaqjiYk8_4BUyag'
  )

  let jwtClient = new google.auth.JWT(
       privatekey.client_email,
       null,
       privatekey.private_key,
       ['https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/calendar']);
//authenticate request
jwtClient.authorize(function (err, tokens) {
 if (err) {
   console.log(err);
   return;
 } else {
   console.log("Successfully connected!");
 }
});

    // The following call will create a spreadsheet and return an ID that can
    // be used with the API. Note that oAuth API can only be used to access
    // files it creates, not files already on a drive (unless you apply to
    // Google for additional privilages.)
    /*
    sheets.spreadsheets.create({ auth: oauth2Client }, (err, response) => {
     if (err) return console.error(err)
     console.log(`New Spreadsheet ID: ${response.spreadsheetId}`)
    })
    */
//       let spreadsheetId = '1fYpp-7l8lnRThH5AEQFW4J7-thC6OEI68e56iccOgjs';
//let sheetName = 'Test'
let sheets = google.sheets('v4');
     
    sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET,
      range: 'A2',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [
          [new Date().toISOString(), formInfo.name, formInfo.email, formInfo.movingDate, formInfo.homeSize, formInfo.fromLocation, formInfo.toLocation, formInfo.code]
        ],
      },
      auth: jwtClient
    }, (err, response) => {
      if (err) return console.error(err)
    })
    
    
    
    
     var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
    port: 465,
    secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
});
        

var mailOptions = {
  from: 
process.env.EMAIL,
  to: formInfo.email,
  subject: "Welcome "+formInfo.name+"!",
  html: '<style>#body{overflow-x: hidden; font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}#body{background-color: #BFDCFF; text-align: center}#h1{text-align: center;}#header button{background-color: #5F6EFF; color: white; border: none; padding: 10px 50px; border: 5%; font-weight: bold;}#companies div{margin-top: 25px;}#companies button{background-color: #FED136; color: white; border: none; padding: 10px 50px; border: 5%; font-weight: bold;}</style> <div id="body" > <div class="container"> <div id="header"> <h1 id="h1">Hello ' + formInfo.name + '</h1> <p >Feel free to contact any of the listed companies to ask questions or to book your move date.</p><button>Use code ' +formInfo.code+ '</button> </div><div id="companies"> <div id="divOne"> <img src="' +response.jsonBody.businesses[0].image_url+ '" width="300"> <h4>' +response.jsonBody.businesses[0].name+ '</h4> <button>' +response.jsonBody.businesses[0].phone+ '</button> </div><div id="divTwo"> <img src="' +response.jsonBody.businesses[1].image_url+ '" width="300"> <h4>' +response.jsonBody.businesses[1].name+ '</h4> <button>' +response.jsonBody.businesses[1].phone+ '</button> </div><div id="divThree"> <img src="' +response.jsonBody.businesses[2].image_url+ '" width="300"> <h4>' +response.jsonBody.businesses[2].name+ '</h4> <button>' +response.jsonBody.businesses[2].phone+ '</button> </div><div id="divFour"> <img src="' +response.jsonBody.businesses[3].image_url+ '" width="300"> <h4>' +response.jsonBody.businesses[3].name+ '</h4> <button>' +response.jsonBody.businesses[3].phone+ '</button> </div><div id="divFive"> <img src="' +response.jsonBody.businesses[4].image_url+ '" width="300"> <h4>' +response.jsonBody.businesses[4].name+ '</h4> <button>' +response.jsonBody.businesses[4].phone+ '</button> </div></div></div></div>'
};
        transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
      console.log('Emails Sent!')
  }
});
    
    
    
    
    res.status(200).send({info: formInfo, message : response.jsonBody.businesses})
    
    
    
}).catch(e => {
  console.log(e);
});
       
       
   }
    

    
}