document.addEventListener('DOMContentLoaded', (event) => {
    hideBox('box1');
    hideBox('box2');
    hideBox('box3');

    document.getElementById('buttonForA').addEventListener('click', function() {
        toggleBoxVisibility('box1');
    });

    document.getElementById('buttonForB').addEventListener('click', function() {
        toggleBoxVisibility('box2');
    });

    document.getElementById('buttonForC').addEventListener('click', function() {
        toggleBoxVisibility('box3');
    });

    document.querySelectorAll('.box1 button, .box2 button, .box3 button').forEach((button, index) => {
        button.addEventListener('click', function() {
            hideBox(['box1', 'box2', 'box3'][index]);
        });
    });
});

function toggleBoxVisibility(boxClass) {
    const box = document.querySelector('.' + boxClass);
    box.style.visibility = box.style.visibility === 'hidden' ? 'visible' : 'hidden';
}

function hideBox(boxClass) {
    document.querySelector('.' + boxClass).style.visibility = 'hidden';
}
