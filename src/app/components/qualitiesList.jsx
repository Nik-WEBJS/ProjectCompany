import React from "react";
import PropTypes from "prop-types";
import Qualitie from "./qualitie";

const QualitiesList = ({ qualities }) => {
    return (
        <>
            {qualities.map((qual) => (
                <Qualitie key={qual._ud} {...qual} />
            ))}
        </>
    );
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
