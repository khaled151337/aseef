

setInterval(function(){
    let date = new Date();

    let getHour = date.getHours();
    let getMin = date.getMinutes();
    let getSec = date.getSeconds();

    let watch_hour = document.querySelector(".hour");
    let watch_minute = document.querySelector(".minute");
    let watch_second = document.querySelector(".second");
    let watch_ampm = document.querySelector(".ampm");

    if( 12 < getHour){
        getHour -= 12;
        watch_ampm.innerHTML = "PM";
    } else{
        watch_ampm.innerHTML = "AM";
    };

    if(getHour < 10){
        watch_hour.innerHTML = "0" + getHour;
    } else{
        watch_hour.innerHTML = `${getHour}`;
    };

    if(getMin < 10){
        watch_minute.innerHTML = "0" + getMin;
    } else{
        watch_minute.innerHTML = `${getMin}`;
    };

    if(getSec < 10){
        watch_second.innerHTML = "0" + getSec;
    } else {
        watch_second.innerHTML = `${getSec}`;
    };
    
});




window.addEventListener("scroll", function() {
    let after = this.document.querySelector("#after");
    let container = this.document.querySelector("#container");

    useTop = this.document.documentElement.scrollTop;

    if(useTop > 100){
        after.style.display = "block";
        // after.style.marginTop = `-70px`;
        after.classList.add("anymation_after");
    }
    else{
        after.style.display = "none";
    }
});

let bbody = document.querySelector("body");
let light = document.querySelector(".light");
let dark = document.querySelector(".dark");

light.addEventListener("click", function(){
    bbody.style.backgroundColor ='black';
    light.style.opacity = '0.4';
    dark.style.opacity = '1';
    light.style.width = '60px';
    dark.style.width = '50px';
});

dark.addEventListener("click", function(){
    bbody.style.backgroundColor ='white';
    light.style.opacity = '1';
    dark.style.opacity = '0.4';
    dark.style.width = '60px';
    light.style.width = '50px';
})