let root=document.body;
let clock=document.createElement("div");
clock.innerHTML=
    '<div id="full-clock">\n' +
    '       <div id="clock">\n' +
    '           <div id="clock-hours">\n' +
    '               <div>1</div>\n' +
    '               <div>2</div>\n' +
    '               <div>3</div>\n' +
    '               <div>4</div>\n' +
    '               <div>5</div>\n' +
    '               <div>6</div>\n' +
    '               <div>7</div>\n' +
    '               <div>8</div>\n' +
    '               <div>9</div>\n' +
    '               <div>10</div>\n' +
    '               <div>11</div>\n' +
    '               <div>12</div>\n' +
    '           </div>\n' +
    '           <div id="hour">\n' +
    '               <div id="h"></div>\n' +
    '           </div>\n' +
    '           <div id="min">\n' +
    '               <div id="m"></div>\n' +
    '           </div>\n' +
    '           <div id="sec">\n' +
    '               <div id="s"></div>\n' +
    '           </div>\n' +
    '       </div>\n' +
    '       <div id="expend">\n' +
    '       </div>\n' +
    '   </div>';
let style=document.createElement("style");
style.innerHTML=
    '        #full-clock{\n' +
    '            position: fixed;\n' +
    '            bottom: 5%;\n' +
    '            right: 3%;\n' +
    '            width: 100px;\n' +
    '            height: 100px;\n' +
    '            z-index:9999' +
    '        }\n' +
    '        #clock{\n' +
    '            transition: .3s all ease-in-out;\n' +
    '            width:0px;\n' +
    '            height: 0px;\n' +
    '            overflow: hidden;\n' +
    '            font-size: 11px;\n' +
    '            background-color: #091921;\n' +
    '            display: flex;\n' +
    '            justify-content: center;\n' +
    '            align-content: center;\n' +
    '            align-items: center;\n' +
    '            border-radius: 50%;\n' +
    '            box-shadow: 0px -15px 15px rgba(255,255,255,0.05),\n' +
    '                        inset 0px -15px 15px rgba(255,255,255,0.05),\n' +
    '                        0px 15px 15px rgba(0,0,0,0.3),\n' +
    '                        inset 0px 15px 15px rgba(0,0,0,0.3);\n' +
    '            position: relative;\n' +
    '        }\n' +
    '        #clock:before{\n' +
    '            content: \'\';\n' +
    '            margin: auto;\n' +
    '            position: absolute;\n' +
    '            width: 6%;\n' +
    '            height: 6%;\n' +
    '            border-radius: 50%;\n' +
    '            background-color: white;\n' +
    '            z-index: 999;\n' +
    '        }\n' +
    '        #hour,#min,#sec{\n' +
    '            position: absolute;' +
    '            transition: 1s all linear;\n' +
    '        }\n' +
    '        #clock #hour #h{\n' +
    '            width: 50px;\n' +
    '            height: 78px;\n' +
    '        }\n' +
    '        #clock #min #m{\n' +
    '            width: 36px;\n' +
    '            height: 37px;\n' +
    '\n' +
    '        }\n' +
    '        #clock #sec #s{\n' +
    '            width: 30px;\n' +
    '            height: 50px;\n' +
    '\n' +
    '        }\n' +
    '        #h,#m,#s{\n' +
    '            display: flex;\n' +
    '            justify-content: center;\n' +
    '            align-items: center;\n' +
    '            align-content: center;' +
    '        }\n' +
    '        #h:before{\n' +
    '            content: \'\';\n' +
    '            position: absolute;\n' +
    '            width: 6%;\n' +
    '            height: 30%;\n' +
    '            background-color: #ff105e;\n' +
    '            border-radius: 3px 3px 0 0;\n' +
    '            top:15%;\n' +
    '        }\n' +
    '        #m:before{\n' +
    '            content: \'\';\n' +
    '            position: absolute;\n' +
    '            width: 4%;\n' +
    '            height: 95%;\n' +
    '            background-color: white;\n' +
    '            border-radius: 3px 3px 0 0;\n' +
    '            top:-40%;\n' +
    '        }\n' +
    '        #s:before{\n' +
    '            content: \'\';\n' +
    '            position: absolute;\n' +
    '            width: 2%;\n' +
    '            height: 100%;\n' +
    '            background-color: white;\n' +
    '            border-radius: 3px 3px 0 0;\n' +
    '            top:-30%;\n' +
    '        }\n' +
    '        #clock-hours div{\n' +
    '            color: white;\n' +
    '            position: absolute;\n' +
    '        }\n' +
    '        #clock-hours div:nth-child(1){\n' +
    '            top: 16.6666667%;\n' +
    '            left:66.6666667%;\n' +
    '            transform: translate(16.6666667%,-66.6666667%);\n' +
    '         }\n' +
    '        #clock-hours div:nth-child(2){\n' +
    '            top:33.3333333%;\n' +
    '            left:83.3333333%;\n' +
    '            transform: translate(33.3333333%,-83.3333333%);\n' +
    '        }\n' +
    '        #clock-hours div:nth-child(3){\n' +
    '            top:50%;\n' +
    '            left: 100%;\n' +
    '            transform: translate(-150%,-50%);\n' +
    '        }\n' +
    '        #clock-hours div:nth-child(4){\n' +
    '            top:66.6666667%;\n' +
    '            right: 16.6666667%;\n' +
    '            transform: translate(66.6666667%,-16.6666667%);\n' +
    '        }\n' +
    '        #clock-hours div:nth-child(5){\n' +
    '            top:83.3333333%;\n' +
    '            right:33.3333333% ;\n' +
    '            transform: translate(83.3333333%,-33.3333333%);\n' +
    '        }\n' +
    '        #clock-hours div:nth-child(6){\n' +
    '            top:100%;\n' +
    '            right: 50%;\n' +
    '            transform: translate(50%,-100%);\n' +
    '        }\n' +
    '        #clock-hours div:nth-child(7){\n' +
    '            bottom: 16.6666667%;\n' +
    '            right: 66.6666667%;\n' +
    '            transform: translate(-16.6666667%,66.6666667%);\n' +
    '        }\n' +
    '        #clock-hours div:nth-child(8){\n' +
    '            bottom:33.3333333%;\n' +
    '            right: 83.3333333%;\n' +
    '            transform: translate(-33.3333333%,83.3333333%);\n' +
    '        }\n' +
    '        #clock-hours div:nth-child(9){\n' +
    '            bottom:50%;\n' +
    '            right: 100%;\n' +
    '            transform: translate(150%,50%);\n' +
    '        }\n' +
    '        #clock-hours div:nth-child(10){\n' +
    '            bottom:66.6666667%;\n' +
    '            left: 16.3333334%;\n' +
    '            transform: translate(-66.6666667%,16.3333334%);\n' +
    '        }\n' +
    '        #clock-hours div:nth-child(11){\n' +
    '            bottom:83.3333333%;\n' +
    '            left:33.3333333%;\n' +
    '            transform: translate(-83.3333333%,33.3333333%);\n' +
    '        }\n' +
    '        #clock-hours div:nth-child(12){\n' +
    '            bottom:100%;\n' +
    '            left: 50%;\n' +
    '            transform: translate(-50%,100%);\n' +
    '        }\n' +
    '        #expend {\n' +
    '            width: 15px;\n' +
    '            height: 15px;\n' +
    '            background-color: #ff105e;\n' +
    '            border-radius: 50%;\n' +
    '            margin: auto;\n' +
    '            cursor: pointer;\n' +
    '            position: absolute;\n' +
    '            bottom: 0%;\n' +
    '            right: 0%;\n' +
    '            transform: translate(-50%,-50%);\n' +
    '        }';
