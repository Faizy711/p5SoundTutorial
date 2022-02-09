//Amplitude Example
let audio, amp, fft

function preload() {
    audio = loadSound('audio/01.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight)

    rectMode(CENTER)
    // strokeWeight(5)
    // audio.setVolume(0.5)
    console.log(audio)
    //audio volume set and play
    audio.setVolume(0.1)
    audio.play()

    //amplitude set up
    amp = new p5.Amplitude()

    fft = new p5.FFT()
    console.log(amp)
}

function draw() {
    background(0)
    stroke(225)
    // translate(0, height / 2)

    // fill(255, 0, 0)
    // stroke('yellow')
    // const mapX = map(mouseX, 0, width, 0, 500)
    // const mapY = map(mouseX, 0, height, 0, 500)


    // translate(width / 2, height / 2)
    console.log(amp.getLevel())
    
    
    //creates a wave spectrum line for audio
    const waveform = fft.waveform()
    for(let i =0; i<waveform.length;i++){
        const x = map(i, 0, waveform.length,0,width)
        const y = map(waveform[i], -1,1,0, height)
        point(x,y)
    }

    //creates a waveform of the audio
    // const volume = amp.getLevel()
    // const mapW = map(volume, 0 , 0.1, 0, 500)
    // const waveform = audio.getPeaks()
    // for(let i = 0; i<waveform.length; i++){
    //     line(i, waveform[i]*100, i, waveform[i]* -100)
    // };

    //shows the amplitude of the audio
    // console.log(amp.getLevel())


    //starts new drawing state 
    // push()
    //     fill(255,255,0 )
    //     ellipse(0,0,50)
    // pop()

    //rectangle
    // rect(0, 0, mapW, mapW)


}

//keypress switch function for arrow presses

// function keyPressed() {
//     switch (keyCode) {
//         case LEFT_ARROW:
//             posX -= 10
//             break;
//         case RIGHT_ARROW:
//             posX += 10
//             break;
//         case UP_ARROW:
//             posY -= 10
//             break;
//         case DOWN_ARROW:
//             posY += 10
//             break;
//         default:
//             break;
//     }
// }