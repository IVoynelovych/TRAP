let btns = document.querySelectorAll(".few")


function toggleSvg(event) {
    const svgContainer = event.currentTarget.querySelector('.quest_svg');
    if (!svgContainer.originalHtml) {
      svgContainer.originalHtml = svgContainer.innerHTML;
    }
    if (event.currentTarget.classList.contains('svg-replaced')) {
      svgContainer.innerHTML = svgContainer.originalHtml;
      event.currentTarget.classList.remove('svg-replaced');
    } else {
      const newSvg = document.getElementById('new-svg').innerHTML;
      svgContainer.innerHTML = newSvg;
      event.currentTarget.classList.add('svg-replaced');
    }
  }
  
btns.forEach(e=>{
    e.addEventListener("click", toggleSvg)
})