function MainContent({ pic, title, sub }) {
  return (
    <li>
      <img src={pic} alt="anh pic1 " />
      <h1>{title}</h1>
      <p>{sub}</p>
    </li>
  );
}
export default MainContent;
