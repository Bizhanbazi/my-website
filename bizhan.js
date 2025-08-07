const bizhan = prompt("what is your name")
document.getElementById("welcomeMessage").innerText="welcome ," + bizhan + "!";
function updateClock(){
    const now = new Date ();
    const date = now.toLocaleDateString();
    const time =now.toLocaleTimeString();
    document.getElementById("clock").innerText ="current Time:"+time +"|date:"+ date ;
}
setInterval(updateClock,1000);
updateClock();
function changeBackground(){
    const colors = ["lightblue", "lightgreen", "lightpink", "lavender", "peachpuff", "khaki", "skyblue"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor=colors[randomIndex]
} 