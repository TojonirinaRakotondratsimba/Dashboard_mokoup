e=true;
function changer() {
    if(e) {
        document.getElementById("password").setAttribute("type","text");
        document.getElementById("eye").src="assets/images/mot_de_passe/afficher.png";
        e=false;
    }
    else  {
        document.getElementById("password").setAttribute("type","password");
        document.getElementById("eye").src="assets/images/mot_de_passe/masquer.png";
        e=true;
    }
}