import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as userActions from 'app/auth/store/actions';
import {bindActionCreators} from 'redux';
import * as Actions from 'app/store/actions';
import {FuseSplashScreen} from '@fuse';
import jwtService from 'app/services/jwtService';

class Auth extends Component {
    /*eslint-disable-next-line no-useless-constructor*/
    constructor(props)
    {
        super(props);
        this.state = {
            render: false,
        };
    }
    componentDidMount() {
        console.log('component did mount');
        this.jwtCheck();


    }
    jwtCheck = () => {
        jwtService.on('noAccessToken', () => {
            console.log('state set');
            this.setState({render : true});
        });

        jwtService.on('onAutoLogin', () => {

            this.props.showMessage({message: 'Logging in with JWT'});

            jwtService.signInWithToken()
                .then(user => {
                    let userobj = {
                        role    : "admin",
                        data    : {
                            'displayName': user.surname,
                        }
                    };
                    this.props.setUserData(userobj);
                    this.props.showMessage({message: 'Logged in with JWT'});
                    this.setState({render : true});
                })
                .catch(error => {
                    this.props.showMessage({message: error});
                    this.setState({render : true});

                })
        });

        jwtService.on('onAutoLogout', (message) => {
            if ( message )
            {
                this.props.showMessage({message});
            }
            this.props.logout();
            this.setState({render : true});
        });

        jwtService.init();

    };


    render()
    {
        const {children} = this.props;
        if(this.state.render){
            return (
                <React.Fragment>
                    {children}
                </React.Fragment>
            );
        }else{
            return (<FuseSplashScreen></FuseSplashScreen>);
        }

    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
            logout             : userActions.logoutUser,
            setUserData        : userActions.setUserData,
            showMessage        : Actions.showMessage,
            hideMessage        : Actions.hideMessage
        },
        dispatch);
}

export default connect(null, mapDispatchToProps)(Auth);
