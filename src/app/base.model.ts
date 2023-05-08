export interface BaseModel {
  readonly id: string | number; //readonly lo que evita es que se puedan sobreescribir los datos.
  readonly createdAt: Date;
  updatedAt: Date;
}
