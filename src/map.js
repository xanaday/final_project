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

$('path,circle,g').click(function(event){
  event.stopPropagation();
  var data = stats.stats.filter(function(stat){
    return stat.ID === event.target.id
  }).pop()

  var toNumber = function(str) {
    return parseInt(str.replace(",", ""))
  }

  var avgVc = (toNumber(data.Crime['Violent crime']) / 100000).toFixed(2)
  var avgPc = (toNumber(data.Crime['Property crime']) / 100000).toFixed(2)
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

switch (key) {
  case value:
    
    break;

  default:
    break;
}

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() { 
    var link = $(this).attr('href');   
    window.open(link,'_blank');
    return false;
  });
}