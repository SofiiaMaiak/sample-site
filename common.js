function displayDM() {
    var elems=document.getElementsByClassName('dropdown-content');
    for(var i=0; i<elems.length; i++)elems[i].style.display='flex';
    for(var i=0; i<elems.length; i++)elems[i].style.flexDirection='column';
}
function hideDM() {
    var elems=document.getElementsByClassName('dropdown-content');
    for(var i=0; i<elems.length; i++)elems[i].style.display='none';
}
function validation() {
    var firstName = document.forms["question-form"]["first-name"].value;
    var secondName = document.forms["question-form"]["second-name"].value;
    if(firstName == ''){
        document.getElementById('first-name').style.border='2px solid red';
    }
    if(secondName == ''){
        document.getElementById('second-name').style.border='2px solid red';
    }
}