import React, { Component } from 'react';
import { ImageUpload } from 'quill-image-upload';
import ReactQuill, { Quill } from 'react-quill';
import './InputField.css';
Quill.register('modules/imageUpload', ImageUpload);
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
    imageUpload: {
        url: 'http://localhost:7000/3/image', // server url. If the url is empty then the base64 returns
        method: 'POST', // change query method, default 'POST'
        name: 'image', // custom form name
        withCredentials: false, // withCredentials

        // personalize successful callback and call next function to insert new url to the editor
        callbackOK: (serverResponse, next) => {
            next(serverResponse.data.link);
        },
        // personalize failed callback
        callbackKO: serverError => {
            alert(serverError);
        },
        // optional
        // add callback when a image have been chosen
        checkBeforeSend: (file, next) => {
            console.log(file);
            next(file); // go back to component and send to the server
        },
    },
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
