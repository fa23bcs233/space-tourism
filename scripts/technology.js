const techTabs = document.querySelectorAll("[role='tab']");
const techTabPanels = [
    {
        panelContent: document.getElementById("tech-1"),
        panelImage: document.getElementById("tab-image-1"),
    },
    {
        panelContent: document.getElementById("tech-2"),
        panelImage: document.getElementById("tab-image-2"),
    },
    {
        panelContent: document.getElementById("tech-3"),
        panelImage: document.getElementById("tab-image-3"),
    },
];

new SplittedTabController(techTabs, techTabPanels);