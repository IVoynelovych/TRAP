let btn_ls = document.querySelectorAll(".fews")


function toggleSvg(event) {
    const svgContainer = event.currentTarget.querySelector('.quest_svg');
    const selectedLabel = event.currentTarget;
    const ans = selectedLabel.querySelector('.ans');
    if (!svgContainer.originalHtml) {
      svgContainer.originalHtml = svgContainer.innerHTML;
    }
    if (event.currentTarget.classList.contains('svg-replaced')) {
      svgContainer.innerHTML = svgContainer.originalHtml;
      event.currentTarget.classList.remove('svg-replaced');
      ans.classList.remove('correct');
    } else {
      const newSvg = document.getElementById('new-svg').innerHTML;
      svgContainer.innerHTML = newSvg;
      event.currentTarget.classList.add('svg-replaced');
      ans.classList.add('correct');
    }
  }
  
btn_ls.forEach(e=>{
    e.addEventListener("click", toggleSvg)
})