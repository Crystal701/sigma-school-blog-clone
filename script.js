const ul = document.querySelector("ul");
const button = document.querySelector("button");
const nav = document.querySelector("nav");
const menu = document.querySelector("input");
const header = document.querySelector("header");

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

window.addEventListener("mousemove", () => {
    if (window.event.clientY <= 100 && window.scrollY > 150) {
        header.setAttribute("style", "display: flex; position: sticky; top: -150px; left: 0; transition: all 0.5s; transform: translateY(150px);")

    } else if (window.event.clientY > 100 && window.scrollY > 150 && !document.querySelector(".main-nav")) {
        header.setAttribute("style", "display: flex; transition: all 0.5s; transform: translateY(-150px);");
    }
})

window.addEventListener("scroll", () => {
    if (window.scrollY < 150) {
        header.setAttribute("style", "display: flex; position: sticky; top: 0; left: 0;");
    } else {
        header.setAttribute("style", "display: flex; transition: all 0.5s; transform: translateY(-150px)");
    }

    if (window.innerWidth <= 800 && menu.checked) {
        ul.style.display = "none";
        button.style.display = "none";

        document.querySelector(".main-nav").remove();

        nav.appendChild(ul);
        nav.appendChild(button);

        menu.checked = false;
    }
})
