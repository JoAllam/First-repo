fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY")
.then(function(data) {
    console.log(data.headers.date);
})

let asteroidReceived = [];



