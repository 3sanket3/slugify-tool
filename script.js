document.getElementById("sourceText").addEventListener("keyup", e => {
  document.getElementById("copyBtn").innerText = "Copy";
  const slugifiedValue = (e.target.value || "")
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
  document
    .getElementById("slugifiedText")
    .setAttribute("value", slugifiedValue);
});

document.getElementById("copyBtn").addEventListener("click", e => {
  e.preventDefault();
  document.getElementById("slugifiedText").select();
  document.execCommand("copy");
  document.getElementById("copyBtn").innerText = "Copied!";
});
