import '../App.css';

export default function LangSelector(){
    return (
        <div className="langSelect1">
            <div className="options-container">
              <div className="option">
                <input type="radio" className="radio" id="language1" name="originalLang"/>
                <label for="language1">ENGLISH</label>
              </div>
              <div className="option">
                <input type="radio" className="radio" id="language2" name="originalLang" />
                <label for="language2">SPANISH</label>
              </div>
              <div className="option">
                <input type="radio" className="radio" id="language3" name="originalLang" />
                <label for="language3">PORTUGUESE</label>
              </div>
              <div className="option">
                <input type="radio" className="radio" id="language4" name="originalLang" />
                <label for="language4">RUSSIAN</label>
              </div>
              <div className="option">
                <input type="radio" className="radio" id="language5" name="originalLang" />
                <label for="language5">JAPANESE</label>
              </div>
              <div className="option">
                <input type="radio" className="radio" id="language6" name="originalLang" />
                <label for="language6">FRENCH</label>
              </div>
              <div className="option">
                <input type="radio" className="radio" id="language7" name="originalLang" />
                <label for="language7">ITALIAN</label>
              </div>
              <div className="option">
                <input type="radio" className="radio" id="language8" name="originalLang" />
                <label for="language8">SWEDISH</label>
              </div>
              <div className="option">
                <input type="radio" className="radio" id="language9" name="originalLang" />
                <label for="language9">INDONESIAN</label>
              </div>
            </div>
            <div className="selected">Please Select a Language...</div>
    
            <div className="search-box">
              <input type="text" placeholder="Start Typing..." />
            </div>
          </div>
    )
}