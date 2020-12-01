listPreviousLoops();

// // Original Input button to pull YT link and retrieve videoId with retrieveVideoVariable()
// inputButton.addEventListener('click', function () {
//     let video = '';
//     const inputLink = document.getElementById("linkInput").value

//     if (inputLink === '') {
//         document.getElementById("loopPlayer").innerHTML = 'Please Enter a YouTube Link to Begin the Loop';
//     } else {
//         video = retrieveVideoVariable(inputLink);
//         let videoPlayer =
//             `<iframe title="loopPlayer" width="560" height="315" src="https://www.youtube.com/embed/${video}?loop=1&playlist=${video}" frameborder="1" allowfullscreen></iframe>`;
//         document.getElementById("loopPlayer").innerHTML = videoPlayer;

//         localStorage.setItem('videoCode', `${video}`)

//     }
// });

// // Pulls videoID from link
// function retrieveVideoVariable(fullLink) {
//     const linkSplit = fullLink.split('=');
//     const secondLinkSplit = linkSplit[1].split('&');

//     return secondLinkSplit[0];
// }

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


// TODO: Change AutoInvoked selectVideo
// Displays results from searchYT()
function displayResults(data) {
    for (let i = 0; i < data.items.length; i++) {
        console.log(data.items[i]);

        let title = data.items[i].snippet.title;
        let videoID = data.items[i].id.videoId;
        let videoLink = `https://www.youtube.com/watch?v=${videoID}`
// Below Auto Invokes :(
        let thumbnail = `<a href='#' onclick=${selectVideo(videoID)}> 
                            <img src=${data.items[i].snippet.thumbnails.default.url}>
                        </a>`

// BEGIN THUMBNAIL TESTING - Still auto invokes
        // let thumbnail = `<input type="image" id=${videoID} src="${data.items[i].snippet.thumbnails.default.url}" 
        //     onclick=${selectVideo.bind(this)}/>`

        //     document.getElementById(`${videoID}`).onclick = function() {
                
        //     }();

// END TESTING

        document.getElementById('forEachResults').innerHTML +=
            thumbnail + ' ' + title + '<br>' + '<br>';
    }
}

// Displays selected video displayResults()
function selectVideo(videoCode) {
    console.log("made it")
    console.log(videoCode)


 let videoPlayer =
 `<iframe title="loopPlayer" width="560" height="315" src="https://www.youtube.com/embed/${videoCode}?loop=1&playlist=${videoCode}" frameborder="1" allowfullscreen></iframe>`;

document.getElementById("loopPlayer").innerHTML = videoPlayer;


// Local Storage works
localStorage.setItem('videoCode', `${videoCode}`)



    return false;
}