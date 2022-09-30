import TableLetter from './TableLetter';

function TableCell({cell}) {
  
  return (
    <td>
      {Array.from(cell).map((letter, index) => ( <TableLetter key={index} letter={letter} index={index} />
      ))}
    </td>
  );
}

export default TableCell;