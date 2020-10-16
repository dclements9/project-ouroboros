// Test video:
//let video = 'Zp1FGa68mXI';

let video = '';

let videoPlayer = 
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/${video}?loop=1&playlist=${video}" frameborder="0" allowfullscreen></iframe>`;

document.getElementById("loopPlayer").innerHTML = videoPlayer;