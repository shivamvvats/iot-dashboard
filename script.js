let tempData = [];
let labels = [];

const ctx = document.getElementById('tempChart').getContext('2d');

const tempChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Temperature (°C)',
      data: tempData,
      borderWidth: 2
    }]
  },
  options: {
    responsive: true
  }
});

function updateData() {
  let temp = Math.floor(Math.random() * 40);
  let humidity = Math.floor(Math.random() * 100);

  let tempElement = document.getElementById("temp");
  let fireElement = document.getElementById("fire");

  tempElement.innerText = temp + " °C";
  document.getElementById("humidity").innerText = humidity + " %";

  // 🔥 ALERT SYSTEM
  if (temp > 30) {
    fireElement.innerText = "🔥 Fire Risk!";
    tempElement.style.color = "red";
  } else {
    fireElement.innerText = "Safe";
    tempElement.style.color = "white";
  }

  // 📊 GRAPH UPDATE
  if (tempData.length > 10) {
    tempData.shift();
    labels.shift();
  }

  tempData.push(temp);
  labels.push(new Date().toLocaleTimeString());

  tempChart.update();
}

setInterval(updateData, 2000);