rightwristX=0;
leftwristX=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,400);

    canvas=createCanvas(550,400);
    canvas.position(560,100);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#E590F1');
    fill("black");
    textSize(difference);
text('Bhavya',60,400);
}

function modelLoaded(){
    console.log('Good to  Go!!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        rightwristX=results[0].pose.rightWrist.x;
        leftwristX=results[0].pose.leftWrist.x;

        console.log("rightWrist = "+rightwristX);
        console.log("leftWrist = "+leftwristX);

        difference=floor(rightwristX - leftwristX);
    
    }
}