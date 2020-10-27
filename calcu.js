function showtime(){
    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    let session;
    if(h==12)
    {
        session="PM";
    }
      if(h>12){
        h=h-12;
        session="PM";
    }
   if(h<12)
   {
session="AM";
   }
  h=(h<10) ?"0"+h:h;
  m=(m<10) ?"0"+m:m;
  s=(s<10) ?"0"+s:s;
   let time=h+":"+m+":"+s+" "+session;
    document.getElementById('time').innerText=time;
}
    showtime();
setInterval(showtime,1000);