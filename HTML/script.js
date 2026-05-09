document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease-in-out';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    const mainImg = document.querySelector('img:not(.text-inapoi img)');
    if (mainImg) {
        mainImg.addEventListener('click', () => {
            const titlu = document.querySelector('h1').innerText;
            alert(`Aceasta este un fragment de ${titlu}.`);
        });
        mainImg.style.cursor = 'zoom-in';
    }

    const btn = document.createElement('button');
    btn.innerText = "Inchis";
    btn.style.position = "fixed";
    btn.style.top = "20px";
    btn.style.right = "20px";
    btn.style.padding = "10px 15px";
    btn.style.borderRadius = "20px";
    btn.style.border = "none";
    btn.style.cursor = "pointer";
    btn.style.backgroundColor = "#2d3436";
    btn.style.color = "white";
    btn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";

    document.body.appendChild(btn);

    btn.addEventListener('click', () => {
        if (document.body.style.backgroundColor === 'rgb(45, 52, 54)') {
            location.reload();
        } else {
            document.body.style.backgroundColor = '#2d3436';
            document.body.style.color = '#dfe6e9';
            btn.innerText = "Deschis";
        }
    });
});
