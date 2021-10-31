function navBack_bedroom(){
    window.location.replace("main_page.html");
}

img = "";
Status = "";

function setup(){
    canvas = createCanvas(640 , 460);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd' , modelLoaded)
    document.getElementById("status_bedroom").innerHTML = "Status: Detecting Objects...";
}

function modelLoaded(){
    console.log("Model Loaded!!!");
    Status = true;
    objectDetector.detect(img , gotResult);
}

function gotResult(error , results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function preload(){
    img = loadImage("MasterBED.jpg");
}

function draw(){
    image(img , 0 , 0 , 640 , 460);
}