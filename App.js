const captureButton = document.getElementById('captureButton');
const cameraInput = document.getElementById('cameraInput');

captureButton.addEventListener('click', () => {
    // Trigger the input element to allow the user to take a picture
    cameraInput.click();
});

cameraInput.addEventListener('change', (event) => {
    // Retrieve the selected image file from the input element
    const imageFile = event.target.files[0];
  
    // Display the selected image on the page (optional)
    const imageElement = document.createElement('img');
    imageElement.src = URL.createObjectURL(imageFile);
    document.body.appendChild(imageElement);

    // Now you can upload the image to your server or process it as needed
    // You can access the image data using the `FileReader` API if necessary
});
