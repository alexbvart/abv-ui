type TaskWTime = {
    hora: string;
    tarea: string;
  };
  
 export type TaskWTimeWDay = {
    dia: string;
    tareas: TaskWTime[];
  };

export const scheduleMock : TaskWTimeWDay[]= [
    {
      dia: "Lunes",
      tareas: [
        { hora: "08:00", tarea: "Revisar correos" },
        { hora: "10:00", tarea: "Reunión de equipo" },
        { hora: "12:00", tarea: "Almuerzo" },
        { hora: "13:00", tarea: "Desarrollo de proyecto" },
        { hora: "17:00", tarea: "Revisión de avances" },
      ],
    },
    {
      dia: "Martes",
      tareas: [
        { hora: "09:00", tarea: "Planificación sprint" },
        { hora: "11:00", tarea: "Capacitación técnica" },
        { hora: "12:00", tarea: "Almuerzo" },
        { hora: "13:00", tarea: "Desarrollo de proyecto" },
        { hora: "16:00", tarea: "Reunión con cliente" },
      ],
    },
    {
      dia: "Miércoles",
      tareas: [
        { hora: "08:00", tarea: "Revisión de correos y planificación" },
        { hora: "10:00", tarea: "Desarrollo de proyecto" },
        { hora: "12:00", tarea: "Almuerzo" },
        { hora: "13:00", tarea: "Reunión de seguimiento de proyecto" },
        { hora: "15:00", tarea: "Documentación de proyecto" },
      ],
    },
    {
      dia: "Jueves",
      tareas: [
        { hora: "09:00", tarea: "Desarrollo de proyecto" },
        { hora: "11:00", tarea: "Revisión de código" },
        { hora: "12:00", tarea: "Almuerzo" },
        { hora: "13:00", tarea: "Testing de nuevas funcionalidades" },
        { hora: "16:00", tarea: "Reunión de avance con el equipo" },
      ],
    },
    {
      dia: "Viernes",
      tareas: [
        { hora: "08:00", tarea: "Revisión de correos" },
        { hora: "10:00", tarea: "Cierre de sprint" },
        { hora: "12:00", tarea: "Almuerzo" },
        { hora: "13:00", tarea: "Planificación del próximo sprint" },
        { hora: "15:00", tarea: "Reunión de retroalimentación" },
      ],
    },
    {
      dia: "Sábado",
      tareas: [
        { hora: "09:00", tarea: "Trabajo autónomo" },
        { hora: "12:00", tarea: "Almuerzo" },
        { hora: "13:00", tarea: "Continuación de trabajo autónomo" },
      ],
    },
    {
      dia: "Domingo",
      tareas: [
        // Domingo puede ser considerado día libre o para tareas personales
      ],
    },
  ];

export type daysSpanishType =
  | "Lunes"
  | "Martes"
  | "Miércoles"
  | "Jueves"
  | "Viernes"
  | "Sábado"
  | "Domingo";

export type PlaneTask = {
  day: daysSpanishType;
  time: string;
  task: string;
};

export const schedulePlaneMock: PlaneTask[] = [
  { day: 'Lunes', time: '08:00', task: 'Revisar correos' },
  { day: 'Lunes', time: '10:00', task: 'Reunión de equipo' },
  { day: 'Lunes', time: '12:00', task: 'Almuerzo' },
  { day: 'Lunes', time: '13:00', task: 'Desarrollo de proyecto' },
  { day: 'Lunes', time: '17:00', task: 'Revisión de avances' },
  { day: 'Martes', time: '09:00', task: 'Planificación sprint' },
  { day: 'Martes', time: '11:00', task: 'Capacitación técnica' },
  { day: 'Martes', time: '12:00', task: 'Almuerzo' },
  { day: 'Martes', time: '13:00', task: 'Desarrollo de proyecto' },
  { day: 'Martes', time: '16:00', task: 'Reunión con cliente' },
  { day: 'Miércoles', time: '08:00', task: 'Revisión de correos y planificación' },
  { day: 'Miércoles', time: '10:00', task: 'Desarrollo de proyecto' },
  { day: 'Miércoles', time: '12:00', task: 'Almuerzo' },
  { day: 'Miércoles', time: '13:00', task: 'Reunión de seguimiento de proyecto' },
  { day: 'Miércoles', time: '15:00', task: 'Documentación de proyecto' },
  { day: 'Jueves', time: '09:00', task: 'Desarrollo de proyecto' },
  { day: 'Jueves', time: '11:00', task: 'Revisión de código' },
  { day: 'Jueves', time: '12:00', task: 'Almuerzo' },
  { day: 'Jueves', time: '13:00', task: 'Testing de nuevas funcionalidades' },
  { day: 'Jueves', time: '16:00', task: 'Reunión de avance con el equipo' },
  { day: 'Viernes', time: '08:00', task: 'Revisión de correos' },
  { day: 'Viernes', time: '10:00', task: 'Cierre de sprint' },
  { day: 'Viernes', time: '12:00', task: 'Almuerzo' },
  { day: 'Viernes', time: '13:00', task: 'Planificación del próximo sprint' },
  { day: 'Viernes', time: '15:00', task: 'Reunión de retroalimentación' },
  { day: 'Sábado', time: '09:00', task: 'Trabajo autónomo' },
  { day: 'Sábado', time: '12:00', task: 'Almuerzo' },
  { day: 'Sábado', time: '13:00', task: 'Continuación de trabajo autónomo' },
];

