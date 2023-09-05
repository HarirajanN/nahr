let searchbar = document.getElementById('search')
let searchbtn = document.getElementById('searchbtn')

function Search(){
    let url ='https://www.google.com/search?q='+searchbar.value;
    window.open(url);
}
function dark(){
    document.querySelector('body').style.backgroundColor = 'black';
    document.getElementById('sun').style.color = 'white';
    document.getElementById('mode').style.color = "white";
    document.getElementsByClassName('nat').style.color = 'red';
    
}
function sun(){
    document.querySelector('body').style.backgroundColor = 'white';
    document.getElementById('moon').style.color = "black";
    document.getElementById('mode').style.color = 'black';
}
let color = ["1",'2','3','4','5','6','7','8','9','0','A','B','C','D','E','F']
let colors = Math.floor(Math.random());

console.log(colors)