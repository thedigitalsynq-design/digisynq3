/**
 * Tactical Web Audio API Synthesizer
 * Zero external audio assets, zero bandwidth, instant zero-latency feedback.
 */

class SoundFxEngine {
  private ctx: AudioContext | null = null;
  private muted: boolean = false;

  constructor() {
    // Read persisted sound preference from localStorage
    try {
      const stored = localStorage.getItem('cdc_sound_fx_muted');
      if (stored !== null) {
        this.muted = stored === 'true';
      }
    } catch {
      this.muted = false;
    }
  }

  private initCtx(): AudioContext | null {
    if (this.muted) return null;
    try {
      if (!this.ctx) {
        const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtxClass) {
          this.ctx = new AudioCtxClass();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        void this.ctx.resume();
      }
      return this.ctx;
    } catch {
      return null;
    }
  }

  public isMuted(): boolean {
    return this.muted;
  }

  public toggleMute(): boolean {
    this.muted = !this.muted;
    try {
      localStorage.setItem('cdc_sound_fx_muted', String(this.muted));
    } catch {
      // ignore
    }
    if (!this.muted) {
      this.playClick();
    }
    return this.muted;
  }

  public setMuted(mute: boolean) {
    this.muted = mute;
    try {
      localStorage.setItem('cdc_sound_fx_muted', String(this.muted));
    } catch {
      // ignore
    }
  }

  /**
   * Crisp tactical UI tap
   */
  public playClick() {
    const ctx = this.initCtx();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      // AudioContext error handling
    }
  }

  /**
   * Radar ping / telemetry pulse sound
   */
  public playRadarPing() {
    const ctx = this.initCtx();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(720, ctx.currentTime + 0.18);

      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.18);
    } catch {
      // ignore
    }
  }

  /**
   * Threat warning / leak detection alert siren
   */
  public playAlert() {
    const ctx = this.initCtx();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      
      // Dual-tone urgent chirp
      osc.frequency.setValueAtTime(580, now);
      osc.frequency.linearRampToValueAtTime(880, now + 0.1);
      osc.frequency.linearRampToValueAtTime(580, now + 0.2);
      osc.frequency.linearRampToValueAtTime(920, now + 0.3);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.35);
    } catch {
      // ignore
    }
  }

  /**
   * Success / Takedown issued confirmation chime
   */
  public playSuccess() {
    const ctx = this.initCtx();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      // 2 chord tones: C6 (1046Hz) and G6 (1568Hz)
      [1046.5, 1567.98].forEach((freq, idx) => {
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + (idx * 0.08));

        gain.gain.setValueAtTime(0.07, now + (idx * 0.08));
        gain.gain.exponentialRampToValueAtTime(0.001, now + (idx * 0.08) + 0.25);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + (idx * 0.08));
        osc.stop(now + (idx * 0.08) + 0.25);
      });
    } catch {
      // ignore
    }
  }
}

export const soundFx = new SoundFxEngine();
