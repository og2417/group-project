import './App.css';
import Nav from './Components/Nav';
import LangSelector from './Components/LangSelector';
import SwitchButton from './Components/SwtichButton';
import LangOutput from './Components/LangOutput';

const translate = require('translate');


function App() {

  
  setTimeout(() => { 
    // const field = document.querySelector(".input");
    // const btn = document.querySelector(".submit");
    const selected = document.querySelector(".selected");
    const optionsContainer = document.querySelector(".options-container");
    const searchBox = document.querySelector(".search-box input");
    const optionsList = document.querySelectorAll(".option");
    const selected2 = document.querySelector(".selected2");
    const optionsContainer2 = document.querySelector(".options-container2");
    const searchBox2 = document.querySelector(".search-box2 input");
    const optionsList2 = document.querySelectorAll(".option2");
    const buttonArea = document.querySelector(".switchButton");
    const switchButton = document.querySelector("#switchButton");
    const beforeText = document.querySelector(".beforeArea");
    const afterText = document.querySelector(".afterArea");
    const btn = document.querySelector('.translateButton');
    var textHolder;
    var langHolder;
    // Event for button to translate string when clicked

    switchButton.addEventListener("click", () => {
      buttonArea.classList.toggle('active');
    });
    
    selected.addEventListener("click", () => {
      optionsContainer.classList.toggle("active");
    
      searchBox.value = "";
      filterList("");
    
      if (optionsContainer.classList.contains("active")) {
        searchBox.focus();
      }
    });
    
    optionsList.forEach(o => {
      o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
      });
    });
    
    searchBox.addEventListener("keyup", function(e) {
      filterList(e.target.value);
    });
    
    const filterList = searchTerm => {
      searchTerm = searchTerm.toLowerCase();
      optionsList.forEach(option => {
        let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
        if (label.indexOf(searchTerm) !== -1) {
          option.style.display = "block";
        } else {
          option.style.display = "none";
        }
      });
    };
    
    
    selected2.addEventListener("click", () => {
        optionsContainer2.classList.toggle("active");
      
        searchBox2.value = "";
        filterList2("");
      
        if (optionsContainer2.classList.contains("active")) {
          searchBox2.focus();
        }
      });
      
      optionsList2.forEach(o2 => {
        o2.addEventListener("click", () => {
          selected2.innerHTML = o2.querySelector("label").innerHTML;
          optionsContainer2.classList.remove("active");
        });
      });
      
      searchBox2.addEventListener("keyup", function(e) {
        filterList2(e.target.value);
      });
      
      const filterList2 = searchTerm2 => {
        searchTerm2 = searchTerm2.toLowerCase();
        optionsList2.forEach(option2 => {
          let label = option2.firstElementChild.nextElementSibling.innerText.toLowerCase();
          if (label.indexOf(searchTerm2) !== -1) {
            option2.style.display = "block";
          } else {
            option2.style.display = "none";
          }
        });
      };
    
    
      switchButton.addEventListener("click", () => {
        langHolder = selected.innerHTML;
        selected.innerHTML = selected2.innerHTML;
        selected2.innerHTML = langHolder;
        textHolder = beforeText.value;
        beforeText.value = afterText.value;
        afterText.value = textHolder;
    
      });
      
    btn.addEventListener('click',() =>{
      console.log(langHolder);
      renderData(beforeText.value,{from: selected.innerHTML}, selected2.innerHTML);
      if(selected.innerHTML === 'Please Select a Language...' || selected2.innerHTML === 'Please Select a Language...' ){
        alert("Please Select the Language");
      }
    })
  }, 1000)

  // function doing the translation
  async function translateString(str, translateTo){
    translate.engine = 'google';
    const foo = await translate(str, translateTo)
    return foo
  }

  //function rendering the string onto the html
  async function renderData(str,ToLanguage) {
    let res = await translateString(str, ToLanguage);
    let container = document.querySelector('.afterArea');
    container.value = res;
  }

  return (
    <div className="App">
      <Nav />
      <LangSelector />
      <SwitchButton />
      <LangOutput />
      <textarea className="beforeArea" placeholder="Please enter some text."></textarea>
      <textarea className="afterArea" placeholder="Translation."></textarea>
      <button className="translateButton">Translate</button>
      {/* <div class="footer"> Abit Jestine, Daniel Jaglen, Matthew Richard, Odejobi Emmanuel, Ziad Essam Ziyada<br>- 2022 -</div> */}
    </div>
  );
}

export default App;
