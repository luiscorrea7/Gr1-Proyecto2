const flagBtn = document.getElementById('flags')
const textsForTranslate = document.querySelectorAll('[data-section]')
export const changeLang = async (lang) => {
  const langJson = await fetch(`./json/${lang}.json`);
  const textJson = await langJson.json();
  for(const translateText of textsForTranslate){
    const Tsection = await translateText.dataset.section;
    const Tvalue = await translateText.dataset.value;
    translateText.innerHTML=textJson[Tsection][Tvalue];
  }
}

flagBtn.addEventListener('click', (e) => {
  changeLang(e.target.parentElement.dataset.language)
})