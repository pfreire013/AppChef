import { createAppContainer, createSwitchNavigation } from 'react-navigation';

import Main from './pages/Main';

const routes = createAppContainer(createSwitchNavigation({ Main }));

export default Main;