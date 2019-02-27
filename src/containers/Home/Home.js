import React, {Component, Fragment} from 'react';
import Menu from "../../components/Menu/Menu"

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Menu/>
                <div className='container'>
                    <p className='m-5'>Данная страница не имеет никакого смысла. Впрочем, как и вся наша жизнь. Мы лишь песчинки в
                        масштабах вселенной, с невероятной скоростью летящие навстречу смерти, которая будет
                        единственным возможным избавлением.</p>
                </div>
            </Fragment>
        );
    }
}

export default Home;