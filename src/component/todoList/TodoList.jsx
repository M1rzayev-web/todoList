import React, {useState} from 'react';
import "./TodoList.css"
function TodoList() {
    const [showTommy, setShowtommy] = useState(false);
    const [showBigdrop, setShowBigdrop] = useState(false);
    const [showCuker, setShowCuker] = useState(false);

    const handleListButton = () => {
        setShowtommy(!showTommy);
        setShowBigdrop(false);
        setShowCuker(false);
        
        
    };
    const handleBigdropButton = () => {
        setShowBigdrop(!showBigdrop);
        setShowtommy(false);
        setShowCuker(false);

        
        
    }
    const handleCukerButton = () => {
        setShowCuker(!showCuker);
        setShowtommy(false);
        setShowBigdrop(false);


    };

  return (
    <div className="TodoList">
      <div className="TodoLeft">
        <div className="button">
          <button onClick={handleListButton}>TOMMY</button>
          <button onClick={handleBigdropButton}>BIGDROP</button>
          <button onClick={handleCukerButton}>CUKER</button>
        </div>
      </div>
      <div className="TodoRight">
        {showTommy ? <List /> : ""}
        {showBigdrop ? <Bigdrop /> : ""}
        {showCuker ? <Cuker /> : ""}
      </div>
    </div>
  );
}


export default TodoList;


function List() {
  return (
    <div className="RightList">
      <h1>Full Stack Web Developer</h1>
      <h4>Toomy</h4>
      <p>December 2015 - Present</p>
      <span className="rightSpan">
        <i class="fa-solid fa-angles-right"></i>
        <p>
          Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke
          leggings offal cold-pressed brunch neutra. Hammock photo booth
          live-edge disrupt.
        </p>
      </span>
      <span className="rightSpan">
        <i class="fa-solid fa-angles-right"></i>
        <p>
          Post-ironic selvage chambray sartorial freegan meditation. Chambray
          chartreuse kombucha meditation, man bun four dollar toast street art
          cloud bread live-edge heirloom.
        </p>
      </span>
      <span className="rightSpan">
        <i class="fa-solid fa-angles-right"></i>
        <p>
          Butcher drinking vinegar franzen authentic messenger bag copper mug
          food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas
          single-origin coffee franzen cloud bread tilde vegan flexitarian.
        </p>
      </span>
    </div>
  );
}

function Bigdrop() {
  return (
    <div className="RightList">
      <h1>Front-End Engineer</h1>
      <h4>Bigdrop</h4>
      <p>May 2015 - December 2015</p>
      <span className="rightSpan">
        <i class="fa-solid fa-angles-right"></i>
        <p>
          Hashtag drinking vinegar scenester mumblecore snackwave four dollar
          toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel
          vexillologist viral squid.
        </p>
      </span>
      <span className="rightSpan">
        <i class="fa-solid fa-angles-right"></i>
        <p>
          Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la
          croix cardigan neutra retro tattooed copper mug. Meditation lomo
          biodiesel scenester
        </p>
      </span>
      <span className="rightSpan">
        <i class="fa-solid fa-angles-right"></i>
        <p>
          Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack
          vape authentic. Helvetica fixie church-key, small batch jianbing
          messenger bag scenester +1
        </p>
      </span>
      <span className="rightSpan">
        <i class="fa-solid fa-angles-right"></i>
        <p>
          Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack
          vape authentic. Helvetica fixie church-key, small batch jianbing
          messenger bag scenester +1
        </p>
      </span>
    </div>
  );
}
function Cuker() {
  return (
    <div className="RightList">
      <h1>Engineering Intern</h1>
      <h4>Cuker</h4>
      <p>December 2015 - Present</p>
      <span className="rightSpan">
        <i class="fa-solid fa-angles-right"></i>
        <p>
          I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork
          belly, blog vape four loko sriracha messenger bag jean shorts DIY
          bushwick VHS. Banjo post-ironic hella af, palo santo craft beer
          gluten-free.
        </p>
      </span>
      <span className="rightSpan">
        <i class="fa-solid fa-angles-right"></i>
        <p>
          YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk
          pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo
          tote bag, palo santo subway tile slow-carb post-ironic pug ugh
          taxidermy squid.
        </p>
      </span>
      <span className="rightSpan">
        <i class="fa-solid fa-angles-right"></i>
        <p>
          Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips
          asymmetrical craft beer actually forage, biodiesel tattooed
          fingerstache. Pork belly lomo man braid, portland pitchfork locavore
          man bun prism.
        </p>
      </span>
    </div>
  );
}