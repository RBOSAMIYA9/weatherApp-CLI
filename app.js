const axios = require('axios');
const geoCode = require('./utils/geoCode')
const forcast = require('./utils/forcast');
const { argv } = require('process');

// openWether api 
// key 9ce5bd42ff9eec31afcff8d114be6ad7
// console.log(argv[2]);
var add = argv[2];
if(!add){
    console.log("please provide location");
}
else{
    geoCode.geoCodeLocation(add, (error, data) => {
        if (error) {
            return console.log("some error occured");
        }
        forcast.getWeatherForcast(data.lat, data.lon, (errorInForcast, forcastData) => {
            if (errorInForcast) {
                return console.log("some error  occured while getting weather forcast",errorInForcast);
            }
            console.log(`Showing data for ${data.place},whose temperature is ${forcastData.temp} and feel like temp is ${forcastData.feelLikeTemp}`);
            console.log(`Wind speed ${forcastData.windSpeed} angle ${forcastData.degree}`);
            
        })
    })   
}
