Status = "";
bedroom_image = "";

function preload(){
    bedroom_image = loadImage("bedroom.PNG");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(bedroom_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw() {
    image(tv_image, 0, 0, 640, 420);

    fill("#FF0000");
    text("table", 320 , 120);
    noFill();
    stroke("#FF0000");
    rect(300 ,90 , 270 , 320);
}