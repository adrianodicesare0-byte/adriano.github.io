const musicTracks = {
    track1: new Audio("data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAASAAAAQD7/pAAAAAABAAAAAFlV/6kBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AxgAgT0JAAAAAQQAAA0FEQVRTU0se9/gA//8AxQAgT0JSAAAARwAAAnNDb21tZW50AFNvZnR3YXJlAEVuY29kZWQgYnkgbGFtZTMuOTguNAAAAP//AMYAIERFVElUAAAAaAAAANgAAAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/pwEAAAAAAAAAAAAAAFlV/6kBAAAAAAAAADtBTFVNAgAAAAFBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//8AxwAA"),
    track2: new Audio("data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAASAAAAQD7/pAAAAAABAAAAAFlV/6kBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AxgAgT0JAAAAAQQAAA0FEQVRTU0se9/gA//8AxQAgT0JSAAAARwAAAnNDb21tZW50AFNvZnR3YXJlAEVuY29kZWQgYnkgbGFtZTMuOTguNAAAAP//AMYAIERFVElUAAAAaAAAANgAAAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/pQEAAAAAAAAAAAAAAFlV/6kBAAAAAAAAADtBTFVNAgAAAAFBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//8AxwAA"),
};
let currentTrack = null;
let voices = [];
const synth = window.speechSynthesis;
let state = {};
const UIElements = {};
const elementIds = ['welcomeMessage', 'workTime', 'restTime', 'totalRounds', 'exerciseList', 'startBtn', 'pauseBtn', 'resetBtn', 'currentExercise', 'status', 'timer', 'rounds', 'progressBar', 'routineName', 'saveBtn', 'routineSelect', 'deleteBtn', 'userName', 'voiceSelect', 'themeToggle', 'logList', 'musicSelect', 'volumeSlider'];
elementIds.forEach(id => UIElements[id] = document.getElementById(id));

function speak(text) {
    try {
        synth.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        const selectedVoiceName = UIElements.voiceSelect.value;
        const selectedVoice = voices.find(voice => voice.name === selectedVoiceName);
        if (selectedVoice) utterance.voice = selectedVoice;
        utterance.lang = 'es-ES';
        utterance.rate = 1.1;
        synth.speak(utterance);
    } catch (e) { console.error("Error en la función de voz:", e); }
}

function timerTick() {
    if (state.isPaused) return;
    state.timeRemaining--;
    updateDisplays();
    if (state.timeRemaining <= 3 && state.timeRemaining > 0 && ['working', 'resting', 'preparing'].includes(state.phase)) {
        speak(state.timeRemaining);
    }
    if (state.timeRemaining < 0) {
        switchPhase();
    }
}

function switchPhase() {
    if (state.phase === 'preparing') {
        state.phase = 'working'; state.currentRound = 1; state.timeRemaining = parseInt(UIElements.workTime.value);
    } else if (state.phase === 'working') {
        state.phase = 'resting'; state.timeRemaining = parseInt(UIElements.restTime.value);
    } else if (state.phase === 'resting') {
        state.currentRound++;
        if (state.currentRound > state.totalRounds) { finishWorkout(); return; }
        state.phase = 'working'; state.timeRemaining = parseInt(UIElements.workTime.value);
    }
    state.totalTimeForPhase = state.timeRemaining;
    updateDisplays(true);
}

function startWorkout() {
    if (state.phase !== 'idle') return;
    state.totalRounds = parseInt(UIElements.totalRounds.value);
    state.exercises = UIElements.exerciseList.value.split('\n').filter(e => e.trim() !== '');
    state.phase = 'preparing'; state.timeRemaining = 5; state.totalTimeForPhase = 5; state.isPaused = false;
    updateDisplays(true);
    state.countdown = setInterval(timerTick, 1000);
    playMusic();
}

function pauseWorkout() {
    if (['idle', 'finished'].includes(state.phase)) return;
    state.isPaused = !state.isPaused;
    UIElements.pauseBtn.textContent = state.isPaused ? 'Reanudar' : 'Pausa';
    speak(state.isPaused ? 'Pausa' : 'Reanudando');
    if (currentTrack) { state.isPaused ? currentTrack.pause() : currentTrack.play(); }
}

