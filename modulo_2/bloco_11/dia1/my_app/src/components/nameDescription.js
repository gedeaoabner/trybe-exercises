import React, { Component } from "react";

const myName = 'Gedeão Abner';
const description = 'Aluno da Trybe!';

// class nameDescription extends React.Component {
const nameDescription = (
    <div>
        <h1>{myName}:</h1>
        <p>{description}</p>
    </div>);

export default nameDescription;