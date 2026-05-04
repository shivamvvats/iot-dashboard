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

  document.getElementById("temp").innerText = temp + " °C";
  document.getElementById("humidity").innerText = humidity + " %";

  if (temp > 30) {
    document.getElementById("fire").innerText = "🔥 Fire Risk!";
  } else {
    document.getElementById("fire").innerText = "Safe";
  }

  if (tempData.length > 10) {
    tempData.shift();
    labels.shift();
  }

  tempData.push(temp);
  labels.push(new Date().toLocaleTimeString());

  tempChart.update();
}

setInterval(updateData, 2000);