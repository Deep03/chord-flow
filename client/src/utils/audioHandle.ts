let audioContext: AudioContext | null = null;
let analyser: AnalyserNode | null = null;
let dataArray: Uint8Array | null = null;
let animationId: number | null = null;
let stream: MediaStream | null = null;

export async function startAudio() {
  try {
    console.log("RAN TRY")
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    audioContext = new AudioContext();
    const source = audioContext.createMediaStreamSource(stream);
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;
    source.connect(analyser);

    const bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);

    function logFrequencyData() {
      if (!analyser || !dataArray) return;
      analyser.getByteFrequencyData(dataArray);
      console.log(dataArray);
      animationId = requestAnimationFrame(logFrequencyData);
    }

    logFrequencyData();
  } catch (err) {
    console.error('Error accessing microphone', err);
  }
}

export function closeAudio() {
  if (animationId !== null) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }

  if (stream) {
    stream.getTracks().forEach(track => track.stop());
    stream = null;
  }

  if (audioContext) {
    audioContext.close();
    audioContext = null;
  }

  analyser = null;
  dataArray = null;
}
