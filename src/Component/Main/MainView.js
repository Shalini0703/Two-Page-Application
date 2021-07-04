import React from 'react';
import Iframe from 'react-iframe';
import validator from 'validator';

function MainView(props) {
    const {urlViewOne,urlViewTwo} = props;
    let validateURLOne = urlViewOne !== undefined ?validator.isURL(urlViewOne): '';
    let validateURLTwo = urlViewTwo !== undefined ?validator.isURL(urlViewTwo): '';
    return (
        <div id="mainView">
            {validateURLOne ?
            <Iframe url={urlViewOne}
            /> : <Iframe url=''
            />
            }
            {validateURLTwo ?
            <Iframe url={urlViewTwo}
            /> : <Iframe url=''
            />
            }
            
        </div>
    )
}

export default MainView
