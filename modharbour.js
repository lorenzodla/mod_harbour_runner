function RunCode( cCode ){
    var o = new Object();

    o['source'] = cCode;
    console.log('PARAM', o);

    $.post("https://modharbour.org/modharbour_samples/run.prg", o)
    .done(function(data){console.log('DONE', data); $('#code').html(data);})
    .fail(function(data){console.log('ERROR', data);});
}
  
function RunPrg( file ){
	var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                RunCode(rawFile.responseText);
            }
        }
    }
    rawFile.send(null);
}

function RunFromDiv(){
   var myDiv = document.getElementById('code');
   RunCode( myDiv.innerHTML );
}
