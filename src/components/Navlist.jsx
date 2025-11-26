import React from "react";

function NavList(props) {
    return (
        <div>
            <li>
                <a href={props.link} className="text-black font-[400] hover:text-grey pb-1 border-b-2 border-transparent hover:border-black transition-all">
                    {props.text}
                </a>
            </li>
        </div>
    )
}

export default NavList;
