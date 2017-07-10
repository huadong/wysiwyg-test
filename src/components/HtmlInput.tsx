import * as React from 'react';
import { ContentState, convertToRaw, convertFromHTML, RawDraftContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Component from './Component';

type HtmlInputProps = {
    value?: string;
    onChange: (html: string) => void;
};

type HtmlInputState = {
    contentState: RawDraftContentState;
};

export class HtmlInput extends Component<HtmlInputProps, HtmlInputState> {
    constructor(props: HtmlInputProps) {
        super(props);
        let text: string = this.props.value || "<b>test</b>";
        const blocksFromHTML = convertFromHTML(text);
        const state = ContentState.createFromBlockArray(
            blocksFromHTML.contentBlocks,
            blocksFromHTML.entityMap
        );

        this.state = {
            contentState: convertToRaw(state)
        };
    }

    onChange(contentState: RawDraftContentState): void {
        this.setState({ contentState }, () => {
            if (this.props.onChange) {
                this.state.contentState;
                let html = draftToHtml(contentState);
                this.props.onChange(html);
            }
        });
    }

    render() {
        let toolbar: any = {
            options: ['inline', 'blockType', 'fontSize', 'fontFamily',
                'list', 'textAlign', 'colorPicker', 'link', 'embedded',
                /*'emoji', */'image', 'remove', 'history']
        };
        const { contentState } = this.state;
        return (
            <Editor
                contentState={contentState}
                onContentStateChange={(contentState) => this.onChange(contentState)}
                toolbarClassName="home-toolbar"
                wrapperClassName="home-wrapper"
                editorClassName="home-editor"
            //toolbar={toolbar}
            />
        );
    }
}

export default HtmlInput;
