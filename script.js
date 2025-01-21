document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    const name = document.getElementById('name').value.trim();
    const age = parseInt(document.getElementById('age').value.trim(), 10);

    if (!name || isNaN(age)) {
        alert('Both fields are required.');
        return;
    }

    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                resolve(name);
            } else {
                reject(name);
            }
        }, 4000); // 4 seconds delay
    })
    .then(name => {
        alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(name => {
        alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
