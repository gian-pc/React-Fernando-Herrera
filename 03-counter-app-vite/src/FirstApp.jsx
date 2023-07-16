
import PropTypes from 'prop-types';

export const FirstApp = ( {title, subTitle } ) => {

  console.log(title);

  return (
    <>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <p>Soy un subtitulo</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number
  
}
