import TableCell from './TableCell';

function TableRow({flight}) {

  const cellData = Object.values(flight);

  console.log(cellData);

  return (
    <tr>
      <td>✈️</td>
      {cellData?.map((cell, index) => (
        <TableCell key={index} cell={cell} index={index} />
      ))}
    </tr>
  );
}

export default TableRow;