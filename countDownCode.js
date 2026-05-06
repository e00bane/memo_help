function countDown(){
    currTime = 50;
    document.getElementById("countDownRes").innerHTML = currTime;

    for(var i = 0; i <= 10; i++){
        setTimeout(function(){
            if (currTime == 0){document.getElementById("countDownRes").innerHTML = "blastoff!!";}
            else if (currTime < 25){document.getElementById("countDownRes").innerHTML = "Warning Less than ½ way to launch, time left = " + currTime;}
            else{document.getElementById("countDownRes").innerHTML = "time left = " + currTime}

            currTime = currTime - 5;
        }, i * 5000);
    }
}

