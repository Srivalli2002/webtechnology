function fetchweather(){
    var city =document.getElementById("temp").value
    var request = new XMLHttpRequest()
    var apikey = 'be25e9840e24943b6cb4dbf7bf3f5432'
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=delhi&appid=be25e9840e24943b6cb4dbf7bf3f5432';
    request.open('GET',url,true);
    request.onload = function(){
        var result = JSON.parse(this.response)
        console.log(result)
    }
    request.send();
    console.log("Fetching...");
}
