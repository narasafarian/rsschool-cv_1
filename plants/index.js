const serviceButtons = document.querySelector('.service__buttons');
const serviceCells = document.querySelector('.service__list');


const MAX_NUMBER_OF_SELECTED_BUTTONS = 2;
let numberOfSelectedButtons = 0;
const selectedCatergories = new Set();


window.onload = function() {
    addBtnClickHandler();
    blurring();
}

const clickHandler = (e) => {
    const clickedButton = e.target;

    if (clickedButton.classList.contains('service__btn')) {
        if (clickedButton.classList.contains('active')) {
            removeSelectedButtons(clickedButton);
        } else {
            if (numberOfSelectedButtons < MAX_NUMBER_OF_SELECTED_BUTTONS) {
                selectClickedButton(clickedButton);
            }
        }
    }

    blurring();
};

const addBtnClickHandler = () => {
    serviceButtons.addEventListener('click', clickHandler);
}

const selectClickedButton = (clickedButton) => {
    clickedButton.classList.add('active');
    numberOfSelectedButtons++;
    selectedCatergories.add(clickedButton.value);
} 

const removeSelectedButtons = (removedButton) => {
    removedButton.classList.remove('active');
    numberOfSelectedButtons--;
    selectedCatergories.delete(removedButton.value);
}

const blurring = () => {
    if (numberOfSelectedButtons === 0) {
        for (let cell of serviceCells.children) {
            cell.classList.remove('blur');
        }
        return;
    }

    for (let cell of serviceCells.children) {
        const category = cell.dataset.category;
        if (selectedCatergories.has(category)) {
            cell.classList.remove('blur');
        } else {
            cell.classList.add('blur');
        }
    }
};


// -------- accordion

const acc = document.getElementsByClassName("packages__accordion");

for (let i = 0; i < acc.length; i++) {
    const clickHandler = function() {
        this.classList.toggle("active");
        const panel = this.children[1];
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
    acc[i].addEventListener("click", clickHandler);
}