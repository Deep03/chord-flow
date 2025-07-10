export interface Chord {
  name: string;
  diagram: string;
  fingers: string[];
  frets: number[];
  baseFret?: number;
}

export interface ChordProgression {
  id: string;
  name: string;
  chords: Chord[];
  strummingPattern: string[];
  createdAt: Date;
}

export interface StrummingPattern {
  id: string;
  name: string;
  pattern: string[];
  bpm: number;
}