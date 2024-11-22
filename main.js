function sanitizeURL() {
  const input = document.getElementById("urlInput").value;
  const resultBox = document.getElementById("result");

  try {
    const url = new URL(input);
    
    const targetURL = url.searchParams.get("u") || url.searchParams.get("target_url");
    const sanitizedURL = targetURL ?
      decodeURIComponent(targetURL) :
      url.origin + url.pathname;

    resultBox.innerText = `Sanitized URL: ${sanitizedURL}`;
    resultBox.style.display = "block";

    navigator.clipboard.writeText(sanitizedURL);
  } catch (e) {
    resultBox.innerText = "Invalid URL. Please enter a valid one.";
    resultBox.style.display = "block";
  }
}
