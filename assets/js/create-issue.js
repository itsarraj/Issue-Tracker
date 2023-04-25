const labelInput = document.getElementById('labelInput');
const labelDropdown = document.getElementById('labelDropdown');
labelInput.addEventListener('keyup', function (e) {
    let userInput = labelInput.value.toLowerCase();

    // Check if the option already exists
    let optionExists = Array.from(labelDropdown.options).find(
        (option) => option.value.toLowerCase() === userInput
    );

    if (!optionExists) {
        // If the option doesn't exist, create a new one
        let newOption = document.createElement('option');
        newOption.value = userInput;
        newOption.textContent = userInput;
        labelDropdown.add(newOption);
    }

    let options = labelDropdown.options;
    for (let i = 0; i < options.length; i++) {
        let option = options[i];
        let label = option.value.toLowerCase();
        if (label.includes(userInput)) {
            option.style.display = 'block';
        } else {
            option.style.display = 'none';
        }
    }
});

labelDropdown.addEventListener('mousedown', function (e) {
    e.preventDefault();

    const option = e.target;

    if (option.selected) {
        option.selected = false;
    } else {
        option.selected = true;
    }
});
