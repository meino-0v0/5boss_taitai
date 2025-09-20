const GAS_URL = "https://script.google.com/macros/s/AKfycbyF6RfmgKukYwRkH3Isroku9O4audNrvBMX8kqzxXuCNMQaYUXb2xOP9KyXr1RWbaK7zw/exec";

const sumiContainer = document.getElementById("sumi");

function updateSumi() {
  fetch(GAS_URL)
    .then(response => {
      if (!response.ok) throw new Error(`HTTPエラー: ${response.status}`);
      return response.json();
    })
    .then(data => {
      const checks = data.checks; 
      sumiContainer.innerHTML = ""; // 既存の済画像を全消し

      checks.forEach((checked, index) => {
        if (checked) {
          const div = document.createElement("div");
          div.classList.add("sumi-icon", `sumi-${index}`);
          sumiContainer.appendChild(div);
        }
      });
    })
    .catch(error => {
      console.error("データ取得に失敗しました:", error);
    });
}

setInterval(updateSumi, 2000);
updateSumi();
