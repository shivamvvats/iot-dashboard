function updateData() {
  let temp = Math.floor(Math.random() * 40);
  let humidity = Math.floor(Math.random() * 100);

  let tempElement = document.getElementById("temp");
  let fireElement = document.getElementById("fire");

  tempElement.innerText = temp + " °C";
  document.getElementById("humidity").innerText = humidity + " %";

  if (temp > 30) {
    fireElement.innerText = "🔥 Fire Risk!";
    tempElement.style.color = "red";
  } else {
    fireElement.innerText = "Safe";
    tempElement.style.color = "white";
  }

  // Graph logic (same as before)
  if (tempData.length > 10) {
    tempData.shift();
    labels.shift();
  }

  tempData.push(temp);
  labels.push(new Date().toLocaleTimeString());

  tempChart.update();
}

setInterval(updateData, 2000);