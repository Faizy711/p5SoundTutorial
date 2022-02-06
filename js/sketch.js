let audio
let fft
const bins = 64 * 4
let binWidth
let beatDetectBass
let beatDetectSnare
let bgColor = 255
let binColor
let amp
let volume
let spectrum
let progress

// this.bass = [20,140]
// this.lowMid = [140,400]
// this.mid = [400,2600]
// this.highMid = [2600, 5200]
// this.treble = [5200,1400]

function preload() {
    audio = loadSound('audio/02.mp3');
}

function setup() {
    const canvas = createCanvas(windowWidth, 400)
    canvas.parent("canvasHtml")
    canvas.mouseClicked(togglePlay)

    fft = new p5.FFT(0.5, bins)
    amp = new p5.Amplitude()

    beatDetectBass = new p5.peakDetect(20, 140, 0.3)
    beatDetectBass.onPeak(triggerBass)

    beatDetectSnare = new p5.peakDetect(140, 400, 0.1)
    beatDetectSnare.onPeak(triggerSnare)

    binWidth = width / bins
    binColor = color(random(100), random(100), random(100))
}

function draw() {
    // background(bgColor)
    progress = map(audio.currentTime(), 0, audio.duration(), 255, 0)
    // spectrum = fft.analyze()
    drawWaveform()
    drawCircle()

    spectrum = fft.analyze()
    beatDetectBass.update(fft)
    beatDetectSnare.update(fft)
    

    // drawFFT()
    if (audio.currentTime() > 6 && audio.currentTime() < 12) {
        // clear()
        background(bgColor)
        // console.log("Hey")
        spectrum = fft.analyze()
        drawCircle()
        drawWaveform()
        drawFFT()
        
    }

    if (audio.currentTime() > 18 && audio.currentTime() < 24) {

        background(bgColor)

        spectrum = fft.analyze()
        drawCircle()
        drawWaveform()
        drawFFT()
    }
    if (audio.currentTime() > 30 && audio.currentTime() < 36) {
        background(bgColor)
        // console.log("Hey3")
        spectrum = fft.analyze()
        drawCircle()
        drawWaveform()
        drawFFT()
    }

    if (audio.currentTime() > 42 && audio.currentTime() < 48) {
        background(bgColor)
        // console.log("Hey3")
        spectrum = fft.analyze()
        drawCircle()
        drawWaveform()
        drawFFT()
    }

    if (audio.currentTime() > 54 && audio.currentTime() < 60) {
        background(bgColor)
        // console.log("Hey3")
        spectrum = fft.analyze()
        drawCircle()
        drawWaveform()
        drawFFT()
    }
    if (audio.currentTime() > 66 && audio.currentTime() < 72) {
        background(bgColor)
        // console.log("Hey3")
        spectrum = fft.analyze()
        drawCircle()
        drawWaveform()
        drawFFT()
    }
    if (audio.currentTime() > 78 && audio.currentTime() < 84) {
        background(bgColor)
        // console.log("Hey3")
        spectrum = fft.analyze()
        drawCircle()
        drawWaveform()
        drawFFT()
    }
    if (audio.currentTime() > 90 && audio.currentTime() < 96) {
        background(bgColor)
        // console.log("Hey3")
        spectrum = fft.analyze()
        drawCircle()
        drawWaveform()
        drawFFT()
    }
    if (audio.currentTime() > 102 && audio.currentTime() < 108) {
        background(bgColor)
        // console.log("Hey3")
        spectrum = fft.analyze()
        drawCircle()
        drawWaveform()
        drawFFT()
    }
    if (audio.currentTime() > 114 && audio.currentTime() < 120) {
        background(bgColor)
        // console.log("Hey3")
        spectrum = fft.analyze()
        drawCircle()
        drawWaveform()
        drawFFT()
    }

    const level = amp.getLevel()



}

function drawWaveform() {
    const waveform = fft.waveform()
    push()
    noFill()
    stroke('cyan')
    beginShape()
    for (let i = 0; i < waveform.length; i++) {
        const x = map(i, 0, waveform.length, 0, width)
        const y = map(waveform[i], -0.2, 0.2, 0, height)
        vertex(x, y)
    }
    endShape()
    pop()
}

function drawFFT() {
    noStroke()
    for (let i = 0; i < spectrum.length; i++) {
        let y = map(spectrum[i], 0, 255, height, 0)
        push()
            // stroke(0)
            // strokeWeight(2)
            fill(binColor)
            rect(i * binWidth, y, binWidth, height - y)
        pop()
    }
}

function drawCircle() {
    const mid = fft.getEnergy('mid')
    const mapMid = map(mid, 100, 255, 0, windowHeight / 3)

    push()
        translate(windowWidth - 200, 400 / 2)
        fill(binColor)
        circle(0, 0, mapMid)
    pop()
}

function triggerSnare() {
    binColor = color(random(255), random(255), random(255))
}

function triggerBass() {
    bgColor = color(random(255), random(255), random(255))
}

function togglePlay() {
    if (audio.isPlaying()) {
        audio.pause()
    } else {
        audio.loop()
    }
}