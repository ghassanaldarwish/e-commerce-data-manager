import React, { Component } from 'react';
import { ImageUpload } from 'quill-image-upload';
import ReactQuill, { Quill } from 'react-quill';
import './InputField.css';
//Quill.register('modules/imageUpload', ImageUpload);
export class QuillTextEditor extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (content, delta, source, editor) => {
        // console.log(editor.getContents());
        //  console.log(editor.getHTML()); // HTML/rich text
        //  console.log(editor.getText()); // plain text

        // const contents = JSON.stringify(value, null, 2);
        // console.log('content, delta, source, editor ==>', content, delta, source, editor);
        this.props.quillTextEditorData(editor.getContents());
    };

    render() {
        return (
            <ReactQuill
                defaultValue={this.props.quillData}
                theme={'snow'}
                className="QuillTextEditor"
                modules={modules}
                formats={formats}
                // onChange={this.handleChange}

                onChange={this.handleChange}
            />
        );
    }
}

const modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        [{ direction: 'rtl' }, { align: [] }],
        [{ color: [] }, { background: [] }],
        [{ script: 'super' }, { script: 'sub' }],
        ['link', 'image'],

        ['clean'],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
    'color',
    'background',
];

export default QuillTextEditor;
