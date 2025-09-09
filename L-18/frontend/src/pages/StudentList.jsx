const StudentList = ({students , onDelete , onEdit}) => {
  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Student name
              </th>
              <th scope="col" className="px-6 py-3">
                Student Email
              </th>
              <th scope="col" className="px-6 py-3">
                Student Course
              </th>
              <th scope="col" className="px-6 py-3">
                Student Age
              </th>
            </tr>
          </thead>
          <tbody>
           {
            students.map((item , index) => {
              return(
                <tr key={index}>
                  <td>
                    {item.name}
                  </td>
                  <td>
                    {item.email}
                  </td>
                  <td>
                    {item.course}
                  </td>
                  <td>
                    {item.age}
                  </td>
                </tr>
              )
            })
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
