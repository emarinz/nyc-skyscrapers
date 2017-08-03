/*global $*/

//height quiz on games page
$(document).ready(function(){
    $('#ansHgt').click(function() {
        var owtcHeight, usrFeet, usrFtoI, usrInches, usrHeight, usrOWTC;
        owtcHeight = 21312;
        usrFeet = document.getElementById('uhf').value;
        usrFtoI = usrFeet * 12;
        usrInches = document.getElementById('uhi').value;
        usrHeight = Number(usrFtoI) + Number(usrInches);
        usrOWTC = owtcHeight / usrHeight;
            if (usrOWTC == Infinity ) {
                $('#heightAnswer').hide(); //just in case
                $('#heightAnswer').html ("Please enter your height first and then click Calculate.");
                $('#heightAnswer').css('color', '#C40233');
                $('#heightAnswer').fadeIn(2000);  
            } else {
                $('#heightAnswer').hide(); //just in case
                $('#heightAnswer').html ("We would need " + (+usrOWTC.toFixed(2)) +  " of you!");
                $('#heightAnswer').css('color', '#11206f');
                $('#heightAnswer').fadeIn(2000);
                }
    });
});
            
            
//movie quiz on games page
$(document).ready(function(){
    $('#checkAnswer').click(function() {
        if ($('#opt3').prop('checked') == true) {
            $('#movieAnswer').hide(); //just in case
            $('#movieAnswer').html ("You are correct! Armageddon featured the Chrysler Building.");
            $('#movieAnswer').css('color', '#01761e');
            $('#movieAnswer').fadeIn(2000);
        } else {
            $('#movieAnswer').hide(); //just in case
            $('#movieAnswer').html ("Sorry, the correct answer is Armageddon.");
            $('#movieAnswer').css('color', '#C40233');
            $('#movieAnswer').fadeIn(2000);
        }
    }); 
});
