import React from 'react';
type Body = {
    title: string
}

export const Body = (props: Body) => {
    return (
        <div>
            {props.title}
        </div>
    );
};

