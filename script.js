document.addEventListener("DOMContentLoaded", function () {
  const loadingMessages = [
      "I'm waking up...",
      "I'm having breakfast...",
      "I'm scrolling Instagram...",
      "I'm on my way..."
  ];
  let currentMessageIndex = 0;

  // Select elements
  const loadingTextElement = document.getElementById("loadingText");
  const contentElement = document.getElementById("content");
  const hideSplineElement = document.getElementById("hide-spline");
  const splineElement = document.getElementById("spline-content");
  const loadingScreen = document.getElementById("loadingScreen");
  const loadingBar = document.getElementById("loadingBar");

  function showNextMessage() {
      if (currentMessageIndex < loadingMessages.length) {
          loadingTextElement.innerText = loadingMessages[currentMessageIndex];

          // Calculate the loading bar width percentage
          const progress = ((currentMessageIndex + 1) / loadingMessages.length) * 100;
          loadingBar.style.width = `${progress}%`;

          currentMessageIndex++;
          setTimeout(showNextMessage, 1500); // Display each message for 1.5 seconds
      } else {
          // Hide the loading screen and show the main content
          loadingScreen.classList.add("hidden");
          contentElement.style.display = "block";
          hideSplineElement.style.display = "block";
          splineElement.style.display = "block";
      }
  }



  // Start loading sequence
  showNextMessage();

  // Navigate to a new page with headings when the "Enter" button is clicked
  document.getElementById("enterButton").addEventListener("click", function () {
      window.location.href = "newPage.html"; // Redirect to new page
  });
});
