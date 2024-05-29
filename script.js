document.addEventListener("DOMContentLoaded", () => {
    // Add any JavaScript functionality here if needed
    // Currently, there's no specific functionality required

    // Example: Logging button clicks
    const arconnectBtn = document.getElementById("arconnectBtn");
    const twitterBtn = document.getElementById("twitterBtn");

    if (arconnectBtn) {
        arconnectBtn.addEventListener("click", () => {
            console.log("ArConnect button clicked");
        });
    }

    if (twitterBtn) {
        twitterBtn.addEventListener("click", () => {
            console.log("Twitter button clicked");
        });
    }
});
