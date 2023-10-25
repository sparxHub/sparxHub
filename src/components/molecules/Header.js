// components/Header.js

function Header(props) {
  const { title, description } = props;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* You can add more meta tags or any other head elements here */}
    </>
  );
}

export default Header;
