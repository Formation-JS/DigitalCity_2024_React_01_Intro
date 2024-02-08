import PropTypes from 'prop-types';
import style from './display-temp.module.css';

const DisplayTemp = ({ value }) => {

    const temp = value.toLocaleString('fr-be', { 
        style: 'unit',
        unit: 'celsius'
    });

    return (
        <p className={style['beautifull-border']}>
            La température est de {temp}
        </p>
    );
};

DisplayTemp.defaultProps = {
    value: 42
};

DisplayTemp.propTypes = {
    value: PropTypes.number
}

export default DisplayTemp;