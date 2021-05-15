// model -https://teachablemachine.withgoogle.com/models/kL0YQFDDZ/
function preload(){

}
function setup(){
    canvas = createCanvas(350,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/kL0YQFDDZ/model.json",modelLoaded);
}
function draw(){
    image(video, 0, 0, 350,350);
    classifier.classify(video, gotResult);
}

function modelLoaded(){
    console.log("Model Succesfuly Loaded!",ml5.version);
}
    


function gotResult(error, results){

    if(error){
        console.error(error);
    }
    else
    {
        document.getElementById("object_name").innerHTML = results[0].label;
        document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(3);
        console.log(results);
    }
    
    
}
