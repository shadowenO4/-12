function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    checkForName(formText);

    console.log("::: Form Submitted :::");
    fetch('https://api.example.com/data') // Update this URL to the desired external API
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message;
    });
}

export { handleSubmit };
