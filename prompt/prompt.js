document.getElementById('design-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const designIdea = document.getElementById('design-input').value;
    
    if (designIdea) {
        alert('Generating web design for: ' + designIdea);
    } else {
        alert('Please enter your word to detect.');
    }
});
