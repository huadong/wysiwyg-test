import * as React from 'react';
import * as ReactDom from 'react-dom';
import HtmlInput from './components/HtmlInput';

ReactDom.render(
    <HtmlInput onChange={(value: string) => {}}/>
    ,
    document.getElementById('editor')
);