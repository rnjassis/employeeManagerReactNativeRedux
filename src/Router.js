import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    const { titleSty } = styles;

    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene
                        key="login"
                        component={LoginForm}
                        title="Please Login"
                        titleStyle={titleSty} initial
                    />
                </Scene>
                <Scene key="main">
                    <Scene
                        rightTitle="Add"
                        onRight={() => { Actions.employeeCreate(); }}
                        key="employeeList"
                        component={EmployeeList}
                        title="Employee List"
                        titleStyle={titleSty}
                        rightButtonStyle={{ right: 0 }}
                        initial
                    />
                    <Scene
                        key="employeeCreate"
                        title="Create Employee"
                        component={EmployeeCreate}
                        title="Create Employee"
                        titleStyle={titleSty}
                    />
                    <Scene
                        key="employeeEdit"
                        component={EmployeeEdit}
                        title="Edit employee"
                        titleStyle={titleSty}
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

const styles = {
    titleSty: {
        flex: 1,
        textAlign: 'center'
    }
};

export default RouterComponent;
