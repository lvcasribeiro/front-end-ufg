function showSuccessModal() {
  const cardBrand = document.getElementById("cardBrand").value;
  document.getElementById("modalCardBrand").textContent = cardBrand || "Visa";
  document.getElementById("successModal").style.display = "block";
}

function closeSuccessModal() {
  document.getElementById("successModal").style.display = "none";
}
