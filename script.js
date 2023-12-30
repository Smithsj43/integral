document.getElementById('integral-form').onsubmit = function(event) {
    event.preventDefault();

    let functionInput = document.getElementById('function').value;
    let lowerLimit = document.getElementById('lower_limit').value;
    let upperLimit = document.getElementById('upper_limit').value;

    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            function: functionInput,
            lower_limit: lowerLimit,
            upper_limit: upperLimit
        }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').textContent = data.result;
    })
    .catch(error => {
        console.error('Error:', error);
    });
};