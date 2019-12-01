export class Person {


  constructor(public carrera: string,
              public estudio: string,
              public titulado: boolean,
              public color: string,
              public skills: Array<string>,
              public sueldo: number,
              public currency: string,
              public civil: number) {
  }

  subirSueldo(monto:number) {
    this.sueldo = monto*1+this.sueldo*1;
  }

}
