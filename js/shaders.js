// this.bass = [20,140]
// this.lowMid = [140,400]
// this.mid = [400,2600]
// this.highMid = [2600, 5200]
// this.treble = [5200,1400]

let myShaders;
let audio;
let amp;
let fft;

function preload(){
    myShaders = loadShader('shaders/vertex.vert', 'shaders/fragment.frag')
    audio = loadSound('audio/02.mp3');
}

function setup(){
    const canvas = createCanvas(windowWidth, windowHeight, WEBGL)
    canvas.mouseClicked(togglePlay)

    // audio.setVolume(0.5)

    amp = new p5.Amplitude()
    fft = new p5.FFT()

    shader(myShaders)
}

function draw(){
    background(0)

    fft.analyze()

    const volume = amp.getLevel() // 0 -1
    let freq = fft.getCentroid() // 0 -25
    freq*=0.001
    // console.log(freq)
    

    const mapF = map(freq, 0, 1, 0, 20)
    const mapA = map(volume, 0, 0.1, 0, 0.1)

    myShaders.setUniform('uTime', frameCount)

    myShaders.setUniform('uFreq', mapF)
    myShaders.setUniform('uAmp', mapA)

    sphere(width / 4, 200, 200)

}

function togglePlay(){
    if(audio.isPlaying()){
        audio.pause()
    }else{
        audio.loop()
    }
}