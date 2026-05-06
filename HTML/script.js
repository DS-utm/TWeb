document.addEventListener('DOMContentLoaded', () => {

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const filter = this.value.toLowerCase();
            const rows = document.querySelectorAll('#rocksTable tbody tr');

            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(filter) ? "" : "none";
            });
        });
    }

    const tableLinks = document.querySelectorAll('#rocksTable a');
    const displayContainer = document.getElementById('container-ajax');

    tableLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const url = this.getAttribute('href');

            fetch(url)
            .then(response => {
                if (!response.ok) throw new Error('Eroare la încărcare');
                return response.text();
            })
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');

                const titlu = doc.querySelector('h1').innerText;
                const descriere = doc.querySelector('p').innerText;

                let imgElement = doc.querySelector('img:not(.text-inapoi img)');
                let imgSrc = imgElement.getAttribute('src').replace('../', './');

                displayContainer.innerHTML = `
                <div style="text-align: center; animation: fadeIn 0.4s ease-out;">
                <h2 style="color: #2d3436; margin-bottom: 15px;">${titlu}</h2>
                <p style="color: #636e72; font-size: 1.1rem; line-height: 1.7; margin-bottom: 25px;">${descriere}</p>
                <img src="${imgSrc}" style="max-width: 100%; border-radius: 15px; box-shadow: 0 10px 20px rgba(0,0,0,0.15); border: 5px solid #f9f9f9;">
                </div>
                `;

                displayContainer.style.display = 'block';
                displayContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
            })
            .catch(err => console.error("Eroare AJAX:", err));
        });
    });

    const darkModeBtn = document.createElement('button');
    darkModeBtn.innerText = "Mod Noapte";
    Object.assign(darkModeBtn.style, {
        position: "fixed", top: "20px", right: "20px", padding: "10px 20px",
        borderRadius: "30px", border: "none", cursor: "pointer",
        backgroundColor: "#2d3436", color: "white", zIndex: "1000", fontWeight: "bold"
    });
    document.body.appendChild(darkModeBtn);

    darkModeBtn.addEventListener('click', () => {
        if (document.body.style.backgroundColor === 'rgb(45, 52, 54)') {
            document.body.style.backgroundColor = '';
            document.body.style.color = '#2d3436';
            darkModeBtn.innerText = "Mod Noapte";
        } else {
            document.body.style.backgroundColor = '#2d3436';
            document.body.style.color = '#dfe6e9';
            darkModeBtn.innerText = "Mod Zi";
        }
    });
});
