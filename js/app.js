const chatFab = document.getElementById("chatFab");
const popupToast = document.getElementById("popupToast");
const openChatTab = document.getElementById("openChatTab");
const fabToggle = document.getElementById("fabToggle");
const fabGroup = document.getElementById("fabGroup");

const CHATTIA_URL = "https://example.com/chattia";
let popupHandle = null;

const openChatPopup = () => {
  popupHandle = window.open(
    CHATTIA_URL,
    "ChattiaChat",
    "width=420,height=720,noopener,noreferrer"
  );

  if (!popupHandle || popupHandle.closed || typeof popupHandle.closed === "undefined") {
    popupToast.classList.add("active");
  } else {
    popupToast.classList.remove("active");
  }
};

if (chatFab) {
  chatFab.addEventListener("click", () => {
    openChatPopup();
  });
}

if (openChatTab) {
  openChatTab.addEventListener("click", () => {
    window.open(CHATTIA_URL, "_blank", "noopener,noreferrer");
    popupToast.classList.remove("active");
  });
}

if (fabToggle) {
  fabToggle.addEventListener("click", () => {
    const isExpanded = fabToggle.getAttribute("aria-expanded") === "true";
    fabToggle.setAttribute("aria-expanded", String(!isExpanded));
    fabGroup.classList.toggle("expanded", !isExpanded);
  });
}
