// is this right? check old js apps
$(document).ready()
console.log('document loaded')

$("path, circle").hover(function(e) {
  $('#info-box').css('display','block');
  $('#info-box').html($(this).data('info'));
});

$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});

$(document).mousemove(function(e) {
  $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
  $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
}).mouseover();

var toNumber = function(str) {
  return parseInt(str.replace(",", ""))
}

$("#vcStatsButton").click(function() {
  for(i = 0; i < stats.stats.length; i++){
    // console.log(parseInt(stats.stats[i].Crime['Violent crime']) / 100000)
    var pcStats = toNumber(stats.stats[i].Crime['Property crime'])
    var vcStats = toNumber(stats.stats[i].Crime['Violent crime'])
      
    var avgVcMap = parseFloat((vcStats / 100000)).toFixed(1)
    var avgPcMap = parseFloat((pcStats / 100000)).toFixed(1)
    
    var stateID = stats.stats[i].ID
    var changeThisLaterOn = parseFloat(parseFloat(avgVcMap).toFixed(1))
    // $('#' + stateID).css("fill", "red")  
    console.log(parseFloat(avgVcMap))
    switch (avgVcMap) {
      // case "1.0":
      //   $('#' + stateID).css("fill", "aqua")
      //   break;
      case "0.9":
        $('#' + stateID).css("fill", "aquamarine")
        break;
      case "0.8":
        $('#' + stateID).css("fill", "azure")
        break;
      case "0.7":
        $('#' + stateID).css("fill", "blue")
        break;
      case "0.6":
        $('#' + stateID).css("fill", "blueviolet")
        break;
      case "0.5":
        $('#' + stateID).css("fill", "cadetblue")
        break;
      case "0.4":
        $('#' + stateID).css("fill", "cornflowerblue")
        break;
      case "0.3":
        $('#' + stateID).css("fill", "darkblue")
        break;
      case "0.2":
        $('#' + stateID).css("fill", "darkcyan")
        break;
      case "0.1":
        $('#' + stateID).css("fill", "dodgerblue")
        break;
      case "0.0":
        $("#" + stateID).css("fill", "green")
        break;
      default:
        $('#' + stateID).css("fill", "aqua")
        break;
    } 
    // console.log(avgVcMap)
  }  
})

$("#pcStatsButton").click(function() {
  for(i = 0; i < stats.stats.length; i++){
    // console.log(parseInt(stats.stats[i].Crime['Violent crime']) / 100000)
    var pcStats = toNumber(stats.stats[i].Crime['Property crime'])
    var vcStats = toNumber(stats.stats[i].Crime['Violent crime'])
      
    var avgVcMap = parseFloat((vcStats / 100000)).toFixed(1)
    var avgPcMap = parseFloat((pcStats / 100000)).toFixed(1)
    
    var stateID = stats.stats[i].ID
    var changeThisLaterOn = parseFloat(parseFloat(avgPcMap).toFixed(1))
    // $('#' + stateID).css("fill", "red")  
    console.log(parseFloat(avgPcMap))
    switch (avgPcMap) {
      // case "1.0":
      //   $('#' + stateID).css("fill", "aqua")
      //   break;
      case "0.9":
        $('#' + stateID).css("fill", "orange")
        break;
      case "0.8":
        $('#' + stateID).css("fill", "azure")
        break;
      case "0.7":
        $('#' + stateID).css("fill", "blue")
        break;
      case "0.6":
        $('#' + stateID).css("fill", "blueviolet")
        break;
      case "0.5":
        $('#' + stateID).css("fill", "cadetblue")
        break;
      case "0.4":
        $('#' + stateID).css("fill", "cornflowerblue")
        break;
      case "0.3":
        $('#' + stateID).css("fill", "darkblue")
        break;
      case "0.2":
        $('#' + stateID).css("fill", "darkcyan")
        break;
      case "0.1":
        $('#' + stateID).css("fill", "dodgerblue")
        break;
      case "0.0":
        $("#" + stateID).css("fill", "green")
        break;
      default:
        $('#' + stateID).css("fill", "aqua")
        break;
    } 
    // console.log(avgVcMap)
  }
})

// var pcStats = toNumber(stats.stats[i].Crime['Property crime'])
// var vcStats = toNumber(stats.stats[i].Crime['Violent crime'])
// var avgVcMap = parseFloat(vcStats).toFixed(1)
// console.log(vcStats, avgVcMap)

$('path,circle,g').click(function(event){
  event.stopPropagation();
  var data = stats.stats.filter(function(stat){
    return stat.ID === event.target.id
  }).pop()

  var avgVc = (toNumber(data.Crime['Violent crime']) / 100000).toFixed(2)
  var avgPc = (toNumber(data.Crime['Property crime']) / 100000).toFixed(2)

  // console.log(avgVcMap);
  // console.log(avgPc)

  var template = `
    Data estimates the number of offenses and the rate of crime per 100,000 inhabitants.
    <br /><br />
    <strong>Population</strong>: ${data.Population}<br /><br />
    <font size="4"><strong>Violent Crimes (${data.Crime['Violent crime']} (${avgVc}%))</strong></font><br />
    <strong>Murder and nonnegligent manslaughter</strong>: ${data.Crime['Murder and nonnegligent manslaughter']}<br />
    <strong>Rape (revised definition)</strong>: ${data.Crime['Rape (revised definition)']}<br />
    <strong>Rape (legacy definition)</strong>: ${data.Crime['Rape (legacy definition)']}<br />
    <strong>Robbery</strong>: ${data.Crime.Robbery}<br />
    <strong>Aggravated assault</strong>: ${data.Crime['Aggravated assault']}<br /><br />
    <font size="4"><strong>Property Crimes (${data.Crime['Property crime']} (${avgPc}%))</strong></font><br />
    <strong>Burglary</strong>: ${data.Crime.Burglary}<br />
    <strong>Larceny-theft</strong>: ${data.Crime['Larceny-theft']}<br />
    <strong>Motor vehicle theft</strong>: ${data.Crime['Motor vehicle theft']}
    `

  $('#stateName').html(data.State)
  $(".crime-stats-detail .modal-body").html(template)
  console.log(data)
  $(".details-button").click();
});

// function()

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() { 
    var link = $(this).attr('href');   
    window.open(link,'_blank');
    return false;
  });
}