noseX=0;
noseY=0;
gogglesX=0;
gogglesY=0;

function preload(){
 clown_mustache = loadImage('https://i.postimg.cc/4yKgNPm9/21-214300-mustache-production-on-scratch-emoji-moustache-clipart.png');
 clown_goggles = loadImage('https://i.postimg.cc/QMF5r93n/dark-sunglasses-emoji-by-google.png');

}

function setup(){
    canvas= createCanvas(640, 450);
    canvas.position(350, 200);
    video= createCapture(VIDEO);
    video.hide();

    tint_color="";

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("PoseNet Is Initialized");
}

function gotPoses(results){
    if (results.length >0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x-35;
        noseY= results[0].pose.nose.y+15;
        console.log("Mustache x --> "+noseX);
        console.log("Mustache y --> "+noseY);

        
        gogglesX= results[0].pose.nose.x-110;
        gogglesY= results[0].pose.nose.y-120;
        console.log("Goggles x --> "+gogglesX);
        console.log("Goggless y --> "+gogglesY);
    }
}

function draw(){
    image(video, 0,0,640,480);
    tint(tint_color);
    rect(0,0,640,30);
    rect(0,0,30,450);
    rect(610,0,30,450);
    rect(0,420,640,30);
    fill(230, 230, 230);

    circle(16,16,29);
    circle(625,16,29);
    circle(625,435,29);
    circle(16,435,29);
    
    fill(11, 7, 117);

    image(clown_mustache, noseX, noseY, 70,20);
    image(clown_goggles, gogglesX, gogglesY , 200,150);
}

function take_snapshot(){
    save('My_Clown_Image.png');
}