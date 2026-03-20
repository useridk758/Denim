function launchProxy() {
    const url = document.getElementById('urlInput').value;
    if (!url) return alert("Please enter a URL!");

    // Show Transition
    const loader = document.getElementById('loader');
    loader.classList.remove('loader-hidden');

    // Simulate connection delay
    setTimeout(() => {
        // For a real proxy, you'd use a service like Ultraviolet or a custom PHP proxy
        window.location.href = "https://www.croxyproxy.com" + encodeURIComponent(url);
    }, 2000);
}

function quickLink(site) {
    document.getElementById('urlInput').value = site;
    launchProxy();
}
