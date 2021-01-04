$(document).ready(function(){
    $('#fa-loading-btn-new').hide()
    $('#fa-loading-btn-start').hide()
    $('#fa-loading-btn-push').hide()

    chartGit();
    
    $('#btn-new').click( function() {load('btn-new')});
    $('#btn-start').click( function() {load('btn-start')});
    $('#btn-push').click( function() {load('btn-push')});
})



function load(idElement){

    $('#fa-loading-'+idElement).show()
    $('#text-'+idElement).hide()
    $('#progress-bar-'+idElement).css('width', '0%');

    // var charging = 0;
    // while(charging <= 100){
    //     $('#progress-bar-'+idElement).css('width', charging + '%');
    //     charging = charging + 10;
    // }

    setTimeout(function(){                
        $('#progress-bar-'+idElement).css('width', '100%');
    },4000);

    setTimeout(function(){                
        $('#fa-loading-'+idElement).hide()        
        $('#text-'+idElement).show()
    },4500);
    

}