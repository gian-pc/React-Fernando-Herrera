// async $ await

const getImagen = async () => {
  try {
    const apiKey = "1W44b6WtfLoo6Xhrp5KxV585rs9I9thI";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  } catch (error) {
    console.log(error);
  }
};

getImagen();
