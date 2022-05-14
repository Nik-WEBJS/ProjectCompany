/* eslint-disable indent */
import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const MultiSelectField = ({ options, onChange, name, label, defaultValue }) => {
    const optionArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.keys(options)
            : options;

    const handleChange = (value) => {
        onChange({ name: name, value });
    };

    const defValueFormat = (value) => {
        const qual = [];
        for (const val of value) {
            qual.push({
                value: val.id,
                label: val.name
            });
        }
        return qual;
    };

    return (
        <div className="mb-4">
            <label className="form-label">{label}</label>
            <Select
                isMulti
                defaultValue={defValueFormat(defaultValue)}
                closeMenuOnSelect={false}
                options={optionArray}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleChange}
                name={name}
            />
        </div>
    );
};

MultiSelectField.propTypes = {
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onChange: PropTypes.func,
    name: PropTypes.string,
    label: PropTypes.string,
    defaultValue: PropTypes.array
};

export default MultiSelectField;
