import { useState } from "react";
import PropTypes from "prop-types";

Sort.propTypes = {
    options: PropTypes.array,
    sort: PropTypes.func,
    wrapperProps: PropTypes.object,
    buttonProps: PropTypes.object,
};

function getSortValue(value) {
    switch (value) {
        case null:
            return 'asc';
        case 'asc':
            return 'desc';
        default:
            return null;
    }
}

export default function Sort({ options, sort, wrapperProps, buttonProps }) {
    const [sortState, setSortState] = useState(options);

    function changeSort(key) {

        const newSortItem = sortState.find(
            (sortItem) => {
                return sortItem.key === key;
            }
        );

        sort({
            key,
            value: getSortValue(newSortItem.value),
        });

        setSortState(function (curretntSortState) {
            return curretntSortState.map(
                function (sortItem) {
                    if (sortItem.key === key) {
                        const newSortItem = {
                            ...sortItem,
                            value: getSortValue(sortItem.value),
                        };

                        return newSortItem;
                    } else {
                        return {
                            ...sortItem,
                            value: null
                        };
                    }
                }
            );
        });
    }

    return (
        <div {...wrapperProps}>
            {
                sortState.map(
                    function (itemSort) {
                        return (
                            <button {...buttonProps} key={itemSort.key} onClick={() => { changeSort(itemSort.key); }}>
                                {itemSort.label}
                                <span className="inline-block ml-1">
                                    {itemSort.value !== null ? itemSort.icon[itemSort.value] : ' - '}
                                </span>
                            </button>
                        );
                    }
                )
            }
        </div>
    );
}
