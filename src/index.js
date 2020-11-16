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

        document.cookie=`previousLink=https://www.youtube.com/embed/${video}?loop=1&playlist=${video}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT"`;
//Local Storage testing

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
        // const cookiesList = cookies.split('=');
        // const cookieLink = cookiesList[3];
    
        let previousPlayer = `<iframe title="previousLoopPlayer" width="560" height="315" src="https://www.youtube.com/embed/${code}?loop=1&playlist=${code}" frameborder="1" allowfullscreen></iframe>`;
        document.getElementById("previousLoops").innerHTML = previousPlayer;
    }else{
        document.getElementById("previousLoops").innerHTML = "Get to Looping";
    }
 }