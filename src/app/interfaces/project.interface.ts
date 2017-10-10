//Importacion de la  clase tarea

import { Task } from './tasks.interface';

export interface Project{

  name:string;//Nombre del Proyecto
  description:string;//Description del Proyecto
  task:Task[]; //Tarea
  uid?:string;//Id unico que tendria que dar amazon

}
