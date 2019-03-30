/**
 * Filename: midi-player.ts
 * Author: rnunez
 * Date: 03/21/2019
 * Description: main program file
 */
const TIME_POSITION = 2;

export class MidiPlayer {
  private song: number[][];

  public constructor(pSong: number[][]) {
    this.sortSong(pSong);
    this.song = pSong;
  }

  public play() : void {
    console.log(this.song);
  }

  private sortSong(pSong: number[][]) : void {
    pSong.sort((noteA: number[], noteB: number[]) => {
      
      if (noteA[TIME_POSITION] < noteB[TIME_POSITION]) {
        return 1;
      } 

      if (noteA[TIME_POSITION] > noteB[TIME_POSITION]) {
        return -1;
      } 

      return 0;
    });
  }
}
