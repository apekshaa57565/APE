function updatestime() {
    const stime=new Date().toLocaleTimeString();
    document.getElementById("stime").textContent=stime;
}
updatestime();
setInterval(updatestime,1000);