function previewImage(event) {
  const input = event.target;
  const file = input.files[0];
  const preview = document.getElementById("preview");
  const uploadText = document.getElementById("uploadText");
  const deleteButton = document.getElementById("deletePhoto");

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.classList.remove("hidden"); // Tampilkan gambar
      uploadText.classList.add("hidden"); // Sembunyikan teks upload
      deleteButton.classList.remove("hidden"); // Tampilkan tombol delete
    };
    reader.readAsDataURL(file);
  }
}

function removeImage() {
  const preview = document.getElementById("preview");
  const uploadText = document.getElementById("uploadText");
  const deleteButton = document.getElementById("deletePhoto");
  const fileInput = document.getElementById("photoUpload");

  // Reset tampilan
  preview.src = "";
  preview.classList.add("hidden"); // Sembunyikan gambar
  uploadText.classList.remove("hidden"); // Tampilkan kembali teks upload
  deleteButton.classList.add("hidden"); // Sembunyikan tombol delete

  // Reset input file
  fileInput.value = "";
}
