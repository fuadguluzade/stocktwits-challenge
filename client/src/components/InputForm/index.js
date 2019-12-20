import React from "react";

export default props => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="stock-symbol">Enter stock symbols</label>
                <input onChange={props.handleInput} type="text" className="form-control" id="stock-symbol" placeholder="Stock symbol" />
                <p>{props.twits.length} results found
                {props.newTwitsCount > 0 && <span style={{ color: "blue", float: "right" }}>{props.newTwitsCount} new</span>}
                </p>
            </div>
        </form>
    )
}