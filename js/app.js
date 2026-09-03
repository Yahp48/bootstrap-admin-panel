document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("form[role='search']").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const input = form.querySelector("input");
      if (input && input.value.trim()) input.blur();
    });
  });

  document.querySelectorAll("form[data-demo-form]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const message = form.dataset.success || "Değişiklikler kaydedildi.";
      const toast = document.getElementById("actionToast");
      if (toast) {
        toast.querySelector(".toast-body").textContent = message;
        bootstrap.Toast.getOrCreateInstance(toast).show();
      }
      const modal = form.closest(".modal");
      if (modal) bootstrap.Modal.getOrCreateInstance(modal).hide();
      form.reset();
    });
  });

  document.querySelectorAll("[data-action='logout']").forEach(function (button) {
    button.addEventListener("click", function () {
      const toast = document.getElementById("actionToast");
      if (toast) {
        toast.querySelector(".toast-body").textContent = "Güvenli çıkış işlemi başlatıldı.";
        bootstrap.Toast.getOrCreateInstance(toast).show();
      }
    });
  });
});
