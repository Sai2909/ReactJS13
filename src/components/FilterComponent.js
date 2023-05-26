export function FilterComponent(){

const students = [
    {
      'id': 1,
      'name': 'Obydul',
      'age': 25
    },
    {
      'id': 2,
      'name': 'Kabir',
      'age': 24
    },
    {
      'id': 3,
      'name': 'Hussain',
      'age': 30
    },
    {
      'id': 4,
      'name': 'Kamrul',
      'age': 35
    },
  ];
    return(
     
        <table className="table ">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
            </tr>

            {students.filter(student => student.age > 30).map(filteredStudent => (
              <tr>
                <td>{filteredStudent.id}</td>
                <td>{filteredStudent.name}</td>
                <td>{filteredStudent.age}</td>
              </tr>
            ))}

        </table>
    )
}