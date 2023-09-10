const flagBtn = document.getElementById('flags')
const textsToTranslate = document.querySelectorAll('[data-section]')
console.log(textsToTranslate)
const changeLang = async (lang) => {
  const langJson = await fetch(`./json/${lang}.json`);
  const textJson = await langJson.json();
  for(const translateText of textsToTranslate){
    const Tsection = translateText.dataset.section;
    const Tvalue = translateText.dataset.value;
    translateText.innerHTML=textJson[Tsection][Tvalue];
  }
}

flagBtn.addEventListener('click', (e) => {
  changeLang(e.target.parentElement.dataset.language)
})

changeLang(es);