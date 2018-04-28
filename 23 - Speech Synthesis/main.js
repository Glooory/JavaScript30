const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakBtn = document.querySelector('#speak');
const stopBtn = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
        .filter(voice => voice.lang.includes('en'))
        .map(voice => {
            return `
                <option value="${voice.name}">${voice.name} ${voice.lang}</option>
            `;
        }).join('');
}

function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggleSpeaking();
}

function toggleSpeaking(startOver = true) {
    speechSynthesis.cancel();
    if (startOver) {
        speechSynthesis.speak(msg);
    }
}

function setOption() {
    msg[this.name] = this.value;
    toggleSpeaking();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakBtn.addEventListener('click', toggleSpeaking);
stopBtn.addEventListener('click', () => toggleSpeaking(false));