import PropTypes from 'prop-types';

import './Table.styles.css';

const Table = ({ data, onDelete }) => {
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
                            <td><button onClick={onDelete(person.id)}>Delete</button></td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
    )
}

Table.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        phoneNumber: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    })).isRequired,
    handleDelete: PropTypes.func.isRequired
}

export default Table;