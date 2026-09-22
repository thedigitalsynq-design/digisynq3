// Audio Telemetry Engine using standard Web Audio API
// Produces subtle, cinematic, tactile feedback without external audio asset downloads

let audioCtx = null;
let isAudioMuted = false;

// Check stored preference
if (typeof window !== 'undefined') {
  try {
    isAudioMuted = localStorage.getItem('fixsynq_muted') === 'true';
  } catch {
    isAudioMuted = false;
  }
}

function getContext() {
  if (isAudioMuted || typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

export const audioTelemetry = {
  isMuted: () => isAudioMuted,
  setMuted: (muted) => {
    isAudioMuted = muted;
    try {
      localStorage.setItem('fixsynq_muted', muted ? 'true' : 'false');
    } catch {}
  },
  toggleMute: () => {
    isAudioMuted = !isAudioMuted;
    try {
      localStorage.setItem('fixsynq_muted', isAudioMuted ? 'true' : 'false');
    } catch {}
    return isAudioMuted;
  },

  // Subtle tick on node hover
  playHover: () => {
    const ctx = getContext();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1400, ctx.currentTime);
      gain.gain.setValueAtTime(0.015, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.03);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.035);
    } catch {}
  },

  // Resonant blip on selecting a node
  playSelect: () => {
    const ctx = getContext();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(520, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(780, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } catch {}
  },

  // Step tone that shifts pitch with step progress
  playStep: (stepNumber = 1) => {
    const ctx = getContext();
    if (!ctx) return;
    try {
      const pitches = [330, 392, 440, 523, 659, 784];
      const freq = pitches[Math.min(stepNumber - 1, pitches.length - 1)] || 440;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.18);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } catch {}
  },

  // Deep resonant pulse when root cause is exposed
  playRootFound: () => {
    const ctx = getContext();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const sub = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(110, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(73, ctx.currentTime + 0.35);

      sub.type = 'sine';
      sub.frequency.setValueAtTime(55, ctx.currentTime);

      gain.gain.setValueAtTime(0.07, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4);

      osc.connect(gain);
      sub.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      sub.start();
      osc.stop(ctx.currentTime + 0.42);
      sub.stop(ctx.currentTime + 0.42);
    } catch {}
  },

  // Success sequence for problem intake submission
  playSuccess: () => {
    const ctx = getContext();
    if (!ctx) return;
    try {
      const notes = [440, 554, 659, 880];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
        gain.gain.setValueAtTime(0.04, ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.08 + 0.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.22);
      });
    } catch {}
  }
};
