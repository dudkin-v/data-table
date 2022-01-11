const Table = ({ data }) => { 
    return (
            <table>
                <thead>
                <tr>
                    <th>№</th>
                    <th>name</th>
                    <th>surname</th>
                    <th>tel</th>
                    <th>email</th>
                </tr>
                </thead>

                <tbody>
                    {data.map((person, i) => (
                        <tr key={person.id}>
                            <td>{i + 1}</td>
                            <td>{person.name}</td>
                            <td>{person.surname}</td>
                            <td><a href={`tel:${person.phoneNumber}`}>{person.phoneNumber}</a></td>
                            <td><a href={`mailto:${person.email}`}>{person.email}</a></td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
    )
}

export default Table;