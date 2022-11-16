
const msg = new SpeechSynthesisUtterance();
let voices = []; // our voices are going to be dumped into
const voicesDropdown = document.querySelector("[name='voice']");
const options = document.querySelectorAll("[type='range'], [name='text']");
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");

msg.text = document.querySelector("[name = 'text']").value;

function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
      .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
      .join("");
}

function setVoice(){
  msg.voice = voices.find(voice => voice.name === this.value); // this is every option in the dropdown menu
  toggle();
}

function toggle(startOver = true) {
  speechSynthesis.cancel(); // stop it from speaking
  if(startOver){
    speechSynthesis.speak(msg); // restart the speech
  }
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);

voicesDropdown.addEventListener("change", setVoice); // set voice value as different options are selected
