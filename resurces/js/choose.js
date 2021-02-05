const buttons = document.querySelectorAll(".choose_floor");

function choose(item) {
    for (let i = 0; i < item.length; i++) {
        item[i].addEventListener("click", () => {
            item.forEach((btn) => {
                btn.classList.remove("active");
            });
            item[i].classList.add("active");
        });
    }
}

choose(buttons);

