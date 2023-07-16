// Fragment <></>
const newMessage = {
  message: "Hola",
  title: "gi@npc",
};

const getSaludo = (nombre) => {
  return "Hola " + nombre;
};

export const FirstApp = () => {
  return (
    <>
      <h1>{getSaludo('Gian')}</h1>
      <code>{JSON.stringify(newMessage)}</code>
      <p>Soy un subtitulo</p>
    </>
  );
};
