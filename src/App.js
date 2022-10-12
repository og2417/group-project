import './App.css';

const translate = require('translate');

function App() {

  
  setTimeout(() => { 
    const field = document.querySelector(".input");
    const btn = document.querySelector(".submit");
    // Event for button to translate string when clicked
    btn.addEventListener('click',() =>{
      renderData(field.value, 'es');
    })
  }, 1000)

  // function doing the translation
  async function translateString(str, translateTo){
    translate.engine = 'google';
    const foo = await translate(str, translateTo)
    return foo
  }

  //function rendering the string onto the html
  async function renderData(str,language) {
    let res = await translateString(str, language);
    let html = '';
      html = `<div class="Items">
      <p class="item--price">${res}</p>
      </div>`;
      let container = document.querySelector('.output');
      container.innerHTML = html;
  }

  return (
    <div className="App">
      <textarea className="input"></textarea>
      <button className='submit'>Translate</button>
      <div className='output'></div>
    </div>
  );
}

export default App;
