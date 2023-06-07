function preload()
{
}

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(500, 200);

    canvas = createCanvas(550, 550);
    canvas.position(1100, 200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function draw() {
    background('#2a52be')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}