import React from "react";

export default function SvgIcon({ imgId, imgAlt, classNameIcon }) {
    return (
        <img
            className={classNameIcon}
            src={"images/" + imgId + ".svg"}
            alt={"Icon " + imgAlt}
        />
    )
}
