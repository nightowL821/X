function checkName() {
    const name = document.getElementById('name').value.toLowerCase();
    const validNames = ["mrittika", "tanbin rubayra mrittika", "babesh"];

    if (validNames.includes(name)) {
        document.getElementById('question1').style.display = 'none';
        document.getElementById('question2').style.display = 'block';
    } else {
        document.getElementById('question1').style.display = 'none';
        document.getElementById('incorrectPage').style.display = 'block';
    }
}

function goToQuestion3() {
    document.getElementById('question2').style.display = 'none';
    document.getElementById('question3').style.display = 'block';
}

function goToQuestion4() {
    document.getElementById('question3').style.display = 'none';
    document.getElementById('question4').style.display = 'block';
}

function goToQuestion5() {
    document.getElementById('question4').style.display = 'none';
    document.getElementById('question5').style.display = 'block';
}

function goToQuestion6() {
    document.getElementById('question5').style.display = 'none';
    document.getElementById('question6').style.display = 'block';
}

function finishDate() {
    document.getElementById('question6').style.display = 'none';

    // Show a final message and image
    const finalMessageContainer = document.createElement('div');
    finalMessageContainer.classList.add('container');

    const finalImage = document.createElement('img');
    finalImage.src = 'images/7.jpg';
    finalImage.alt = 'Image 7';
    finalImage.classList.add('image');

    const finalMessage = document.createElement('h1');
    finalMessage.textContent = "Can't wait to meet you my বুতিপুল বাবেশ!";

    finalMessageContainer.appendChild(finalImage);
    finalMessageContainer.appendChild(finalMessage);
    document.body.appendChild(finalMessageContainer);
}

function resetPage() {
    location.reload();
}
