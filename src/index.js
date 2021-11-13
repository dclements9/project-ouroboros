listPreviousLoops();

// Number of videos to query for.
const queryItems = 5;

//  Lists the previously played video from local storage
function listPreviousLoops() {
    if (localStorage.getItem('videoCode')) {
        const code = localStorage.getItem('videoCode')

        let previousPlayer = `<iframe id="loop__previous__frame" title="previous_loop" src="https://www.youtube.com/embed/${code}?loop=1&playlist=${code}" frameborder="1" allowfullscreen></iframe>`;
        document.getElementById("loop__previous").innerHTML = previousPlayer;
    } else {
        document.getElementById("loop__previous").innerHTML = "Get to Looping";
    }
}

// Search YT and fetch data response
function searchYT() {
    document.getElementById('results__display').innerHTML = '';

    const YOUTUBE_API_KEY = "";

    const searchTerm = document.getElementById("search__input").value;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${queryItems}&q=${searchTerm}&type="video"&key=${YOUTUBE_API_KEY}`;

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
        let label = `<label for="video${i}" hidden>Video${i}</label>`
        let thumbnail = `<input type="image" id='video${i}' name='${videoID}' 
            src="${data.items[i].snippet.thumbnails.default.url}" />`

        document.getElementById('results__display').innerHTML +=
            label + thumbnail + ' ' + title + '<br>' + '<br>';
    }

    // Add onclick to thumbnails
    for (let j = 0; j < queryItems; j++){
        document.getElementById(`video${j}`).onclick = function(){
            selectVideo(document.getElementById(`video${j}`).name);}
    } 
}

// Displays selected video displayResults()
function selectVideo(videoCode) {
 let videoPlayer =
 `<iframe id="loop_frame" title="loop_box" src="https://www.youtube.com/embed/${videoCode}?loop=1&playlist=${videoCode}" frameborder="1" allowfullscreen></iframe>`;

document.getElementById("loop_box").innerHTML = videoPlayer;

// Stores Video Code for Previous Loop in Local Storage
localStorage.setItem('videoCode', `${videoCode}`)

document.getElementById('results__display').innerHTML = '';
    return false;
}