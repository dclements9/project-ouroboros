listPreviousLoops();

//  Lists the previously played video from local storage
function listPreviousLoops() {
    if (localStorage.getItem('videoCode')) {
        const code = localStorage.getItem('videoCode')

        let previousPlayer = `<iframe title="previousLoopPlayer" width="560" height="315" src="https://www.youtube.com/embed/${code}?loop=1&playlist=${code}" frameborder="1" allowfullscreen></iframe>`;
        document.getElementById("previousLoops").innerHTML = previousPlayer;
    } else {
        document.getElementById("previousLoops").innerHTML = "Get to Looping";
    }
}

// Search YT and fetch data response
function searchYT() {
    document.getElementById('forEachResults').innerHTML = '';

    const YOUTUBE_API_KEY = "";

    const searchTerm = document.getElementById("searchTermInput").value;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchTerm}&type="video"&key=${YOUTUBE_API_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayResults(data)
        });
}

// Displays results from searchYT()
function displayResults(data) {
    for (let i = 0; i < data.items.length; i++) {
        let title = data.items[i].snippet.title;
        let videoID = data.items[i].id.videoId;
        let videoLink = `https://www.youtube.com/watch?v=${videoID}`
        let thumbnail = `<input type="image" id='video${i}' name='${videoID}' 
            src="${data.items[i].snippet.thumbnails.default.url}" />`

        document.getElementById('forEachResults').innerHTML +=
            thumbnail + ' ' + title + '<br>' + '<br>';
    }
    document.getElementById('video0').onclick = function(){
        selectVideo(document.getElementById('video0').name);}
    document.getElementById('video1').onclick = function(){
        selectVideo(document.getElementById('video1').name);}
    document.getElementById('video2').onclick = function(){
        selectVideo(document.getElementById('video2').name);}
    document.getElementById('video3').onclick = function(){
        selectVideo(document.getElementById('video3').name);}
    document.getElementById('video4').onclick = function(){
        selectVideo(document.getElementById('video4').name);}
}

// Displays selected video displayResults()
function selectVideo(videoCode) {
 let videoPlayer =
 `<iframe title="loopPlayer" width="560" height="315" src="https://www.youtube.com/embed/${videoCode}?loop=1&playlist=${videoCode}" frameborder="1" allowfullscreen></iframe>`;

document.getElementById("loopPlayer").innerHTML = videoPlayer;

// Stores Video Code for Previous Loop in Local Storage
localStorage.setItem('videoCode', `${videoCode}`)

document.getElementById('forEachResults').innerHTML = '';
    return false;
}