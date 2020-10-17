inputButton.addEventListener('click', function() {
    let video = '';
    const inputLink = document.getElementById("link").value

    if (inputLink === ''){
        document.getElementById("loopPlayer").innerHTML = 'Please Enter a YouTube Link to Begin the Loop';
    }else{
        video = retrieveVideoVariable(inputLink);
        let videoPlayer = 
            `<iframe width="560" height="315" src="https://www.youtube.com/embed/${video}?loop=1&playlist=${video}" frameborder="1" allowfullscreen></iframe>`;
        document.getElementById("loopPlayer").innerHTML = videoPlayer;
    }
});

function retrieveVideoVariable(fullLink){
    const linkSplit = fullLink.split('=');

    return linkSplit[1];
}