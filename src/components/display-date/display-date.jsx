
const DisplayDate = () => {

    const today = (new Date()).toLocaleDateString('fr-be', {
        dateStyle: 'full'
    });

    return (
        <p>Nous sommes le {today}</p>
    );
};

export default DisplayDate;