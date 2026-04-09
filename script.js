function cautaRoca() {
    const input = document.getElementById("cautare");
    if (!input) return;

    const filtru = input.value.toLowerCase();
    const tabel = document.querySelector("table");
    if (!tabel) return;

    const randuri = tabel.getElementsByTagName("tr");

    for (let i = 1; i < randuri.length; i++) {
        const textRand = randuri[i].textContent.toLowerCase();
        randuri[i].style.display = textRand.indexOf(filtru) > -1 ? "" : "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const randuri = document.querySelectorAll("tr:not(:first-child)");
    const titlu = document.querySelector("h1");

    if (titlu) {
        titlu.style.opacity = "0";
        titlu.style.transition = "all 1s ease-out";
        titlu.style.transform = "translateY(-20px)";
        
        setTimeout(() => {
            titlu.style.opacity = "1";
            titlu.style.transform = "translateY(0)";
        }, 300);
    }

    randuri.forEach(rand => {
        rand.style.transition = "transform 0.2s ease, box-shadow 0.2s ease, background-color 0.3s";
        
        rand.addEventListener("mouseenter", () => {
            rand.style.transform = "scale(1.02) translateX(10px)";
            rand.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
            rand.style.boxShadow = "5px 5px 15px rgba(0,0,0,0.1)";
            rand.style.cursor = "pointer";
        });

        rand.addEventListener("mouseleave", () => {
            rand.style.transform = "scale(1) translateX(0)";
            rand.style.backgroundColor = "";
            rand.style.boxShadow = "";
        });
        
        rand.addEventListener("click", () => {
            rand.style.backgroundColor = "#fff9c4"; 
            setTimeout(() => { rand.style.backgroundColor = "rgba(255, 255, 255, 0.5)"; }, 200);
        });
    });

    const imagini = document.querySelectorAll("img");
    imagini.forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transition = "transform 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
            img.style.transform = "rotate(360deg) scale(1.1)";
        });
        img.addEventListener("mouseout", () => {
            img.style.transform = "rotate(0deg) scale(1)";
        });
    });
});