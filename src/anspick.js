let labelss = document.querySelectorAll(".lablas");
function toggleSvg(event) {
    const selectedLabel = event.currentTarget;
    const svgContainer = selectedLabel.querySelector('.quest_svg');
    const newSvg = document.getElementById("new-svga").innerHTML;
    const ans = selectedLabel.querySelector('.ans');
    labelss.forEach(label => {
        const ansOther = label.querySelector('.ans');
        const svgContainerOther = label.querySelector('.quest_svg');
        if (label === selectedLabel) {
            if (selectedLabel.classList.contains('svg-replaced')) {
                ans.classList.remove('correct');
            } else {
                ans.classList.add('correct');
            }
        } else {
            ansOther.classList.remove('correct');
            label.classList.remove('svg-replaced');
            svgContainerOther.innerHTML = label.originalHtml;
        }
    });
    if (!selectedLabel.classList.contains('svg-replaced')) {
        selectedLabel.classList.add('svg-replaced');
        svgContainer.innerHTML = newSvg;
        ans.classList.add('correct');
    } else {
        selectedLabel.classList.remove('svg-replaced');
        svgContainer.innerHTML = selectedLabel.originalHtml;
    }
}
labelss.forEach(label => {
    label.addEventListener("click", toggleSvg);
    label.originalHtml = label.querySelector('.quest_svg').innerHTML;
});
