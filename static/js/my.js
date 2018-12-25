function Today(){
  return moment.tz(new Date(),"America/Los_Angeles").format("YYYY-MM-DD");
}
function LocalTime(x){
  var y = new Date(x)
  return y.toLocaleTimeString([], {hour: '2-digit',minute: '2-digit'})
}
function GetLogo(x){
  switch (x) {
    default: break;
    case 'LAK':x = "la";break;
    case 'TBL':x = "tb";break;
    case 'NJD':x = "nj";break;
    case 'SJS':x = "sj";break;
    case 'VGK':x = "vgs";break;
  }
  return 'http://a1.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/scoreboard/'+x+'.png';
}

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-125822077-1');
