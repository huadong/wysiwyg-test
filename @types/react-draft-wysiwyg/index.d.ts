declare module 'react-draft-wysiwyg' {
    import { Component } from 'react';
    import { EditorState, RawDraftContentState } from 'draft-js';

    type EditorProps = {
        onChange?: (editorState?: EditorState) => void;
        onEditorStateChange?: (editorState?: EditorState) => void;
        onContentStateChange?: (contentState?: RawDraftContentState) => void;
        //initialContentState is deprecated;
        initialContentState?: RawDraftContentState;
        defaultContentState?: RawDraftContentState;
        contentState?: RawDraftContentState;
        editorState?: EditorState;
        defaultEditorState?: EditorState;
        toolbarOnFocus?: boolean;
        spellCheck?: boolean;
        stripPastedStyles?: boolean;
        toolbar?: any;
        toolbarCustomButtons?: Array<string>;
        toolbarClassName?: string;
        toolbarHidden?: boolean;
        locale?: string;
        // localization?: PropTypes.object;
        editorClassName?: string;
        wrapperClassName?: string;
        toolbarStyle?: any;
        editorStyle?: any;
        // wrapperStyle?: PropTypes.object;
        // uploadCallback?: PropTypes.func;
        // onFocus?: PropTypes.func;
        // onBlur?: PropTypes.func;
        // onTab?: PropTypes.func;
        // mention?: PropTypes.object;
        // hashtag?: PropTypes.object;
        textAlignment?: string;
        readOnly?: boolean;
        tabIndex?: number;
        placeholder?: string;
        ariaLabel?: string;
        ariaOwneeID?: string;
        ariaActiveDescendantID?: string;
        ariaAutoComplete?: string;
        ariaDescribedBy?: string;
        ariaExpanded?: string;
        ariaHasPopup?: string;
        //customBlockRenderFunc?: PropTypes.func;
        //customDecorators?: PropTypes.array;
    };

    export class Editor extends Component<EditorProps, any> {

    }
}

declare module 'draftjs-to-html' {
    import { RawDraftContentState } from 'draft-js';

    export default function draftToHtml(
        editorContent: RawDraftContentState,
        hashtagConfig?: any,
        directional?: boolean,
        customEntityTransform?: any
    ): string;
}

declare module 'html-to-draftjs' {
    import { OrderedMap } from 'immutable';
    import { ContentBlock } from 'draft-js';

    interface HtmlBlock {
        contentBlocks: Array<ContentBlock>;
        entityMap: OrderedMap<string, any>;
    }

    export default function htmlToDraft(
        html: string
    ): HtmlBlock;
}
