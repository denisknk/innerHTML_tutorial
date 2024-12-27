function postComment() {
    // Get the user comment
    const commentInput = document.getElementById('user-comment');
    const commentValue = commentInput.value;

    // Create a new comment element
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');

    // UNSAFE: Using innerHTML without sanitization
    commentElement.innerHTML = `<p>${commentValue}</p>`;

    // Append the new comment to the comment list
    document.getElementById('comment-list').appendChild(commentElement);

    commentInput.value = '';
}

const renderListLength = 1000;

function addWithInnerHTML() {
    toggleBusyIndicator(true);

    setTimeout(() => {
    const start = performance.now();
    const contentDiv = document.getElementById('our-services');
    for (let i = 0; i < renderListLength; i++) {
       contentDiv.innerHTML += `<div>Item ${i + 1}</div>`;
    }
    const end = performance.now();
    console.log(`innerHTML took ${end - start} milliseconds`);
        toggleBusyIndicator();
    }, 0);
}

function addWithAppendChild() {
    toggleBusyIndicator(true);

    setTimeout(() => {
    const start = performance.now();
    const contentDiv = document.getElementById('our-services');
    for (let i = 0; i < renderListLength; i++) {
        const newDiv = document.createElement('div');
        newDiv.textContent = `Item ${i + 1}`;
        contentDiv.appendChild(newDiv);
    }
    const end = performance.now();
    console.log(`appendChild took ${end - start} milliseconds`);
        toggleBusyIndicator();
    }, 0);
}

function toggleBusyIndicator(isSpinning) {
    console.log('here');
    const busyIndicator = document.getElementById('busy-indicator');
    if (isSpinning) {
        busyIndicator.style.display = 'flex'; // Show the busy indicator
    } else {
        busyIndicator.style.display = 'none'; // Hide the busy indicator
    }
}



