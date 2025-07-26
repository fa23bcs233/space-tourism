const destinationTabs = document.querySelectorAll("[role='tab']");
const destinationTabPannels = [
  {
    panelMoonImg: document.getElementById("panel-moon-img"),
    panelMoonHeading: document.getElementById("panel-moon-heading"),
    panelMoonDesc: document.getElementById("panel-moon-desc"),
    panelMoonDistance: document.getElementById("panel-moon-dist"),
    panelMoonTime: document.getElementById("panel-moon-time"),
  },
  {
    panelMarImg: document.getElementById("panel-mars-img"),
    panelMarsHeading: document.getElementById("panel-mars-heading"),
    panelMarsDesc: document.getElementById("panel-mars-desc"),
    panelMarsDistance: document.getElementById("panel-mars-dist"),
    panelMarsTime: document.getElementById("panel-mars-time"),
  },
  {
    panelEuropaImg: document.getElementById("panel-europa-img"),
    panelEuropaHeading: document.getElementById("panel-europa-heading"),
    panelEuropaDesc: document.getElementById("panel-europa-desc"),
    panelEuropaDistance: document.getElementById("panel-europa-dist"),
    panelEuropaTime: document.getElementById("panel-europa-time"),
  },
  {
    panelTitanImg: document.getElementById("panel-titan-img"),
    panelTitanHeading: document.getElementById("panel-titan-heading"),
    panelTitanDesc: document.getElementById("panel-titan-desc"),
    panelTitanDistance: document.getElementById("panel-titan-dist"),
    panelTitanTime: document.getElementById("panel-titan-time"),
  },
];

let destinationTab = new SplittedTabController(
  destinationTabs,
  destinationTabPannels
);
