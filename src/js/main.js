const progressBarContainer = document.querySelector("[data-js=progress-bar");

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  const contentHeight = scrollTop;
  const remainingContent = scrollHeight - clientHeight;
  const scrolled = (contentHeight / remainingContent) * 100;

  progressBarContainer.style.width = `${scrolled}%`; 
});
