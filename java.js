document.addEventListener('DOMContentLoaded', function() {
    const menuBar = document.getElementById('menuBar');
    const links = document.getElementById('links');

    menuBar.addEventListener('click', function() {
        if (links.style.display === 'flex') {
            links.style.display = 'none';
        } else {
            links.style.display = 'flex';
        }
    });
});


document.querySelector('#menuBar').addEventListener('click', function() {
    let who = document.querySelector('.who');
    if (who.style.marginTop === '200px') {
        who.style.marginTop = '50px';
    } else {
        who.style.marginTop = '200px';
    }
});

document.querySelectorAll('.toggle input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
        document.querySelectorAll('.toggle label').forEach(label => {
            label.style.color = ''; // Reset color for all labels
        });
        if (radio.checked) {
            document.querySelector(`label[for="${radio.id}"]`).style.color = 'black';
            document.querySelector(`label[for="${radio.id}"]`).style.fontWeight = 'bold';
        }
    });
});

document.querySelector('.toggle input[type="radio"]:checked').dispatchEvent(new Event('change'));



function showHiddenPart() {
    document.getElementById('hidden-part').style.display = 'block';

}

function hideHiddenPart() {
    document.getElementById('hidden-part').style.display = 'none';
}





document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("splashScreen").classList.add("show");
    }, 4000);

    setTimeout(function () {
        document.getElementById("splashScreen").classList.remove("show");
        document.getElementById("mainContent").classList.add("show");
    }, 7000);
});
