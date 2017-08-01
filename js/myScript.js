/*global $*/










$(document).ready(function(){
            $('#ansHgt').click(function() {
                
           var owtcHeight, usrFeet, usrFtoI, usrInches, usrHeight, usrOWTC;
            owtcHeight = 21312;
            usrFeet = document.getElementById('uhf').value;
            usrFtoI = usrFeet * 12;
            usrInches = document.getElementById('uhi').value;
            usrHeight = Number(usrFtoI) + Number(usrInches);
            usrOWTC = owtcHeight / usrHeight;
            $('#heightAnswer').hide(); //just in case
            $('#heightAnswer').html ("We would need " + usrOWTC +  " of you!");
            $('#heightAnswer').fadeIn(2000);
           
            });
});
            
            





function getAnswer() {
                if (document.getElementById("opt3").checked) {
                document.getElementById('movieAnswer').innerHTML = ("You are correct! Armageddon featured the Chrysler Building.");
                } else {
                document.getElementById('movieAnswer').innerHTML = ("Sorry, the correct answer is Armageddon.");
                }    
}
