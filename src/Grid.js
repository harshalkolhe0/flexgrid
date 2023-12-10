import React from "react";

const Grid = () => {
    return (
        <div>
            <h1>Level 1</h1>
            <div className="container1">
                <div className="items1">items 1</div>
                <div className="items1">items 2</div>
                <div className="items1">items 3</div>
                <div className="items1">items 4</div>
                <div className="items1">items 5</div>
                <div className="items1">
                    items 6 hello some more text lets see size now,items 6 hello
                    some more text lets see size now,items 6 hello some more
                    text lets see size nowitems 6 hello some more text lets see
                    size now
                </div>
                <div className="items1">items 7</div>
                <div className="items1">items 8</div>
                <div className="items1">items 9</div>
            </div>
            <h1>Level 2</h1>
            <div className="container">
                <div className="items" id="item1">
                    items 1
                </div>
                <div className="items" id="item2">
                    <div className="items" id="item2a">
                        items 2 a
                    </div>
                    <div className="items" id="item2b">
                        items 2 b{" "}
                    </div>
                    <div className="items" id="item2c">
                        items 2 c
                    </div>
                </div>
                <div className="items" id="item3">
                    items 3
                </div>
                <div className="items" id="item4">
                    items 4
                </div>
                <div className="items">items 5</div>
                <div className="items">items 6</div>
                <div className="items">items 7</div>
                <div className="items">items 8</div>
                <div className="items">items 9</div>
            </div>
            <h1>Level 3</h1>
            <div className="container">
                <div className="item211">
                    <div className="items6" id="item21a">
                        items 2 a
                    </div>
                    <div className="items6" id="item21b">
                        items 2 b{" "}
                    </div>
                    <div className="items6" id="item21c">
                        items 2 c
                    </div>
                    <div className="items6" id="item21d">
                        items 2 a
                    </div>
                    <div className="items6" id="item21e">
                        items 2 b{" "}
                    </div>
                    <div className="items6" id="item21f">
                        items 2 c
                    </div>
                </div>
            </div>
            <h1>Flex</h1>
            <div className="flexbox">
                <div className="item3">1</div>
                <div className="item3">p</div>
                <div className="item3">p</div>
                <div className="item3">4</div>
                <div className="item3">p</div>
                <div className="item3">p</div>
                <div className="item3">p</div>
                <div className="item3">p</div>
                <div className="item3">9</div>
                <div className="item3">p</div>
                <div className="item3">p</div>
                <div className="item3">p</div>
                <div className="item3">13</div>
                <div className="item3">p</div>
                <div className="item3">p</div>
                <div className="item3">p</div>
                <div className="item3">p</div>
                <div className="item3">p</div>
                <div className="item3">p</div>
                <div className="item3">last</div>
            </div>
        </div>
    );
};

export default Grid;
