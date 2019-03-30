/**
 * Filename: midi-player.ts
 * Author: rnunez
 * Date: 03/21/2019
 * Description: main program file
 */

import {MidiWriter} from 'midi-writer-js';

const MIDINOTE_POSITION = 0;
const DURATION_POSITION = 1;
const TIME_POSITION = 2;

export class MidiPlayer {
  private song: number[][];

  public constructor(pSong: number[][]) {
    this.song = this.sortSong(pSong);
  }

  public buildMidiFile() : void {

    // Start with a new track
    var track = new MidiWriter.Track();
    // Add some notes:
    this.song.forEach(note => {
      var noteEvent = new MidiWriter.NoteEvent({pitch:[note[MIDINOTE_POSITION]], 
                                                duration: Math.ceil(4-note[DURATION_POSITION] / 300), 
                                                startTick: Math.floor(note[TIME_POSITION])});
      track.addEvent(noteEvent);
    });
    
    // Generate a data URI
    var write = new MidiWriter.Writer(track);
    console.log(write.dataUri());
  }

  private sortSong(pSong: number[][]) : number[][] {
    return pSong.sort((noteA: number[], noteB: number[]) => {
      
      if (noteA[TIME_POSITION] > noteB[TIME_POSITION]) {
        return 1;
      } 

      if (noteA[TIME_POSITION] < noteB[TIME_POSITION]) {
        return -1;
      } 

      return 0;
    });
  }
}
