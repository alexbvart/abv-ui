import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { AbvButton } from '../Button';

const meta: Meta<typeof Table> = {
  title: 'Atoms/Table',
  component: Table,
  args: {},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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
  { title: 'Nombre' },
  { title: 'Estado' },
  { title: 'Detalle' },
  { title: 'Acciones' },
];

const dataBody = [
  {
    nombre: 'Frank Herbert',
    estado: 'Duplicado',
    detalle: 'El archivo que intentas subir ya existe, ¿Deseas reemplazarlo?',
  },
  {
    nombre: 'Alice Munro',
    estado: 'Duplicado',
    detalle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem tortor, elementum vitae ipsum nec, vestibulum convallis tellus. Maecenas faucibus pharetra eros id rutrum',
  },
  {
    nombre: 'H. P. Lovecraft',
    estado: 'Aceptado',
    detalle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    content: 'Cras lorem tortor, elementum vitae ipsum nec, vestibulum convallis tellus. Maecenas faucibus pharetra eros id rutrum Lorem ipsum dolor sit amet, consectetur adipiscing elit vestibulum convallis tellus.',
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
            <Table.Td minWidth="100px"> <AbvButton type='danger'>Eliminar</AbvButton> </Table.Td>
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
