import * as React from 'react';

export class Component<P, S> extends React.Component<P, S>{
    [x: string]: any;

    constructor(props: P){
        super(props);
    }

    bindHandlers(...funcs: Array<string>): void {
        funcs.forEach(func => {
            this[func] = this[func].bind(this);
        });
    }
}

export default Component;