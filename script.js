const ul = document.querySelector("ul");
const button = document.querySelector("button");
const nav = document.querySelector("nav");
const menu = document.querySelector("input");

menu.addEventListener("change", () => {
    if (menu.checked) {
        const div = document.createElement("div");
        div.classList.add("main-nav");
        div.appendChild(ul);
        div.appendChild(button);
        nav.append(div);

        ul.style.display = "flex";
        button.style.display = "flex";
    } else {
        nav.appendChild(ul);
        nav.appendChild(button);

        document.querySelector(".main-nav").remove();

        ul.style.display = "none";
        button.style.display = "none";
    }
})

window.addEventListener("resize", () => {
    if (menu.checked) {
        menu.checked = false;

        nav.appendChild(ul);
        nav.appendChild(button);

        document.querySelector(".main-nav").remove();
    }

    if (window.innerWidth <= 800) {
        ul.style.display = "none";
        button.style.display = "none";
    } else if (window.innerWidth > 800) {
        ul.style.display = "flex";
        button.style.display = "flex";
    }
})