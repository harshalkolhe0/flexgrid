import React from "react";
import "./AppFlex.css";

const Flex = () => {
    return (
        // <div>
        //     <div class="centeredcontainer">
        //         <div class="box">Hello</div>
        //     </div>
        // </div>

        <div class="fcontainer">
            <div class="box">Hello</div>
            <div class="box p1">
                Hello2 top -{">"} affect divs after it,used position:absolute
            </div>
            <div class="box p2">
                <span>
                    Hello3 top -{">"} <span class="bold">NOT</span> affect other
                    divs after it,,used position:relative
                </span>
            </div>
            <div class="box">Hello4</div>
            <div class="box">Hello5</div>
            <div class="box">Hello6</div>
            <div class="box">Hello7</div>
        </div>
    );
};

export default Flex;
