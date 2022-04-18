import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    console.log(Object.keys(items));
    return Array.isArray(items)
        ? (
            <ul className="list-group">
                {items.forEach((item) => {
                    <li
                        key={item._id.valueProperty}
                        className={
                            "list-group-item" + item === selectedItem
                                ? " active"
                                : " "
                        }
                        onClick={() => onItemSelect(item)}
                        role="button"
                    >
                        {item.name}
                    </li>;
                    console.log(item.name);
                })}
            </ul>
        )
        : (
            <ul className="list-group">
                {Object.keys(items).map((item) => (
                    <li
                        key={items[item][valueProperty]}
                        className={
                            "list-group-item" +
                        (items[item] === selectedItem ? " active" : "")
                        }
                        onClick={() => onItemSelect(items[item])}
                        role="button"
                    >
                        {items[item][contentProperty]}
                    </li>
                ))}
            </ul>
        );
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
};

export default GroupList;
