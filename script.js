function updateData() {
  let temp = Math.floor(Math.random() * 40);
  let humidity = Math.floor(Math.random() * 100);

  document.getElementById("temp").innerText = temp + " °C";
  document.getElementById("humidity").innerText = humidity + " %";

  if (temp > 30) {
    document.getElementById("fire").innerText = "🔥 Fire Risk!";
  } else {
    document.getElementById("fire").innerText = "Safe";
  }
}

setInterval(updateData, 2000);