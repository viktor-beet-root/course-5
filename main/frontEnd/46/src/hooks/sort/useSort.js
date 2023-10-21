import { useState } from "react";

export default function useSort(data) {
    const [sortMode, setSortMode] = useState(null);

    const sortedData = sortMode ? [...data].sort(
        function (a, b) {
            if (
                (sortMode.value === 'asc' && a[sortMode.key] > b[sortMode.key]) ||
                (sortMode.value === 'desc' && a[sortMode.key] < b[sortMode.key])
            ) {
                return 1;
            } else if (
                (sortMode.value === 'asc' && a[sortMode.key] < b[sortMode.key]) ||
                (sortMode.value === 'desc' && a[sortMode.key] > b[sortMode.key])
            ) {
                return -1;
            } else {
                return 0;
            }
        }
    ) : data;

    function setSort(sortValue) {
        if (!sortValue.value) setSortMode(null);

        setSortMode(sortValue);
    }

    return [sortedData, setSort];
}
