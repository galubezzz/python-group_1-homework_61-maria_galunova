import React, {Component, Fragment} from 'react';
import Menu from "../../components/Menu/Menu"

class AboutUs extends Component {
    render() {
        return (
            <Fragment>
                <Menu/>
                <div className='container'>
                    <p className='m-5'>Мне нечего рассказать о нас, потому что нет никаких нас. Каждый человек рождается и умирает один.
                        Никто и никогда не сможет по-настоящему быть рядом с тобой. Все отношения - это лишь иллюзия
                        близости и нелепая попытка заполнить пустоту внутри.</p>
                </div>
            </Fragment>
        );
    }
}

export default AboutUs;