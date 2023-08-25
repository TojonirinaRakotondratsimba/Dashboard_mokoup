e=true;
function changer() {
    if(e) {
        document.getElementById("password").setAttribute("type","text");
        document.getElementById("eye").src="assets/images/icons/eye-afficer.png";
        e=false;
    }
    else  {
        document.getElementById("password").setAttribute("type","password");
        document.getElementById("eye").src="assets/images/icons/eye-masquer.png";
        e=true;
    }
}