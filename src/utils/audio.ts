/**
 * Subtle sound design for digital operating environment.
 * Generates delicate high-frequency feedback and harmonic pings.
 * Muted by default; enabled on user opt-in.
 */

let audioCtx: AudioContext | null = null;
let isAudioEnabled = false;

export function setAudioEnabled(enabled: boolean) {
  isAudioEnabled = enabled;
  if (enabled && !audioCtx && typeof window !== 'undefined') {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
}

export function getAudioEnabled(): boolean {
  return isAudioEnabled;
}

export function playPing(freq = 440, type: OscillatorType = 'sine', duration = 0.08, gainVal = 0.04) {
  if (!isAudioEnabled) return;
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) audioCtx = new AudioContextClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    if (!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch {
    // Graceful silent fallback
  }
}

export function playSynqChime() {
  if (!isAudioEnabled) return;
  playPing(520, 'sine', 0.12, 0.03);
  setTimeout(() => playPing(780, 'sine', 0.15, 0.025), 60);
  setTimeout(() => playPing(1040, 'sine', 0.2, 0.02), 120);
}

export function playNodeBlip(nodeIndex: number) {
  if (!isAudioEnabled) return;
  const baseFreqs = [330, 392, 440, 494, 523, 587, 659, 698, 784];
  const freq = baseFreqs[nodeIndex % baseFreqs.length] || 440;
  playPing(freq, 'triangle', 0.07, 0.025);
}

export function playClickSound() {
  if (!isAudioEnabled) return;
  playPing(600, 'sine', 0.04, 0.02);
}

export function playHoverSound() {
  if (!isAudioEnabled) return;
  playPing(950, 'sine', 0.025, 0.008);
}

export function playSuccessChime() {
  if (!isAudioEnabled) return;
  playPing(523.25, 'triangle', 0.09, 0.03); // C5
  setTimeout(() => playPing(659.25, 'triangle', 0.09, 0.03), 70); // E5
  setTimeout(() => playPing(783.99, 'triangle', 0.16, 0.035), 140); // G5
}

export function playAlertPulse() {
  if (!isAudioEnabled) return;
  playPing(220, 'sawtooth', 0.12, 0.04);
  setTimeout(() => playPing(200, 'sawtooth', 0.15, 0.035), 100);
}

export function playClapperSnap() {
  if (!isAudioEnabled) return;
  // Wooden clapper sharp snap
  playPing(1200, 'triangle', 0.02, 0.08);
  setTimeout(() => playPing(180, 'sine', 0.05, 0.06), 15);
}

export function playLaserPulse() {
  if (!isAudioEnabled) return;
  playPing(880, 'sine', 0.06, 0.03);
  setTimeout(() => playPing(1320, 'sine', 0.08, 0.025), 40);
  setTimeout(() => playPing(1760, 'triangle', 0.12, 0.02), 80);
}

export function toggleAudio(): boolean {
  const next = !isAudioEnabled;
  setAudioEnabled(next);
  if (next) {
    playSuccessChime();
  }
  return next;
}

