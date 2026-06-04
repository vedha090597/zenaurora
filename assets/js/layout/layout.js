function setHeaderHeight() {
    const innerDiv = document.getElementById('innerDiv');
    if (!innerDiv) return;

    const header = innerDiv.parentElement;
    header.style.height = innerDiv.offsetHeight + 'px';
}

document.addEventListener('DOMContentLoaded', function () {
    // Load Header
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;

            // Ensure the height is set after the header is added
            setTimeout(setHeaderHeight, 100);

            // Recalculate height on resize
            window.addEventListener('resize', setHeaderHeight);
        })
        .catch(error => console.error("Error loading header:", error));

    // Load Footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data)
        .catch(error => console.error("Error loading footer:", error));

    // Load Sidebar
    fetch("sidebar.html")
        .then(response => response.text())
        .then(data => document.getElementById("sidebar").innerHTML = data)
        .catch(error => console.error("Error loading sidebar:", error));
});
