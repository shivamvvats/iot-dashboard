function updateData() {
  let temp = Math.floor(Math.random() * 40);
  document.getElementById("temp").innerText = temp + " °C";

  if (temp > 30) {
    document.getElementById("fire").innerText = "🔥 Fire Risk!";
  } else {
    document.getElementById("fire").innerText = "Safe";
  }
}

setInterval(updateData, 2000);