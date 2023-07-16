// Fragment <></>
const newMessage = {
  message: "Hola",
  title: "gi@npc",
};

const getSaludo = (nombre) => {
  return "Hola " + nombre;
};

export const FirstApp = ( {title, subTitle } ) => {

  console.log(title);

  return (
    <>
      <h1>{title}</h1>
      <h2>{subTitle + 1}</h2>
      <h1>{getSaludo('Gian')}</h1>
      <code>{JSON.stringify(newMessage)}</code>
      <p>Soy un subtitulo</p>
    </>
  );
};
