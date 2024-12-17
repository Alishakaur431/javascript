function submitFeedback() {
    var name = document.getElementById('name').value;
    var feedback = document.getElementById('feedback').value;

    if (name && feedback) {
        document.getElementById('message').innerText = "Thank you for your feedback, " + name + "!";
    } else {
        document.getElementById('message').innerText = "Please fill all fields.";
    }
}
