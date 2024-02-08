const CharacterTableHeader = () => (
    <thead>
        <tr>
            <th>Nom</th>
            <th>Sexe</th>
            <th>Age</th>
        </tr>
    </thead>
);

const CharacterTableRow = ({ name, gender, age }) => (
    <tr>
        <td>{name}</td>
        <td>{gender}</td>
        <td>{age ?? 'N/A'}</td>
    </tr>
);

const CharacterTable = ({ characters }) => {

    const charactersJSX = characters.map(c => (
        <CharacterTableRow key={c.id} {...c} />
    ));

    return (
        <table>
            <CharacterTableHeader />
            <tbody>
                {charactersJSX}
            </tbody>
        </table>
    );
};

export default CharacterTable;