export const scheduleCalendarMock = {
  "08:00": {
    Lunes: "Revisar correos",
    Martes: "DESCANSO",
    Miércoles: "Revisión de correos y planificación",
    Jueves: "DESCANSO",
    Viernes: "Revisión de correos",
    Sábado: "DESCANSO",
    Domingo: "DESCANSO",
  },
  "09:00": {
    Lunes: "DESCANSO",
    Martes: "Planificación sprint",
    Miércoles: "DESCANSO",
    Jueves: "DESCANSO",
    Viernes: "DESCANSO",
    Sábado: "Trabajo autónomo",
    Domingo: "DESCANSO",
  },
  "10:00": {
    Lunes: "Reunión de equipo",
    Martes: "Capacitación técnica",
    Miércoles: "Desarrollo de proyecto",
    Jueves: "DESCANSO",
    Viernes: "Cierre de sprint",
    Sábado: "DESCANSO",
    Domingo: "DESCANSO",
  },
  "11:00": {
    Lunes: "DESCANSO",
    Martes: "DESCANSO",
    Miércoles: "DESCANSO",
    Jueves: "Revisión de código",
    Viernes: "DESCANSO",
    Sábado: "DESCANSO",
    Domingo: "DESCANSO",
  },
  "12:00": {
    Lunes: "Almuerzo",
    Martes: "Almuerzo",
    Miércoles: "Almuerzo",
    Jueves: "Almuerzo",
    Viernes: "Almuerzo",
    Sábado: "Almuerzo",
    Domingo: "DESCANSO",
  },
  "13:00": {
    Lunes: "Desarrollo de proyecto",
    Martes: "Desarrollo de proyecto",
    Miércoles: "Reunión de seguimiento de proyecto",
    Jueves: "Testing de nuevas funcionalidades",
    Viernes: "Planificación del próximo sprint",
    Sábado: "Continuación de trabajo autónomo",
    Domingo: "DESCANSO",
  },
};

type EstadoCivil = "Casado" | "Soltero" | "Divorciado" | "";

interface EmployeeData {
    nombre: string;
    edad: number;
    estadoCivil: EstadoCivil;
    fechaNacimiento: string; // Formato YYYY-MM-DD para simplicidad
    salario: number;
  }

export const employeesMock: EmployeeData[] = [
    {
      nombre: "Juan Pérez",
      edad: 30,
      estadoCivil: "Casado",
      fechaNacimiento: "1992-06-15",
      salario: 3000,
    },
    {
      nombre: "Ana Gómez",
      edad: 25,
      estadoCivil: "Soltero",
      fechaNacimiento: "1997-08-23",
      salario: 2800,
    },
    {
      nombre: "Carlos Ruiz",
      edad: 40,
      estadoCivil: "Divorciado",
      fechaNacimiento: "1982-11-30",
      salario: 3200,
    },
    // Nuevos registros agregados
    {
      nombre: "Luisa Martínez",
      edad: 28,
      estadoCivil: "Casado",
      fechaNacimiento: "1994-04-12",
      salario: 3050,
    },
    {
      nombre: "Roberto Hernández",
      edad: 35,
      estadoCivil: "Soltero",
      fechaNacimiento: "1987-09-05",
      salario: 2900,
    },
    {
      nombre: "Sofía Castillo",
      edad: 32,
      estadoCivil: "Casado",
      fechaNacimiento: "1990-12-22",
      salario: 3100,
    },
    {
      nombre: "Miguel Ángel Torres",
      edad: 45,
      estadoCivil: "Divorciado",
      fechaNacimiento: "1977-03-16",
      salario: 3300,
    },
    {
      nombre: "Daniela Ramírez",
      edad: 29,
      estadoCivil: "Soltero",
      fechaNacimiento: "1993-05-27",
      salario: 2750,
    },
    {
      nombre: "Jorge Navarro",
      edad: 38,
      estadoCivil: "Casado",
      fechaNacimiento: "1984-08-11",
      salario: 3150,
    },
    {
      nombre: "María López",
      edad: 27,
      estadoCivil: "Soltero",
      fechaNacimiento: "1995-02-19",
      salario: 2850,
    },
    {
      nombre: "Enrique Santos",
      edad: 50,
      estadoCivil: "Casado",
      fechaNacimiento: "1972-11-03",
      salario: 3400,
    },
    {
      nombre: "Carmen Gutiérrez",
      edad: 33,
      estadoCivil: "Divorciado",
      fechaNacimiento: "1989-07-15",
      salario: 2950,
    },
    {
      nombre: "Fernando Vega",
      edad: 42,
      estadoCivil: "Soltero",
      fechaNacimiento: "1980-10-25",
      salario: 3250,
    },
    {
      nombre: "Lucía Méndez",
      edad: 37,
      estadoCivil: "Casado",
      fechaNacimiento: "1985-01-30",
      salario: 3050,
    },
    {
      nombre: "David Jiménez",
      edad: 26,
      estadoCivil: "Soltero",
      fechaNacimiento: "1996-04-08",
      salario: 2800,
    },
  ];