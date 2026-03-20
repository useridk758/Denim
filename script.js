function launchPxy() {
    let url = document.getElementById('urlInput').value;
    if (!url) return alert("Enter a URL first!");

    // Ensure URL has protocol
    if (!url.startsWith('http')) {
        url = 'https://' + url;
    }

    const loader = document.getElementById('loader');
    loader.classList.remove('loader-hidden');

    // Smooth transition before redirect
    setTimeout(() => {
        // Redirecting to a public p*xy engine for functionality
        window.location.href = "https://www.croxyproxy.com" + encodeURIComponent(url);
    }, 1500);
}

function quickLink(destination) {
    document.getElementById('urlInput').value = destination;
    launchPxy();
}
