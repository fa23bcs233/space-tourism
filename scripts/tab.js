class SplittedTabController {
  constructor(tabs, tabPannels, stagged) {
    this.tabs = tabs;
    this.tabPannels = tabPannels;
    this.stagged = stagged || false;
    this.current = 0;

    this.init();
  }

  init() {
    this.tabs.forEach((tab, index) => {
      this.focusHandling(tab, index);
      this.handleClick(tab, index);
    });
  }

  focusHandling(tab, index) {
    tab.addEventListener("keydown", (event) => {
      if (event.key == "ArrowRight") {
        const nextTab = (index + 1) % this.tabs.length;
        this.tabs[nextTab].focus();
      } else if (event.key == "ArrowLeft") {
        const prevTab = (index - 1 + this.tabs.length) % this.tabs.length;
        this.tabs[prevTab].focus();
      }
    });
  }

  handleClick(tab, index) {
    tab.addEventListener("click", () => {
      if (index === this.current) return; // for saving the jump back transition
      this.activateTab(index);
      if (this.stagged) {
        this.staggedActivation(index);
      } else {
        this.activatePannels(index);
      }
      this.current = index;
    });
  }

  activateTab(index) {
    const newTab = this.tabs[index];
    const currentTab = this.tabs[this.current];

    currentTab.setAttribute("aria-selected", "false");
    currentTab.setAttribute("tabindex", "-1");
    currentTab.setAttribute("data-active", "false");

    newTab.setAttribute("aria-selected", "true");
    newTab.setAttribute("tabindex", "0");
    newTab.setAttribute("data-active", "true");
  }

  activatePannels(index) {
    const newPannel = this.tabPannels[index];
    const currentPannel = this.tabPannels[this.current];

    for (let subPanel in currentPannel) {
      currentPannel[subPanel].setAttribute("aria-hidden", "true");
      currentPannel[subPanel].setAttribute("data-active", "false");

      currentPannel[subPanel].setAttribute("data-outgoing", true);
      currentPannel[subPanel].addEventListener(
        "transitionend",
        () => {
          currentPannel[subPanel].setAttribute("data-outgoing", "false");
        },
        { once: true }
      );
    }

    for (let subPanel in newPannel) {
      newPannel[subPanel].setAttribute("data-active", "true");
      newPannel[subPanel].setAttribute("aria-hidden", "false");
    }
  }

  staggedActivation(index) {
    const newPannel = this.tabPannels[index];
    const currentPannel = this.tabPannels[this.current];

    for (let subPanel in currentPannel) {
      currentPannel[subPanel].setAttribute("aria-hidden", "true");
      currentPannel[subPanel].setAttribute("data-active", "false");
      currentPannel[subPanel].addEventListener("transitionend", () => {
        console.log("Runned");
        for (let nsubPanel in newPannel) {
          newPannel[nsubPanel].setAttribute("data-active", "true");
          newPannel[nsubPanel].setAttribute("aria-hidden", "false");
        }
      }, {once: true});
    }
  }
}