function finishWorkout() {
    clearInterval(state.countdown);
    state.phase = 'finished';
    const userName = localStorage.getItem('hiit_userName') || '';
    speak(`Entrenamiento finalizado. ¡Excelente trabajo, ${userName}!`);
    logWorkout();
    stopMusic();
    updateDisplays();
}

function resetAll() {
    clearInterval(state.countdown);
    state = { countdown: null, timeRemaining: 0, totalTimeForPhase: 0, currentRound: 0, totalRounds: 0, exercises: [], phase: 'idle', isPaused: false };
    UIElements.pauseBtn.textContent = 'Pausa';
    stopMusic();
    updateDisplays();
}

function updateDisplays(announce = false) {
    const { phase, timeRemaining, currentRound, totalRounds, exercises } = state;
    const safeTime = Math.max(0, timeRemaining);
    const mins = Math.floor(safeTime / 60); const secs = safeTime % 60;
    UIElements.timer.textContent = `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    UIElements.progressBar.style.width = state.totalTimeForPhase > 0 ? `${(safeTime / state.totalTimeForPhase) * 100}%` : '100%';

    let statusText = '', exerciseText = '', bgColor = 'var(--bg-color)', roundsText = '\u00A0';
    const userName = localStorage.getItem('hiit_userName') || 'crack';
    
    switch (phase) {
        case 'idle': statusText = 'Presiona Empezar'; exerciseText = `¡Vamos, ${userName}!`; break;
        case 'preparing': statusText = 'Preparación'; exerciseText = 'Empezamos en...'; bgColor = 'var(--prepare-color)'; if (announce) speak('Prepárate'); break;
        case 'working':
            const exerciseIndex = (currentRound - 1) % (exercises.length || 1);
            exerciseText = exercises.length > 0 ? exercises[exerciseIndex] : '¡A ENTRENAR!';
            statusText = '¡A ENTRENAR!'; bgColor = 'var(--work-color)'; roundsText = `Ronda: ${currentRound} / ${totalRounds}`;
            if (announce) speak(exerciseText);
            break;
        case 'resting': statusText = 'DESCANSO'; exerciseText = 'Relájate...'; bgColor = 'var(--rest-color)'; roundsText = `Ronda: ${currentRound} / ${totalRounds}`; if (announce) speak('Descanso'); break;
        case 'finished': statusText = '¡TERMINASTE!'; exerciseText = `¡Excelente Trabajo, ${userName}!`; bgColor = 'var(--done-color)'; break;
    }
    UIElements.status.textContent = statusText; UIElements.currentExercise.textContent = exerciseText; UIElements.rounds.textContent = roundsText; document.body.style.backgroundColor = bgColor;
}

function playMusic() {
    stopMusic();
    const selectedTrack = UIElements.musicSelect.value;
    if (selectedTrack !== 'none') {
        currentTrack = musicTracks[selectedTrack];
        currentTrack.loop = true;
        currentTrack.volume = UIElements.volumeSlider.value;
        currentTrack.play().catch(e => console.error("Error al reproducir música:", e));
    }
}

function stopMusic() {
    if (currentTrack) {
        currentTrack.pause();
        currentTrack.currentTime = 0;
        currentTrack = null;
    }
}

function setMusicVolume() {
    const volume = UIElements.volumeSlider.value;
    if (currentTrack) { currentTrack.volume = volume; }
    localStorage.setItem('hiit_musicVolume', volume);
}

function saveAndApplyUsername() {
    const userName = UIElements.userName.value.trim();
    if (userName) {
        localStorage.setItem('hiit_userName', userName);
        UIElements.welcomeMessage.textContent = `Coach de ${userName}`;
    }
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('hiit_theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
}

function logWorkout() {
    let log = JSON.parse(localStorage.getItem('hiit_log')) || [];
    const routineName = UIElements.routineName.value.trim() || "Rutina Rápida";
    const date = new Date();
    log.unshift({ name: routineName, date: date.toLocaleDateString('es-ES') });
    if (log.length > 10) log.pop();
    localStorage.setItem('hiit_log', JSON.stringify(log));
    displayLog();
}

function displayLog() {
    let log = JSON.parse(localStorage.getItem('hiit_log')) || [];
    UIElements.logList.innerHTML = log.length === 0 ? '<li>Aún no has completado entrenamientos.</li>' : log.map(entry => `<li>✓ ${entry.name} - ${entry.date}</li>`).join('');
}

function populateVoiceList() {
    voices = synth.getVoices();
    const selectedVoiceName = localStorage.getItem('hiit_voice');
    UIElements.voiceSelect.innerHTML = '<option value="">Voz por defecto</option>';
    voices.forEach(voice => {
        if (voice.lang.startsWith('es')) {
            const option = document.createElement('option');
            option.textContent = `${voice.name} (${voice.lang})`;
            option.value = voice.name;
            UIElements.voiceSelect.appendChild(option);
        }
    });
    if (selectedVoiceName) UIElements.voiceSelect.value = selectedVoiceName;
}

function saveRoutine() {
    const name = UIElements.routineName.value.trim(); if (!name) { alert('Ponle un nombre a tu rutina.'); return; }
    const routine = { name, workTime: UIElements.workTime.value, restTime: UIElements.restTime.value, totalRounds: UIElements.totalRounds.value, exercises: UIElements.exerciseList.value };
    localStorage.setItem(`hiit_routine_${name}`, JSON.stringify(routine));
    populateRoutines(); UIElements.routineSelect.value = name; speak('Rutina guardada');
}
function loadRoutine() {
    const name = UIElements.routineSelect.value; const routineJSON = localStorage.getItem(`hiit_routine_${name}`); if (!routineJSON) return;
    const routine = JSON.parse(routineJSON);
    UIElements.routineName.value = routine.name; UIElements.workTime.value = routine.workTime; UIElements.restTime.value = routine.restTime; UIElements.totalRounds.value = routine.totalRounds; UIElements.exerciseList.value = routine.exercises;
    speak('Rutina cargada');
}
function deleteRoutine() {
    const name = UIElements.routineSelect.value; if (!name || name === "Cargar rutina...") return;
    if (confirm(`¿Borrar la rutina "${name}"?`)) { localStorage.removeItem(`hiit_routine_${name}`); populateRoutines(); speak('Rutina borrada'); }
}
function populateRoutines() {
    UIElements.routineSelect.innerHTML = '<option>Cargar rutina...</option>';
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('hiit_routine_')) {
            const routine = JSON.parse(localStorage.getItem(key));
            const option = document.createElement('option'); option.value = routine.name; option.textContent = routine.name;
            UIElements.routineSelect.appendChild(option);
        }
    }
}

UIElements.startBtn.addEventListener('click', startWorkout);
UIElements.pauseBtn.addEventListener('click', pauseWorkout);
UIElements.resetBtn.addEventListener('click', resetAll);
UIElements.saveBtn.addEventListener('click', saveRoutine);
UIElements.deleteBtn.addEventListener('click', deleteRoutine);
UIElements.routineSelect.addEventListener('change', loadRoutine);
UIElements.userName.addEventListener('change', saveAndApplyUsername);
UIElements.themeToggle.addEventListener('change', toggleTheme);
UIElements.voiceSelect.addEventListener('change', (e) => localStorage.setItem('hiit_voice', e.target.value));
UIElements.musicSelect.addEventListener('change', () => { if (state.phase !== 'idle' && state.phase !== 'finished') playMusic(); });
UIElements.volumeSlider.addEventListener('input', setMusicVolume);

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('hiit_theme');
    if (savedTheme === 'light') { document.body.classList.add('light-mode'); UIElements.themeToggle.checked = true; }
    const savedName = localStorage.getItem('hiit_userName');
    if (savedName) { UIElements.userName.value = savedName; UIElements.welcomeMessage.textContent = `Coach de ${savedName}`; }
    
    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) { speechSynthesis.onvoiceschanged = populateVoiceList; }
    
    const savedVolume = localStorage.getItem('hiit_musicVolume') || '0.5';
    UIElements.volumeSlider.value = savedVolume;

    populateRoutines();
    displayLog();
    resetAll();
});