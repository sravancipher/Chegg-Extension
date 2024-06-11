// document.getElementById("inc").addEventListener('click',increment);
// document.getElementById("dec").addEventListener('click',decrement);
// document.getElementById("res").addEventListener('click',reset);

// let count=localStorage.getItem("count");
// if(count==null){
//     document.getElementById("count").innerHTML="Counter is waiting for you";
//     count=0;
// }else{
//     let savetime=localStorage.getItem("time")
//     document.getElementById("time").innerHTML="Last Save Time: "+savetime;
//     document.getElementById("count").innerHTML=count;
// }

// function increment(){
//     count++;
//     document.getElementById("count").innerHTML=count;
//     let time=new Date();
// time=time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
//     localStorage.setItem("time",time)
//     document.getElementById("time").innerHTML="Last Save Time: "+time;
//     localStorage.setItem("count",count)
// }
// function decrement(){

//     if(count<=0){
//         document.getElementById("count").innerHTML="Sorry we can't";    
//     }
//     else{
//         count--;
//     document.getElementById("count").innerHTML=count;
//     let time=new Date();
//     time=time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
//     localStorage.setItem("time",time)
//     document.getElementById("time").innerHTML="Last Save Time: "+time;
//     localStorage.setItem("count",count)
//     }
// }
// function reset(){
//     count=0;
//     document.getElementById("count").innerHTML=count;
//     let time=new Date();
// time=time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
//     localStorage.setItem("time",time)
//     document.getElementById("time").innerHTML="Last Save Time: "+time;
//     localStorage.setItem("count",count)
// }

document.getElementById("inc").addEventListener('click', increment);
document.getElementById("dec").addEventListener('click', decrement);
document.getElementById("res").addEventListener('click', reset);
document.getElementById("multipliers").addEventListener('change', assign);

let mul = "1"
let count=null;
console.log(count)
mul = document.getElementById("multipliers").value;
count = localStorage.getItem(mul);
if (count == null) {
    document.getElementById("count").innerHTML = "Counter is waiting for you";
    count = 0;
} else {
    let savetime = localStorage.getItem("time")
    document.getElementById("time").innerHTML = "Last Save Time: " + savetime;
    document.getElementById("count").innerHTML = count;
}
function assign() {
    mul = document.getElementById("multipliers").value;
    count = localStorage.getItem(mul);
    if (count == null) {
        document.getElementById("count").innerHTML = "Counter is waiting for you";
        count = 0;
    } else {
        let savetime = localStorage.getItem("time")
        document.getElementById("time").innerHTML = "Last Save Time: " + savetime;
        document.getElementById("count").innerHTML = count;
    }
}
function increment() {
    count++;
    document.getElementById("count").innerHTML = count;
    let time = new Date();
    time = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    localStorage.setItem("time", time)
    document.getElementById("time").innerHTML = "Last Save Time: " + time;
    localStorage.setItem(mul, count)
}
function decrement() {

    if (count <= 0) {
        document.getElementById("count").innerHTML = "Sorry we can't";
    }
    else {
        count--;
        document.getElementById("count").innerHTML = count;
        let time = new Date();
        time = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        localStorage.setItem("time", time)
        document.getElementById("time").innerHTML = "Last Save Time: " + time;
        localStorage.setItem(mul, count)
    }
}
function reset() {
    count = 0;
    document.getElementById("count").innerHTML = count;
    let time = new Date();
    time = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    localStorage.setItem("time", time)
    document.getElementById("time").innerHTML = "Last Save Time: " + time;
    localStorage.setItem(mul, count)
}
