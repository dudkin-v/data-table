const Table = ({ data }) => {

    const tableHeading = ["№", "name", "surname", "tel", "email"];
    
    return (
        <div className="table">
            <table>
                <thead>
                <tr>
                {tableHeading.map((el, i) => (
                    <th key={i}>{el}</th>
                ))}
                </tr>
                </thead>

                <tbody>
                    {data.map((person) => (
                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.surname}</td>
                            <td><a href="tel:{person.phoneNumber}">{person.phoneNumber}</a></td>
                            <td><a href="mailto:{person.email}">{person.email}</a></td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table;