//TODO: 
// 1. List all previous loops (More than most recent one)
// 2. Give choice to delete previous loops from cookie.

listPreviousLoops();

inputButton.addEventListener('click', function() {
    let video = '';
    const inputLink = document.getElementById("link").value

    if (inputLink === ''){
        document.getElementById("loopPlayer").innerHTML = 'Please Enter a YouTube Link to Begin the Loop';
    }else{
        video = retrieveVideoVariable(inputLink);
        let videoPlayer = 
            `<iframe title="loopPlayer" width="560" height="315" src="https://www.youtube.com/embed/${video}?loop=1&playlist=${video}" frameborder="1" allowfullscreen></iframe>`;
        document.getElementById("loopPlayer").innerHTML = videoPlayer;

        document.cookie=`previousLink=https://www.youtube.com/embed/${video}?loop=1&playlist=${video}`;
    }
});

function retrieveVideoVariable(fullLink) {
    const linkSplit = fullLink.split('=');

    return linkSplit[1];
}

function listPreviousLoops() {
    console.log(document.cookie)
    if (document.cookie){
        const cookies = document.cookie;
        const cookiesList = cookies.split('=');
        const cookieLink = cookiesList[3];
    
        let previousPlayer = `<iframe title="previousLoopPlayer" width="560" height="315" src="https://www.youtube.com/embed/${cookieLink}?loop=1&playlist=${cookieLink}" frameborder="1" allowfullscreen></iframe>`;
        document.getElementById("previousLoops").innerHTML = previousPlayer;
    }else{
        document.getElementById("previousLoops").innerHTML = "Get to Looping";
    }
 }