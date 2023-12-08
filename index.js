const allowStyleOverride = window.location.href.toLowerCase().includes("insightly.com/reports/edit");

function getFirstElementByClassName(className) {
    if(!!className) {
        const elements = document.getElementsByClassName(className);
        if(!!elements && elements.length > 0) {
            return elements[0];
        }
    }
}

function getHeightOfElementByClassName(className) {
    if(!!className) {
        const element = getFirstElementByClassName(className);
        if(!!element) {
            return element.offsetHeight;
        }
    }
}

async function createStyleElement() {
    console.log("createStyleElement");
    console.log({allowStyleOverride});
    if (allowStyleOverride) {
        const pastInfoHeight = getHeightOfElementByClassName("past-info");
        const sidebarHeight = getHeightOfElementByClassName("sidebar-left");
        let calculatedHeightForGrid = sidebarHeight;
        if(!!calculatedHeightForGrid) {
            calculatedHeightForGrid = sidebarHeight - (pastInfoHeight || 0) - 15;
        }
        if(!!calculatedHeightForGrid && calculatedHeightForGrid > 0) {
            calculatedHeightForGrid += "px";
        } else {
            calculatedHeightForGrid = "1000vh";
        }
        let style = document.createElement('style');
        style.type = 'text/css';
        style.textContent = `
        #main-container {
            width:1000vw!important;
        }
        #toolbar .btn-toolbar {
            float: none!important;
            margin-left: 20px;
        }
        #toolbar .toolbar-title {
            margin-right: 20px!important;
        }
        #grid {
            height: ${calculatedHeightForGrid}!important;
            max-height: ${calculatedHeightForGrid}!important;
        }
        #wrapper #sidebar {
            position: absolute!important;
        }
        #appname::after {
            content: "  🇺🇸"
        }
        `;
        document.head.appendChild(style);
    }
}

createStyleElement();
