let pics=["1.png","2.png","3.png","4.png","5.png","6.png","1-6.jpg"]
function fun() {
    let a = Math.floor(Math.random()*6) + 1;
    document.getElementById("d1").src=pics[a-1];
}