const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

const currentDate = new Date();
const currentMonthIndex = currentDate.getMonth();
const currentMonthName = months[currentMonthIndex-1];
document.getElementById("month").innerHTML="("+currentMonthName+")";
zero_7x =localStorage.getItem("zero_7x")
    onex=localStorage.getItem("onex")
    one_2x=localStorage.getItem("one_2x")
    one_4x=localStorage.getItem("one_4x")
    one_6x=localStorage.getItem("one_6x")
document.getElementById("inc").addEventListener('click', increment);
document.getElementById("dec").addEventListener('click', decrement);
document.getElementById("res").addEventListener('click', reset);
document.getElementById("multipliers").addEventListener('change', assign);
document.getElementById("toggleon").addEventListener('click', function(){lastmonthcount(zero_7x,onex,one_2x,one_4x,one_6x)});
document.getElementById("toggleoff").addEventListener('click', lastmonthcounthide);
let mul = "1"
let count = null;
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
    let result = confirm("All your monthly data will be deleted and transferred to the last month's statistics. Do you want to continue?")
    if (result) {
        let zero_7x = localStorage.getItem("0.75");
        let onex = localStorage.getItem("1");
        let one_2x = localStorage.getItem("1.2");
        let one_4x = localStorage.getItem("1.4");
        let one_6x = localStorage.getItem("1.6");
        localStorage.setItem("zero_7x",zero_7x)
        localStorage.setItem("onex",onex);
        localStorage.setItem("one_2x",one_2x)
        localStorage.setItem("one_4x",one_4x)
        localStorage.setItem("one_6x",one_6x)
        lastmonthcount(zero_7x,onex,one_2x,one_4x,one_6x);
        count = 0;
        document.getElementById("count").innerHTML = count;
        localStorage.setItem("0.75", 0);
        localStorage.setItem("1", 0);
        localStorage.setItem("1.2", 0);
        localStorage.setItem("1.4", 0);
        localStorage.setItem("1.6", 0);
        let time = new Date();
        time = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        localStorage.setItem("time", time)
        document.getElementById("time").innerHTML = "Last Save Time: " + time;
        localStorage.setItem(mul, count)
    }
}
function lastmonthcount(zero_7x,onex,one_2x,one_4x,one_6x) {
    document.getElementById("lastmonth").style.display = 'block';
    let lastmonthcount = document.getElementById("lastmonth");
    let text = `
    <p><span style="font-weight:bold;">0.75x:</span> ${zero_7x},
    <span style="font-weight:bold;">1x:</span> ${onex},
    <span style="font-weight:bold;">1.2x:</span> ${one_2x},
  <span style="font-weight:bold;">1.4x:</span> ${one_4x},
  <span style="font-weight:bold;">1.6x:</span> ${one_6x}</p>`
    lastmonthcount.innerHTML = text;
}
function lastmonthcounthide() {
    document.getElementById("lastmonth").style.display = 'none';
}