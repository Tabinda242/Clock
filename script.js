var hr = document.getElementById('hr');
var mn = document.getElementById('mn');
var sc = document.getElementById('sc');

function Clock() {
   var date = new Date();
   var currentHour = date.getHours() % 12;            // 0-23 represent hour.
   var currentMinutes = date.getMinutes();          // 0-59 represent minutes.
   var currentSeconds =  date.getSeconds();         //0-59 represent the seconds.  

   var hourDeg = (currentHour * 30) + (0.5 * currentMinutes);
   var minDeg = (currentMinutes * 6) + (0.1 * currentSeconds);
   var secDeg = currentSeconds * 6;

   hr.style.transform = 'rotate(' + hourDeg + 'deg)';
   mn.style.transform = 'rotate(' + minDeg + 'deg)';
   sc.style.transform = 'rotate(' + secDeg + 'deg)';


    setTimeout(Clock, 1000);
};

Clock();