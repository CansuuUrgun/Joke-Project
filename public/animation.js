window.addEventListener("load", () => {
    const p = document.querySelector(".hidden");
    if (!p) return;
    setTimeout(() => {
        p.classList.add("visible");
    }, 500);
});
