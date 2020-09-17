import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

function FormItem(props) {
    return (
        <div
            style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        >
            {props.children}
        </div>
    );
}

function Maintenance() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [houseNo, setHouseNo] = useState('');
    const [category, setCategory] = useState('Electrical');
    const [description, setDescription] = useState('');
    const [schedule, setSchedule] = useState('Anytime');

    async function handleSubmit(e) {
        e.preventDefault();

        let accessToken = await axios({
            method: 'POST',
            url: 'https://api.revvsales.com/api/v2/auth/initiate-auth',
            data: {
                user_email: 'reva.bob@gmail.com',
                password: 'Mcboatface@10',
                org_domain: 'ft4l0l2l',
            },
            headers: { GrantType: 'password' },
        })
            .then((res) => res.data.User.access_token)
            .catch((err) => console.log(err));
        console.log(accessToken);

        let data = {
            template_id: 5,
            folder_id: 1,
            title: `${houseNo} - ${category}`,
        };

        let doc_no = await axios({
            method: 'POST',
            url: 'https://api.revvsales.com/api/docs',
            data,
            headers: {
                AccessToken: accessToken,
            },
        })
            .then((res) => res.data.Document.doc_no)
            .catch((err) => console.log(err));

        await axios
            .get(
                `http://localhost:5000/postrequest?firstname=${firstname}&lastname=${lastname}&email=${email}&houseNo=${houseNo}&category=${category}&description=${description}&schedule=${schedule}&doc_no=${doc_no}`
            )
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    }

    return (
        <React.Fragment>
            <Navbar currLoc={'maintenance'} />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '40px 0',
                    background: 'whitesmoke',
                }}
            >
                <form
                    onSubmit={handleSubmit}
                    style={{
                        background: '#322c59',
                        padding: '0 40px 20px 40px',
                        color: 'white',
                    }}
                >
                    <h1 style={{ margin: '40px 0' }}>
                        Maintenance Request Form
                    </h1>
                    <FormItem>
                        <label
                            style={{
                                fontWeight: '600',
                                fontFamily: 'sans-serif',
                            }}
                        >
                            Full Name
                        </label>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <input
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                style={{ margin: '10px 0', width: '200px' }}
                                placeholder="Enter first name"
                            />
                            <input
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                style={{ margin: '10px 0', width: '200px' }}
                                placeholder="Enter last name"
                            />
                        </div>
                    </FormItem>
                    <FormItem>
                        <label
                            style={{
                                fontWeight: '600',
                                fontFamily: 'sans-serif',
                            }}
                        >
                            Email
                        </label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            style={{ margin: '10px 0', width: '100%' }}
                            placeholder="Enter email"
                        />
                    </FormItem>
                    <FormItem>
                        <label
                            htmlFor="house_no"
                            style={{
                                fontWeight: '600',
                                fontFamily: 'sans-serif',
                            }}
                        >
                            House Number
                        </label>
                        <input
                            value={houseNo}
                            onChange={(e) => setHouseNo(e.target.value)}
                            style={{ margin: '10px 0' }}
                            id="house_no"
                            type="text"
                            placeholder="Enter house number"
                        />
                    </FormItem>
                    <FormItem>
                        <label
                            style={{
                                fontWeight: '600',
                                fontFamily: 'sans-serif',
                            }}
                        >
                            Preffered Schedule
                        </label>
                        <select
                            value={schedule}
                            onChange={(e) => setSchedule(e.target.value)}
                            style={{ margin: '10px 0' }}
                        >
                            <option value="Anytime">Anytime</option>
                            <option value="Immediate">Immediate</option>
                            <option value="Morning">Morning</option>
                            <option value="Afternoon">Afternoon</option>
                            <option value="Evening">Evening</option>
                        </select>
                    </FormItem>
                    <FormItem>
                        <label
                            style={{
                                fontWeight: '600',
                                fontFamily: 'sans-serif',
                            }}
                        >
                            Problem Category
                        </label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            style={{ margin: '10px 0' }}
                        >
                            <option value="Electrical">Electrical</option>
                            <option value="Plumbing">Plumbing</option>
                            <option value="Light Fixtures">
                                Light Fixtures
                            </option>
                            <option value="Pest Control">Pest Control</option>
                            <option value="Kitchen">Kitchen</option>
                            <option value="Lost Key">Lost Key</option>
                        </select>
                    </FormItem>
                    <FormItem>
                        <label
                            style={{
                                fontWeight: '600',
                                fontFamily: 'sans-serif',
                            }}
                        >
                            Problem Description
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter short description of problem"
                            style={{
                                margin: '10px 0',
                                minHeight: '200px',
                                maxHeight: '200px',
                                minWidth: '100%',
                                maxWidth: '100%',
                                padding: '10px',
                            }}
                        />
                    </FormItem>
                    <input
                        type="submit"
                        value="Submit"
                        style={{
                            background: '#603bbb',
                            border: 'none',
                            padding: '10px 60px',
                            margin: '20px auto',
                            color: 'white',
                            fontSize: 'larger',
                            width: '100%',
                        }}
                    />
                </form>
            </div>
        </React.Fragment>
    );
}

export default Maintenance;
