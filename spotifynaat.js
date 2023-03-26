console.log ("Welcome to Spotify")


// initialization
let songindex = 0;
let audioElement = new Audio('2.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let timestamp=document.getElementsByClassName('timestamp');
let songtime=  document.getElementsByClassName('songtime')



let songs = [
    { songName: "Ambassador-FairyTail", filePath: "1.mp3", coverPath: "1.jpg" },
    { songName: "Agency - Talha Anjum ", filePath: "2.mp3", coverPath: "2.jpg" },
    { songName: "Mera Dil Ye Pukare Aaja Remix ", filePath: "3.mp3", coverPath: "3.jpg" },
    { songName: "Banjara-Lofi[Slowed+Reverb]", filePath: "4.mp3", coverPath: "4.jpg" },
    { songName: "Daku[Slowed+Reverb]", filePath: "5.mp3", coverPath: "5.jpg" },
    { songName: "Hardy Sandhu -Backbone ", filePath: "6.mp3", coverPath: "6.jpg" },
    { songName: "Insane -[Slowed+Reverb]", filePath: "7.mp3", coverPath: "7.jpg" },
    { songName: "60 mins of Hindi Lofi Songs ", filePath: "8.mp3", coverPath: "8.jpg" },
    { songName: "NO-LOVE [Slowed+Reverb] ", filePath: "9.mp3", coverPath: "9.jpg" },
    { songName: "DIVINE-3:59[Slowed+Reverb]", filePath: "10.mp3", coverPath: "10.jpg" },
    { songName: "SAMJHAWAN -Arjit Singh", filePath: "11.mp3", coverPath: "11.jpg" }

]
songitem.forEach((element, i) => {


    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songName;

}
)


//  audioElement.play()

// handel play or pause
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.add('fa-play-circle');
        masterplay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }
})
// listen to event
audioElement.addEventListener('timeupdate', () => {

    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)

    myprogressbar.value = progress;
 
    
})
myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})



const makeAllPlays = () => {

    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        gif.style.opacity = 1;
    })


}



// changing song name

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {

        makeAllPlays();
        if (audioElement.paused || audioElement.currentTime <= 0) {
         songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src =  `${songindex}.mp3`;
        mastersongname.innerText = songs[songindex].songName;
         audioElement.currentTime = 0;
         audioElement.play();
        gif.style.opacity = 1; 
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    }

        else{
            audioElement.pause()
        }
       
    })
})

// next song
document.getElementById('next').addEventListener('click', () => {
    if (songindex >= 10) {
        songindex = 0;
    }
    else {
        songindex += 1;
    }
     
     audioElement.src =  `${songindex}.mp3`;
     mastersongname.innerText = songs[songindex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})


// previous song

document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 0) {
        songindex -= 1;
    }
    else {

        songindex -= 1;
    }

    audioElement.src =  `${songindex}.mp3`;
    mastersongname.innerText = songs[songindex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})


