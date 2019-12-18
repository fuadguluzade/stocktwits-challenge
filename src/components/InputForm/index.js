import React from "react";

export default props => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="stock-symbol">Enter stock symbols</label>
                <input onChange={props.handleInput} type="text" className="form-control" id="stock-symbol" placeholder="Stock symbol" />
            </div>
        </form>
    )
}