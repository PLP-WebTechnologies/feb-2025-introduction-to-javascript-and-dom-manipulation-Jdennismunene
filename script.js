let Heading = document.getElementById('heading');
let Content = document.getElementById('style-text');
let Update = document.getElementById('update-text');

function changeText() {
    Heading.textContent = "How are you all doing?";
}

function changeStyle () {
    Content.style.color = '#ef720e';
    Content.style.fontSize = '30px'
}

function updateText() {
    Update.textContent = 'My name is Jdennis a frontend developer with an aim of diving into backend development. My aim is to become a fullstack developer.' 
}