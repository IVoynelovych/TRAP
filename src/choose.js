let labels = document.querySelectorAll(".labla");

function toggleSvg(event) {
    const selectedLabel = event.currentTarget;
    const svgContainer = selectedLabel.querySelector('.quest_svg');
    const newSvg = document.getElementById("new-svga").innerHTML;
    if (selectedLabel.classList.contains('svg-replaced')) {
        selectedLabel.classList.remove('svg-replaced');
        svgContainer.innerHTML = selectedLabel.originalHtml;
    } else {
        labels.forEach(label => {
            label.classList.remove('svg-replaced');
            label.querySelector('.quest_svg').innerHTML = label.originalHtml;
        });
        selectedLabel.classList.add('svg-replaced');
        svgContainer.innerHTML = newSvg;
    }
}

labels.forEach(label => {
    label.addEventListener("click", toggleSvg);
    label.originalHtml = label.querySelector('.quest_svg').innerHTML;
});
