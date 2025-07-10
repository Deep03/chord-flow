import { Chord } from '../types';

export const CHORD_LIBRARY: Chord[] = [
  {
    name: 'C Major',
    diagram: 'c-major',
    fingers: ['1', '2', '3'],
    frets: [0, 1, 0, 2, 3, 0],
    baseFret: 1
  },
  {
    name: 'G Major',
    diagram: 'g-major',
    fingers: ['2', '1', '3', '4'],
    frets: [3, 2, 0, 0, 3, 3],
    baseFret: 1
  },
  {
    name: 'A Minor',
    diagram: 'a-minor',
    fingers: ['2', '3', '1'],
    frets: [0, 0, 2, 2, 1, 0],
    baseFret: 1
  },
  {
    name: 'F Major',
    diagram: 'f-major',
    fingers: ['1', '3', '4', '2'],
    frets: [1, 1, 3, 3, 2, 1],
    baseFret: 1
  },
  {
    name: 'D Minor',
    diagram: 'd-minor',
    fingers: ['1', '2', '3'],
    frets: [-1, -1, 0, 2, 3, 1],
    baseFret: 1
  },
  {
    name: 'E Minor',
    diagram: 'e-minor',
    fingers: ['2', '3'],
    frets: [0, 2, 2, 0, 0, 0],
    baseFret: 1
  },
  {
    name: 'D Major',
    diagram: 'd-major',
    fingers: ['1', '3', '2'],
    frets: [-1, -1, 0, 2, 3, 2],
    baseFret: 1
  },
  {
    name: 'A Major',
    diagram: 'a-major',
    fingers: ['1', '2', '3'],
    frets: [0, 0, 2, 2, 2, 0],
    baseFret: 1
  },
  {
    name: 'E Major',
    diagram: 'e-major',
    fingers: ['2', '3', '1'],
    frets: [0, 2, 2, 1, 0, 0],
    baseFret: 1
  },
  {
    name: 'B Minor',
    diagram: 'b-minor',
    fingers: ['1', '3', '4', '2'],
    frets: [-1, 2, 4, 4, 3, 2],
    baseFret: 2
  },
  {
    name: 'C# Minor',
    diagram: 'cs-minor',
    fingers: ['1', '3', '4', '2'],
    frets: [-1, -1, 6, 6, 5, 4],
    baseFret: 4
  },
  {
    name: 'F# Minor',
    diagram: 'fs-minor',
    fingers: ['1', '3', '4', '2'],
    frets: [2, 4, 4, 2, 2, 2],
    baseFret: 2
  }
];

export const STRUMMING_PATTERNS = [
  { id: '1', name: 'Basic Down', pattern: ['D', 'D', 'D', 'D'], bpm: 120 },
  { id: '2', name: 'Down Up', pattern: ['D', 'U', 'D', 'U'], bpm: 120 },
  { id: '3', name: 'Folk Pattern', pattern: ['D', 'D', 'U', 'U', 'D', 'U'], bpm: 100 },
  { id: '4', name: 'Pop Pattern', pattern: ['D', 'D', 'U', 'D', 'U'], bpm: 110 },
  { id: '5', name: 'Country', pattern: ['D', 'D', 'U', 'D', 'D', 'U'], bpm: 130 },
];