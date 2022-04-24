function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 550);
    video.position(300,150)

    canvas = createCanvas(550, 550,);
    canvas.position(1100,150);

    poseNet = ml5.poseNet(video, modelLoaded);
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}
function modelLoaded()
{
    console.log('PoseNet Is Initialized')
}
function draw()
{
    background('#ffff00');
}
