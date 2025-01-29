import { checkForName } from './nameChecker'; // Import the checkForName function

async function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    checkForName(formText);

    console.log("::: Form Submitted :::");

    try {
        const response = await fetch('http://localhost:3021/testAPI'); // Adjust the URL as needed
        const data = await response.json();
        document.getElementById('results').innerHTML = data.message; // Update the results div with the fetched message
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('results').innerHTML = ''; // Assuming no update on failure
    }
}

export { handleSubmit };
