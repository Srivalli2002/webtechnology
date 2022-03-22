function getReview(){
    var request = new XMLHttpRequest();
    var url = 'https://imdb-api.com/en/API/Ratings/k_l7kfcyt0/tt1375666';
    request.open('GET',url,true);
    request.onload = function(){
        var result = JSON.parse(this.response);
        console.log(result)
    }
    request.send();
}