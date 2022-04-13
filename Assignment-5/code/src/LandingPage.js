import "./App.css";
const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="imge">
        <img src="https://bsmedia.business-standard.com/_media/bs/img/about-page/thumb/464_464/1600047009.jpg" alt="Cover" />
      </div>
      <div className="conatiner">
        <h1>
          10x Team 04
          <button className="bt" type="submit">
            {/* <a href="http://localhost:3004/"> */}
            <a href="http://localhost:3000/">Enter</a>
          </button>
        </h1>
      </div>
    </div>
  );
};
export default LandingPage; 