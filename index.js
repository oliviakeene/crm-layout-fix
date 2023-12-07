const allowStyleOverride = window.location.href.includes("insightly/reports");

async function createStyleElement() {
    console.log("createStyleElement");
    console.log({allowStyleOverride});
    if (allowStyleOverride) {
        let style = document.createElement('style');
        style.type = 'text/css';
        style.textContent = `
        a::after {
            content: "🇺🇸"
        }
        #main-container {
            width:1000vw!important;
            background: blue!important;
        }
        #report-editor .k-grid-content { width: 1000vh!important }
        `;
        document.head.appendChild(style);
    }
}

createStyleElement();
