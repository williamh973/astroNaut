export class MarkerData {
    [x: string]: any;
    constructor(
        public name: string,
        public longitude: number,
        public latitude: number,
        public id?: number
    ) { }
}
 
  