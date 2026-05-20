 const modelSelect = document.getElementById("modelSelect");
    if (modelSelect) {
      modelSelect.addEventListener("change", (event) => {
        const selectedPage = event.target.value;
        if (!selectedPage) {
          return;
        }
        window.location.href = selectedPage;
      });
    }