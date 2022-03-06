import React from "react";

export default function Result({ results }) {
    const input = results[0];
    let inputs = "";
    if (typeof input != 'undefined') {
        input.map(function (element) {
            return inputs += (element + ",");
        });
    }
    inputs = inputs.substring(0, inputs.length - 1);
    return (
        <div id="result" class="d-flex justify-content-left row">
            <p id="inputs">Input: { inputs }</p>
            <p id="prime">Prime Numbers: {results[1]}</p>
            <p id="composite">Composite Numbers: {results[2]}</p>
            <p id="neither">Neither: {results[3]}</p>
        </div>
    )
}