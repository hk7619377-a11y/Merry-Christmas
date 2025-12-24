document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['#f4f4f4', '#ffeaa7', '#fab1a0', '#a29bfe'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});