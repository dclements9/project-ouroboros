listPreviousLoops();

inputButton.addEventListener('click', function() {
    let video = '';
    const inputLink = document.getElementById("linkInput").value

    if (inputLink === ''){
        document.getElementById("loopPlayer").innerHTML = 'Please Enter a YouTube Link to Begin the Loop';
    }else{
        video = retrieveVideoVariable(inputLink);
        let videoPlayer = 
            `<iframe title="loopPlayer" width="560" height="315" src="https://www.youtube.com/embed/${video}?loop=1&playlist=${video}" frameborder="1" allowfullscreen></iframe>`;
        document.getElementById("loopPlayer").innerHTML = videoPlayer;

        localStorage.setItem('videoCode', `${video}`)
        
    }
});

function retrieveVideoVariable(fullLink) {
    const linkSplit = fullLink.split('=');
    const secondLinkSplit = linkSplit[1].split('&');

    return secondLinkSplit[0];
}

function listPreviousLoops() {
    if (localStorage.getItem('videoCode')){
        const code = localStorage.getItem('videoCode')
    
        let previousPlayer = `<iframe title="previousLoopPlayer" width="560" height="315" src="https://www.youtube.com/embed/${code}?loop=1&playlist=${code}" frameborder="1" allowfullscreen></iframe>`;
        document.getElementById("previousLoops").innerHTML = previousPlayer;
    }else{
        document.getElementById("previousLoops").innerHTML = "Get to Looping";
    }
 }

 function testSearch(){
     // Begin Test Terms
    const searchTerms = ["factory%20functions","data%20structures", "array%20functions%20javascript", "composition%20over%20inheritance", "lambda%20functions", "streams%20java", "higher%20order%functions%javascript", "functional%20programming", "c++%20lambda%20functions", "sorting%20algorithms"];//a function to get a random search term
    const getSearchTerm = () => searchTerms[Math.floor(Math.random() * (searchTerms.length-1))];
    // End Test Terms
    const YOUTUBE_API_KEY = "AIzaSyBIv9avbAnnRGx73ScR5cfTwRKu6O1WmGI";
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${getSearchTerm()}&key=${YOUTUBE_API_KEY}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {    
        displayResults(data)
    });
}

function displayResults(data){
    for (let i = 0; i < data.items.length; i++){
        console.log(data.items[i]);

        let thumbnail = `<img src=${data.items[i].snippet.thumbnails.default.url}>`;
        let title = data.items[i].snippet.title;
        let videoID = data.items[i].id.videoId;
        let videoLink = `https://www.youtube.com/watch?v=${videoID}`

        let clickableLink = <a href={`https://www.youtube.com/watch?v=${videoID}`}> Test</a>

        document.getElementById('forEachResults').innerHTML += 
        thumbnail + videoLink + title + clickableLink + '<br>' + '<br>';
    }
}