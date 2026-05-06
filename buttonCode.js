function start(){
    console.log("start() method started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;

}
function stop(){
    console.log("stop() method started");
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}