const accordeonContainers = document.querySelectorAll(".accordeon-container");

/* accordeonContainers.forEach ( accordeonContainer => {
  let accordeonToggle = accordeonContainer.querySelector(".accordeon-header");
  let accordeonContent = accordeonContainer.querySelector(".accordeon-content");
  let accordeonChevron = accordeonContainer.querySelector("i");
  
  let originalHeight = getComputedStyle(accordeonContainer).height;
  
  const hideAccordeon = () => {
    accordeonToggle.setAttribute("data-toggle","off");
    accordeonContent.style.transform = "scaleY(0)";

    let containerHeight = getComputedStyle(accordeonContainer).height;
    let contentHeight = getComputedStyle(accordeonContent).height;
    accordeonContainer.style.height = parseInt(containerHeight) - parseInt(contentHeight) - 15 + "px";
    accordeonChevron.style.transform = "rotate(0)";
  }
  
  const showAccordeon = () => {
    accordeonToggle.setAttribute("data-toggle","on");
    accordeonContent.style.transform = "scaleY(1)";

    accordeonContainer.style.height = parseInt(originalHeight) + "px";
    accordeonChevron.style.transform = "rotate(180deg)";
  }
  
  if ( accordeonToggle.getAttribute("data-toggle") == "off" ) {
    hideAccordeon();
  }
  
  accordeonContainer.onclick = () => {
    if ( accordeonToggle.getAttribute("data-toggle") == "on" ) {
      hideAccordeon();
    } else {
      showAccordeon();
    }
  }
} ); */

window.addEventListener("load", (event) => {
    accordeonContainers.forEach ( accordeonContainer => {
        const header = accordeonContainer.querySelector(".accordeon-header");
        const content = accordeonContainer.querySelector(".accordeon-content");
        const chevron = accordeonContainer.querySelector("i");
    
        const originalHeight = parseInt(getComputedStyle(accordeonContainer).height);
        const headerHeight = parseInt(getComputedStyle(header).height);
    
        const hideAccordeon = () => {
            header.setAttribute("data-toggle", "off");
            content.style.transform = "scaleY(0)";
            let padding = 50;
            accordeonContainer.style.height = headerHeight + padding + "px";
            chevron.style.transform = "rotate(0)";
        }
    
        const showAccordeon = () => {
            header.setAttribute("data-toggle", "on");
            content.style.transform = "scaleY(1)";
            let padding = 10;
            accordeonContainer.style.height = originalHeight - padding + "px";
            chevron.style.transform = "rotate(180deg)";
        }
    
        if ( header.getAttribute("data-toggle") == "off" ) {
            hideAccordeon();
        }
    
        header.onclick = () => {
            if ( header.getAttribute("data-toggle") == "off" ) {
                showAccordeon();
            } else {
                hideAccordeon();
            }
        }
    
    });
});

