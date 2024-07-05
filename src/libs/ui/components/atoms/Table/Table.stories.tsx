import { ChangeEvent, useEffect, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";
import { AbvButton } from "../Button";
import {
  useDebounceCallback,
  useSmartForm,
} from "../../../../common/hook";
import { useSortableData } from "../../../../common/hook/useTableSroting";
import { PlaneTask, TaskWTimeWDay, daysSpanishType, employeesMock, scheduleCalendarMock, scheduleMock, schedulePlaneMock } from "../../../../common/constants";

const meta: Meta<typeof Table> = {
  title: "Atoms/Table",
  component: Table,
  args: {},
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  //   subcomponents: {
  //     Head: Table.Head,
  //     Body: Table.Body,
  //     Tr: Table.Tr,
  //     Th: Table.Th,
  //     Td: Table.Td,
  //   },
};

export default meta;

type Story = StoryObj<typeof Table>;

// Datos de ejemplo
const dataHead = [
  { title: "Nombre" },
  { title: "Estado" },
  { title: "Detalle" },
  { title: "Acciones" },
];

const dataBody = [
  {
    nombre: "Frank Herbert",
    estado: "Duplicado",
    detalle: "El archivo que intentas subir ya existe, ¿Deseas reemplazarlo?",
  },
  {
    nombre: "Alice Munro",
    estado: "Duplicado",
    detalle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem tortor, elementum vitae ipsum nec, vestibulum convallis tellus. Maecenas faucibus pharetra eros id rutrum",
  },
  {
    nombre: "H. P. Lovecraft",
    estado: "Aceptado",
    detalle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    content:
      "Cras lorem tortor, elementum vitae ipsum nec, vestibulum convallis tellus. Maecenas faucibus pharetra eros id rutrum Lorem ipsum dolor sit amet, consectetur adipiscing elit vestibulum convallis tellus.",
  },
];

// Historia por defecto
export const Default: Story = {
  render: () => (
    <Table>
      <Table.Head>
        <Table.Tr>
          {dataHead.map((item) => (
            <Table.Th key={item.title}>{item.title}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Head>
      <Table.Body>
        {dataBody.map((item) => (
          <Table.Tr key={item.nombre}>
            <Table.Td minWidth="200px">{item.nombre}</Table.Td>
            <Table.Td minWidth="150px">{item.estado}</Table.Td>
            <Table.Td minWidth="400px">{item.detalle}</Table.Td>
            <Table.Td minWidth="100px">
              {" "}
              <AbvButton type="danger">Eliminar</AbvButton>{" "}
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Body>
    </Table>
  ),
  args: {},
};

// Historia con columnas personalizadas
export const CustomColumns: Story = {
  render: () => {
    const [customData, setCustomData] = useState(dataBody);
    console.log(setCustomData);

    return (
      <Table>
        <Table.Head>
          <Table.Tr>
            <Table.Th minWidth="150px">Autor</Table.Th>
            <Table.Th minWidth="100px">Estado</Table.Th>
            <Table.Th minWidth="300px">Descripción</Table.Th>
          </Table.Tr>
        </Table.Head>
        <Table.Body>
          {customData.map((item) => (
            <Table.Tr key={item.nombre}>
              <Table.Td minWidth="150px">{item.nombre}</Table.Td>
              <Table.Td minWidth="100px">{item.estado}</Table.Td>
              <Table.Td minWidth="300px">{item.detalle}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Body>
      </Table>
    );
  },
  args: {},
};

export const ScheduleGroupStory: Story = () => {
return(
  <Table>
    <Table.Head>
      <Table.Tr>
        <Table.Th>Día</Table.Th>
        <Table.Th>Hora</Table.Th>
        <Table.Th>Tarea</Table.Th>
      </Table.Tr>
    </Table.Head>
    <Table.Body>
      {scheduleMock.map((dia) =>
        dia.tareas.map((tarea, index) => (
          <Table.Tr key={index}>
            {index === 0 && (
              <Table.Td rowSpan={dia.tareas.length}>{dia.dia}</Table.Td>
            )}
            <Table.Td>{tarea.hora}</Table.Td>
            <Table.Td>{tarea.tarea}</Table.Td>
          </Table.Tr>
        ))
      )}
    </Table.Body>
  </Table>
)
};
ScheduleGroupStory.args = {};

// function processData(tasks:PlaneTask[]) {
//   const dayCounts = tasks.reduce((acc, task) => {
//     acc[task.day] = (acc[task.day] || 0) + 1;
//     return acc;
//   }, {});

//   const dayRenderFlags = tasks.reduce((acc, task) => {
//     if (!acc[task.day]) {
//       acc[task.day] = true; // Marcar el primer elemento de cada día para renderizar
//     } else {
//       acc[task.day] = false; // Los siguientes elementos no se renderizan
//     }
//     return acc;
//   }, {});

//   return { dayCounts, dayRenderFlags };
// }

type ProcessedData = {
  dayCounts: { [key: string]: number };
  timeCounts: { [key: string]:  number } ;
  dayRenderFlags: { [key: string]: boolean };
  timeRenderFlags: { [key: string]:  boolean };
};

// function processData(tasks: PlaneTask[]): ProcessedData {
//   const dayCounts: { [key: string]: number } = {};
//   const timeCounts: { [key: string]: number } = {};
//   const dayRenderFlags: { [key: string]: boolean } = {};
//   const timeRenderFlags: { [key: string]:  boolean  } = {};

//   tasks.forEach((task, index) => {
//     if (!dayCounts[task.day]) {
//       dayCounts[task.day] = 1;
//       dayRenderFlags[task.day] = true; // Correctly set to boolean
//     } else {
//       dayCounts[task.day]++;
//     }

//     const dayTimeKey = `${task.day}-${task.time}`;
//     if (!timeCounts[dayTimeKey]) {
//       timeCounts[dayTimeKey] = 1; 
//       timeRenderFlags[dayTimeKey] = true;
//     } else {
//       timeCounts[dayTimeKey]++;
//     }
//   });

//   return { dayCounts, timeCounts, dayRenderFlags, timeRenderFlags };
// }

type ProcessedTask = PlaneTask & {
  daySpan: number;
  timeSpan: number;
};

function useProcessedTasks(tasks: PlaneTask[]): ProcessedTask[] {
  // Lógica para procesar tasks y calcular daySpan y timeSpan
  // Este es un ejemplo simplificado. Deberías expandirlo según tus necesidades específicas.
  const processed: ProcessedTask[] = tasks.map(task => ({
    ...task,
    daySpan: 1, // Calcula el colSpan real basado en la agrupación por día
    timeSpan: 1, // Calcula el rowSpan real basado en la agrupación por hora
  }));

  return processed;
}



export const SchedulePlaneToGroupStory: Story = () => {
  // const processedTasks = useProcessedTasks(schedulePlaneMock);
  const { sortedData, requestSort } =   useSortableData<PlaneTask>(schedulePlaneMock);

  // Paso 1: Inicializar contadores
const dayCounts: { [key in daysSpanishType]: number } = {
  Lunes: 0,
  Martes: 0,
  Miércoles: 0,
  Jueves: 0,
  Viernes: 0,
  Sábado: 0,
  Domingo: 0,
};
const timeCounts: { [key: string]: number } = {};

// Paso 2: Contar repeticiones
sortedData.forEach(task => {
  dayCounts[task.day] = (dayCounts[task.day] || 0) + 1;
  const timeKey = `${task.day}-${task.time}`;
  timeCounts[timeKey] = (timeCounts[task.time] || 0) + 1;
});


  let lastDay: string = "";
  let lastTime: string = "";
  return(
    <Table>
      <Table.Head>
        <Table.Tr>
          <Table.Th onClick={()=> requestSort("day")}>Día</Table.Th>
          <Table.Th onClick={()=> requestSort("time")}>Hora</Table.Th>
          <Table.Th onClick={()=> requestSort("task")}>Tarea</Table.Th>
        </Table.Tr>
      </Table.Head>
      <Table.Body>
      {sortedData.map((task, index) => {
          const dayChanged = task.day !== lastDay;
          const timeChanged = `${task.day}-${task.time}` !== lastTime;
          lastDay = task.day;
          lastTime = `${task.day}-${task.time}`;

          return (
            <Table.Tr key={index}>
              {dayChanged && <Table.Td rowSpan={dayCounts[task.day]}>{task.day}</Table.Td>}
              {timeChanged && <Table.Td rowSpan={timeCounts[task.time]}>{task.time}</Table.Td>}
              <Table.Td>{task.task}</Table.Td>
            </Table.Tr>
          );
        })}
      </Table.Body>
    </Table>
  )
};
  SchedulePlaneToGroupStory.args = {};

export const CalendarWithSchedule: Story = () => {
  return (
    <Table>
      <Table.Head>
        <Table.Tr>
          <Table.Th colSpan={8}>Enero</Table.Th>
        </Table.Tr>
        <Table.Tr>
          <Table.Th>{""}</Table.Th>
          <Table.Th>Lunes</Table.Th>
          <Table.Th>Martes</Table.Th>
          <Table.Th>Miércoles</Table.Th>
          <Table.Th>Jueves</Table.Th>
          <Table.Th>Viernes</Table.Th>
          <Table.Th>Sábado</Table.Th>
          <Table.Th>Domingo</Table.Th>
        </Table.Tr>
      </Table.Head>
      <Table.Body>
        {Object.entries(scheduleCalendarMock).map(([hora, tareas]) => (
          <Table.Tr key={hora}>
            <Table.Th>{hora}</Table.Th>
            {Object.values(tareas).map((tarea, index) => (
              <Table.Td key={index}>{tarea}</Table.Td>
            ))}
          </Table.Tr>
        ))}
      </Table.Body>
    </Table>
  );
};
CalendarWithSchedule.args = {};

// Definición del tipo para los datos
type EstadoCivil = "Casado" | "Soltero" | "Divorciado" | "";
interface EmployeeData {
  nombre: string;
  edad: number;
  estadoCivil: EstadoCivil;
  fechaNacimiento: string; // Formato YYYY-MM-DD para simplicidad
  salario: number;
}

interface EmployeeFields {
  nombre: string;
  edadMin: number;
  edadMax: number;
  estadoCivil: EstadoCivil;
  fechaNacimiento: string; // Formato YYYY-MM-DD para simplicidad
  salarioMin: number;
  salarioMax: number;
}

interface FilterFormProps {
  getValues: (values: EmployeeFields) => void;
}
const FilterForm: React.FC<FilterFormProps> = ({ getValues }) => {
  const { values, handleChange, resetForm } = useSmartForm<EmployeeFields>({
    nombre: "",
    edadMin: 0,
    edadMax: 50,
    estadoCivil: "",
    fechaNacimiento: "",
    salarioMin: 0,
    salarioMax: 3500,
  });
  const debouncedGetValues = useDebounceCallback(getValues, 500);

  const handleChangeDebounced = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    handleChange(e);
  };

  useEffect(() => {
    debouncedGetValues(values);
  }, [values]);

  return (
    <form>
      <label htmlFor="nombre">
        Nombre
        <input
          type="text"
          name="nombre"
          value={values.nombre}
          placeholder="Nombre"
          onChange={handleChangeDebounced}
        />
      </label>
      <hr />
      <label>
        Edad
        <input
          type="number"
          name="edadMin"
          value={values.edadMin}
          placeholder="Edad mínima"
          onChange={handleChangeDebounced}
          min={1}
          max={values.edadMax || 50}
        />
        <input
          type="number"
          name="edadMax"
          value={values.edadMax}
          placeholder="Edad máxima"
          onChange={handleChangeDebounced}
          min={values.edadMin || 1}
          max={50}
        />
      </label>
      <hr />
      <label htmlFor="salario">
        Salario
        <input
          type="number"
          name="salarioMin"
          value={values.salarioMin}
          placeholder="Salario"
          onChange={handleChangeDebounced}
        />
        <input
          type="number"
          name="salarioMax"
          value={values.salarioMax}
          placeholder="Salario"
          onChange={handleChangeDebounced}
        />
      </label>
      <hr />
      <label htmlFor="estadoCivil">
        estado Civil
        <select onChange={handleChangeDebounced} name="estadoCivil">
          <option value="Casado">Casado</option>
          <option value="Soltero">Soltero</option>
          <option value="Divorciado">Divorciado</option>
        </select>
      </label>
      <hr />
      {/* Agrega más campos según sea necesario */}
      <button type="button" onClick={() => getValues(values)}>
        Filtrar
      </button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
    </form>
  );
};

interface DataTableItem {
  data: EmployeeData[];
}
const DataTable = ({ data }: DataTableItem) => {
  const { sortedData, requestSort } =   useSortableData<EmployeeData>(data);

  return(
  <Table>
    <Table.Head>
      <Table.Tr>
        <Table.Th minWidth="150px" onClick={()=> requestSort("nombre") }>nombre</Table.Th>
        <Table.Th minWidth="100px">estadoCivil</Table.Th>
        <Table.Th minWidth="50px">edad</Table.Th>
        <Table.Th minWidth="150px">fechaNacimiento</Table.Th>
        <Table.Th>salario</Table.Th>
      </Table.Tr>
    </Table.Head>
    <Table.Body>
      {sortedData.map((item) => (
        <Table.Tr key={item.nombre}>
          <Table.Td>{item.nombre}</Table.Td>
          <Table.Td>{item.estadoCivil}</Table.Td>
          <Table.Td>{item.edad}</Table.Td>
          <Table.Td>{item.fechaNacimiento}</Table.Td>
          <Table.Td>{item.salario}</Table.Td>
        </Table.Tr>
      ))}
    </Table.Body>
  </Table>
);
};

// Componente Principal que Combina el Formulario y la Tabla
export const CustomColumnsFilter: Story = {
  render: () => {
    const [customData, setCustomData] = useState<EmployeeData[]>(employeesMock);

    const getValues = (values: EmployeeFields) => {
      const filteredData = employeesMock.filter((item) => {
        const matchesNombre = item.nombre
          .toLowerCase()
          .includes(values.nombre.toLowerCase());
        const matchesEstadoCivil = item.estadoCivil
          .toLowerCase()
          .includes(values.estadoCivil.toLowerCase());
        const matchesEdad =
          (values.edadMin == 0 ||
            Number(item.edad) >= Number(values.edadMin)) &&
          (values.edadMax == 50 || Number(item.edad) <= Number(values.edadMax));
        const matchesSalario =
          (values.salarioMin == 0 || item.salario >= values.salarioMin) &&
          (values.salarioMax == 0 || item.salario <= values.salarioMax);

        return (
          matchesNombre && matchesEstadoCivil && matchesEdad && matchesSalario
        );
      });

      setCustomData(filteredData);
    };
   
    return (
      <>
        <FilterForm getValues={getValues} />
        <DataTable data={customData} />
      </>
    );
  },
  args: {},
};

export const SortingTable: Story = () => {
  const { sortedData, requestSort } = 
    useSortableData<EmployeeData>(employeesMock);

  return (
    <Table>
      <Table.Head>
        <Table.Tr>
          <Table.Th minWidth="150px" onClick={() => requestSort("nombre")}>
            Nombre
          </Table.Th>
          <Table.Th minWidth="100px" onClick={() => requestSort("estadoCivil")}>
            Estado Civil
          </Table.Th>
          <Table.Th minWidth="50px" onClick={() => requestSort("edad")}>
            Edad
          </Table.Th>
          <Table.Th
            minWidth="150px"
            onClick={() => requestSort("fechaNacimiento")}
          >
            Fecha Nacimiento
          </Table.Th>
          <Table.Th onClick={() => requestSort("salario")}>Salario</Table.Th>
        </Table.Tr>
      </Table.Head>
      <Table.Body>
        {sortedData.map((item) => (
          <Table.Tr key={item.nombre}>
            <Table.Td>{item.nombre}</Table.Td>
            <Table.Td>{item.estadoCivil}</Table.Td>
            <Table.Td>{item.edad}</Table.Td>
            <Table.Td>{item.fechaNacimiento}</Table.Td>
            <Table.Td>{item.salario}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Body>
    </Table>
  );
};
SortingTable.args = {};
