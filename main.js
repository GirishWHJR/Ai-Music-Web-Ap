song="music.mp2";
song2="music2.mp3";
LeftwristX= 0;
LeftwristY= 0;
RightwristX = 0;
RightwristY = 0;
scoreLeftwrist= 0;
scoreRightwrist=0;
status="";

function preload()
{
    song= loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet =ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function draw()
{
    image(video, 0, 0, 600, 500,);
    fill("#FF0000");
    stroke("#FF0000");
    
}



function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftwrist= results[0].pose.keypoints[9].score;
        console.log("scoreLeftwrist =" +scoreLeftwrist);
        LeftwristX = results[0].pose.leftWrist.x;
        LeftwristY = results[0].pose.leftWrist.y
        console.log("LeftwristX = " + LeftwristX + "LeftwristY = " + LeftwristY);

        scoreRightwrist= results[0].pose.keypoints[10].score;
        console.log("scoreRightwrist=" +scoreRightwrist);
        RightwristX= results[0].pose.rightWrist.x;
        RightwristY= results[0].pose.rightWrist.y;
        console.log("RightwristX = " + RightwristX + "RightwristY = " +RightwristY);
    }
}










