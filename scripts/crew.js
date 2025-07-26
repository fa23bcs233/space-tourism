const crewTabs = document.querySelectorAll("[role='tab']");
const crewTabPannels = [
  {
    panelContent: document.getElementById("commander-content"),
    panelImage: document.getElementById("commander-img"),
  },
  {
    panelContent: document.getElementById("specialist-content"),
    panelImage: document.getElementById("specialist-img"),
  },
  {
    panelContent: document.getElementById("pilot-content"),
    panelImage: document.getElementById("pilot-img"),
  },
  {
    panelContent: document.getElementById("engineer-content"),
    panelImage: document.getElementById("engineer-img"),
  },
];

new SplittedTabController(crewTabs, crewTabPannels, true);
