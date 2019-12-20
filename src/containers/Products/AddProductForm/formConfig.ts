const addProductForm = {
    title: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            label: 'roduct Title',
        },
        value: JSON.parse(localStorage.getItem('title') as any) || '',
        validation: {
            required: true,
        },
        valid: false,
        touched: false,
    },
    subTitle: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            label: 'Product Sub Title',
        },
        value: JSON.parse(localStorage.getItem('subTitle') as any) || '',
        validation: {
            required: true,
        },
        valid: false,
        touched: false,
    },
    brand: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            label: 'Product Brand',
        },
        value: JSON.parse(localStorage.getItem('brand') as any) || '',
        validation: {
            required: true,
        },
        valid: false,
        touched: false,
    },
    price: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            label: 'Product Price',
        },
        value: JSON.parse(localStorage.getItem('price') as any) || '',
        validation: {
            required: true,
        },
        valid: false,
        touched: false,
    },
    image: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            label: 'Product Image',
        },
        value: JSON.parse(localStorage.getItem('image') as any) || '',
        validation: {
            required: true,
        },
        valid: false,
        touched: false,
    },
    link: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            label: 'Product Link',
        },
        value: JSON.parse(localStorage.getItem('link') as any) || '',
        validation: {
            required: true,
        },
        valid: false,
        touched: false,
    },
    description: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            label: 'Product description',
        },
        value: JSON.parse(localStorage.getItem('description') as any) || '',
        validation: {
            required: true,
        },
        valid: false,
        touched: false,
    },
    productImage1: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            label: 'Product Image 1',
        },
        value: JSON.parse(localStorage.getItem('productImage1') as any) || '',
        validation: {
            required: false,
        },
        valid: false,
        touched: false,
    },
    productImage2: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            label: 'Product Image 2',
        },
        value: JSON.parse(localStorage.getItem('productImage2') as any) || '',
        validation: {
            required: false,
        },
        valid: false,
        touched: false,
    },
    productImage3: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            label: 'Product Image 3',
        },
        value: JSON.parse(localStorage.getItem('productImage3') as any) || '',
        validation: {
            required: false,
        },
        valid: false,
        touched: false,
    },
    peopleImage1: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            label: 'Product People 1',
        },
        value: JSON.parse(localStorage.getItem('PeopleImage1') as any) || '',
        validation: {
            required: false,
        },
        valid: false,
        touched: false,
    },
    peopleImage2: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            label: 'Product People 2',
        },
        value: JSON.parse(localStorage.getItem('PeopleImage2') as any) || '',
        validation: {
            required: false,
        },
        valid: false,
        touched: false,
    },
    peopleImage3: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            label: 'Product People 3',
        },
        value: JSON.parse(localStorage.getItem('PeopleImage3') as any) || '',
        validation: {
            required: false,
        },
        valid: false,
        touched: false,
    },
    productReview: {
        elementType: 'quill',
        elementConfig: {
            type: 'text',
            label: 'product Review',
        },
        value: JSON.parse(localStorage.getItem('productReview') as any) || null,
        validation: {
            required: true,
        },
        valid: false,
        touched: false,
    },
    submit: {
        elementType: 'button',
        elementConfig: {
            type: 'submit',
            label: 'Submit Data',
        },
        valid: false,
        touched: false,
    },
};

export default addProductForm;
