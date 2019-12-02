export class Person {


  constructor(
    public name: string,
    public lastname: string,
    public carrera: string,
    public estudio: string,
    public titulado: boolean,
    public color: string,
    public skills: Array<string>,
    public sueldo: number,
    public currency: string,
    public civil: number,
    public phone: string,
    public dateBorn: any) {
  }

  subirSueldo(monto: number) {
    this.sueldo = monto * 1 + this.sueldo * 1;
  }

  getFullName() {
    return this.name + ' ' + this.lastname;
  }

}
