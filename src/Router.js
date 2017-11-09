import React from 'react';
import { Router, Scene, Switch } from 'react-native-router-flux';

import List from './components/list';
import PostDetail from './components/PostDetail';

const RouterComponent = () => {
    return(
        <Router>
            <Scene
            key="root"
            component={Switch}
            selector={() => {return "postDetail"}}
            >
                <Scene key="list" component={List} 
                title="Lista de Posts" initial/>
                <Scene key="postDetail" component={PostDetail} 
                title="Ver Post" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
