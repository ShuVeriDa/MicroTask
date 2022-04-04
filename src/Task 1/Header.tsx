import React from 'react';

type HeaderType = {
    title: string
}

export const Header = (props: HeaderType) => {
    return (
        <div>
            <h1>Task 1</h1>
            {props.title}
        </div>
    );
};
