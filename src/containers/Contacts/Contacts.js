import React, {Component, Fragment} from 'react';
import Menu from "../../components/Menu/Menu"

class AboutUs extends Component {
    render() {
        return (
            <Fragment>
                <Menu/>
                <div className='container'>
                    <p className='m-5'>Вам совершенно точно не нужно пытаться контактировать с нами ведь это ничего не изменит.</p>
                </div>
            </Fragment>
        );
    }
}

export default AboutUs;