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
