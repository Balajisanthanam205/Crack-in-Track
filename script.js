document.getElementById('checkButton').addEventListener('click', function() {
    // Get the value from the input field
    const input = document.getElementById('valuesInput').value;
    
    // Convert the input string into an array of numbers
    const values = input.split(',').map(value => parseFloat(value.trim()));
    
    // Define the condition
    const conditionValue = 4.900;

    // Check each value and show an alert if the condition is met
    values.forEach(value => {
        if (value > conditionValue) {
            alert(`WARNING THERE IS A CRACK DETECTED!!!!!!`);
        }
    });

    // If no value exceeds the condition, show a general message
    if (values.every(value => value <= conditionValue)) {
        alert('THE RAILWAY TRACK IS IN GOOD CONDITION');
    }
});



