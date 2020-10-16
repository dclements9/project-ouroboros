//TODO: 
// 1. Add field for video input
// 2. Add function to sanitize video variable
// 3. Add function to display video in loopPlayer div 

// Test video:
//let video = 'Zp1FGa68mXI';




inputButton.addEventListener('click', function() {
    let video = '';
    const inputLink = document.getElementById("link").value

    if (inputLink === ''){
        document.getElementById("loopPlayer").innerHTML = 'Please Enter a YouTube Link to Begin the Loop';
    }else{
        video = retrieveVideoVariable(inputLink);
        let videoPlayer = 
            `<iframe width="560" height="315" src="https://www.youtube.com/embed/${video}?loop=1&playlist=${video}" frameborder="0" allowfullscreen></iframe>`;
        document.getElementById("loopPlayer").innerHTML = videoPlayer;
    }
});

