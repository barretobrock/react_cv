import React from 'react';


const Text = ({txt}) => {
    return (
        <p className={'justify'}>{txt}</p>
    )
};

const Quote = ({txt, author}) => {
    return (
        <blockquote>
            <span className={'quote-txt'}>{txt}</span>
            <span className={'quote-author'}>--{author}</span>
        </blockquote>
    )
};

export {
    Text,
    Quote
};
