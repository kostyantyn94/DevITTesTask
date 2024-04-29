function getBase64FromUrl(url) {
  return new Promise((resolve, reject) => {
    const imageUrl = new URL(url);

    fetch(imageUrl)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64String = reader.result.split(",")[1];
          const contentType = blob.type;
          const dataUrl = `data:${contentType};base64,${base64String}`;
          resolve(dataUrl);
        };
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(blob);
      })
      .catch((error) => reject(error));
  });
}

getBase64FromUrl(
  "https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8"
)
  .then((base64String) => console.log(base64String))
  .catch((error) => console.error(error));
