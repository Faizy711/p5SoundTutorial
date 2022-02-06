//Beat detection Example

let audio
let fft
const bins = 64
let binWidth
let peakDetect
let bgColor = 0

// this.bass = [20,140]
// this.lowMid = [140,400]
// this.mid = [400,2600]
// this.highMid = [2600, 5200]
// this.treble = [5200,1400]

function preload(){
    audio = loadSound('audio/02.mp3');
}

function setup(){
    const canvas = createCanvas(windowWidth, windowHeight)
    canvas.mouseClicked(togglePlay)

    fft = new p5.FFT()
    audio.setVolume(0.5)

    // binWidth = width/ bins
    peakDetect = new p5.PeakDetect(140,400,0.5)

    peakDetect.onPeak(peakDetected)
}

function draw(){
    background(bgColor)
    noStroke()

    // const spectrum = fft.analyze()
    fft.analyze(bins)

    peakDetect.update(fft)

    // for(let i = 0; i < spectrum.length; i++){
    //     const y = map(spectrum[i], 0, 255, height, 0)
    //     rect(i*binWidth,y,binWidth,height - y)
    // }
}

function peakDetected(){
    console.log('Peak Detected')
    bgColor = color(random(255),random(255),random(255))
}

//togglefunctio for clicking for audio play
function togglePlay(){
    if(audio.isPlaying()){
        audio.pause()
    }else{
        audio.loop()
    }
}