/**
 * Filename: midi-player.ts
 * Author: rnunez
 * Date: 03/21/2019
 * Description: main program file
 */

import { MIDI } from 'midi.js'; 
const TIME_POSITION = 2;

export class MidiPlayer {
  private song: number[][];

  public constructor(pSong: number[][]) {
    this.song = this.sortSong(pSong);
  }

  public play() : void {
    // MIDI.loadPlugin({
    //   instrument: "acoustic_grand_piano", // or the instrument code 1 (aka the default)
    //   instruments: [ "acoustic_grand_piano", "acoustic_guitar_nylon" ], // or multiple instruments
    //   onsuccess: function() {
    //     console.log("Connected");
    //    }
    // });
    console.log(this.song);
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
