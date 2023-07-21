// Get access to the user's camera
const constraints = { video: true };
const video = document.getElementById('cameraFeed');

async function initCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;
    } catch (error) {
        console.error('Error accessing the camera:', error);
    }
}

// Call the initCamera function when the page is loaded
document.addEventListener('DOMContentLoaded', initCamera);

const captureButton = document.getElementById('captureButton');

captureButton.addEventListener('click', () => {
    // Create a canvas to capture the image
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current camera frame onto the canvas
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert the canvas content to a data URL (base64 encoded image)
    const dataURL = canvas.toDataURL('image/jpeg');

    // You can now use the dataURL to display the image or send it to the server
    // For example, you can create an <img> element with the captured image:
    const imageElement = document.createElement('img');
    imageElement.src = dataURL;
    document.body.appendChild(imageElement);
});