clock.appendChild(style);
root.appendChild(clock);
/*****************************************javaScript***********************************/
function _$(id){
    return document.getElementById(id);
}
function show_hide_clock(){
    let exp=_$("expend");
    let clock_div=_$("clock");
    var clock_close;
    clock_div.addEventListener("click", ()=>{
        _$("clock-hours").style.display="none";
        clock_div.style.height = "0px";
        clock_div.style.width = "0px";
        clock_div.style.border="none";
        clock_div.style.display="none";
        exp.style.display="block";
        clearInterval(clock_close);
    });
    exp.addEventListener("click",()=>{
        _$("clock-hours").style.display="block";
        clock_div.style.height = "120px";
        clock_div.style.width = "120px";
        clock_div.style.border="4px solid #091921";
        exp.style.display="none";
        clock_div.style.display="flex";
        clock_close=setInterval(()=>{
            _$("clock-hours").style.display="none";
            clock_div.style.height = "0px";
            clock_div.style.width = "0px";
            clock_div.style.border="none";
            clock_div.style.display="none";
            exp.style.display="block";
            clearInterval(clock_close);
        },10000);
    });
}
function work_clock() {
    const deg=6;
    let hr=_$("hour");
    let mn=_$("min");
    let sc=_$("sec");
    setInterval(() => {
        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * deg;
        let sec = day.getSeconds() * deg;
        hh = (hh) + (mm / 12);
        hr.style.transform = "rotateZ(" + hh + "deg";
        mn.style.transform = "rotateZ(" + mm + "deg)";
        sc.style.transform = "rotateZ(" + sec + "deg)";
    }, 1000);
}
work_clock();
show_hide_clock();