
function submitData(name, email){
    const userInfo = {
        name: name,
        email: email,
    }

    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(userInfo),
    })
    .then((response) => response.json())
    .then((data) => {

        const display = document.getElementById('display');
        const responseId = document.createElement('h1');

        responseId.textContent = data.id;
        display.appendChild(responseId);
    })

    .catch((object) => {
        
        const errorMessage = document.createElement('p');
        errorMessage.textContent = object.message;

        const display = document.getElementById('display');
        display.appendChild(errorMessage);
    })
}