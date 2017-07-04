/*JS*/

$(document).ready(function(){
    $('#big').click(function(){
        console.log("bien ref");
        if ($(".desaparecer").length > 0) {
            $('.all-films').removeClass('desaparecer');
        } else {
            $('.all-films').addClass('desaparecer');
        }
        
    });
    
});