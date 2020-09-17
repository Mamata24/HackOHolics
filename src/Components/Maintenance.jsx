import React from 'react';

function FormItem(props) {
    return (
        <div
            style={{ display: 'flex', flexDirection: 'column', width: '320px' }}
        >
            {props.children}
        </div>
    );
}

function Maintenance() {
    function handleSubmit(e) {
        e.preventDefault();
        window.cy.visit('https://ft4l0l2l.revvsales.com/documents/DOC-000011');
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '20px 0 40px 0',
            }}
        >
            <h2 style={{ margin: '40px 0' }}>Maintenance Request Form</h2>
            <form onSubmit={handleSubmit}>
                <FormItem>
                    <label
                        label="House Number"
                        htmlFor="house_no"
                        style={{ fontWeight: '600', fontFamily: 'sans-serif' }}
                    >
                        House Number
                    </label>
                    <input
                        style={{ margin: '10px 0' }}
                        id="house_no"
                        type="text"
                        placeholder="Enter house number"
                    />
                </FormItem>
                <FormItem>
                    <label
                        style={{ fontWeight: '600', fontFamily: 'sans-serif' }}
                    >
                        Contact Name
                    </label>
                    <input style={{ margin: '10px 0' }} />
                </FormItem>
                <FormItem>
                    <label
                        style={{ fontWeight: '600', fontFamily: 'sans-serif' }}
                    >
                        Contact Number
                    </label>
                    <input style={{ margin: '10px 0' }} />
                </FormItem>
                <FormItem>
                    <label
                        style={{ fontWeight: '600', fontFamily: 'sans-serif' }}
                    >
                        Problem Category
                    </label>
                    <input style={{ margin: '10px 0' }} />
                </FormItem>
                <FormItem>
                    <label
                        style={{ fontWeight: '600', fontFamily: 'sans-serif' }}
                    >
                        Problem Description
                    </label>
                    <textarea style={{ margin: '10px 0' }} />
                </FormItem>
                <FormItem>
                    <label
                        style={{ fontWeight: '600', fontFamily: 'sans-serif' }}
                    >
                        Preffered Schedule
                    </label>
                    <input style={{ margin: '10px 0' }} />
                </FormItem>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Maintenance;
