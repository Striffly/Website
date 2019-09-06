import React, { Component } from 'react';
import KwiliApi from '../Shared/Api/api';
import NotLogged from '../Shared/LogHandling/NotLogged';
import KwiliCommon from '../Shared/LogHandling/common';
import classes from '../Chat/Chat.scss';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };
        this.refreshInfo = (response) => {
            if (response != null) {
                this.setState({
                    user: response.data.user,
                });
            }
        };
    }

    componentWillMount() {
        if (KwiliApi.isConnected())
            KwiliApi.getProfileInfo().then(this.refreshInfo);
    }

    handleChange(e) {
        this.setState({ input: e.target.value });
    }

    cardItem(img_src, name, last_msg, last_updated) {
        return (<div>
            <div className="card chatCard">
                <div className="row no-gutters">
                    <div>
                        <img src={img_src} className={`card-img ${classes.chatImg}`} alt={name} />
                    </div>
                    <div>
                        <div className="card-body">
                            <h6 className={`card-title ${classes.chatCardTitle}`}>{name}</h6>
                            <p className={`card-text ${classes.chatCardMsg}`}>"{last_msg}"</p>
                            <p className="card-text"><small className="text-muted">{last_updated}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }

    loadChats(datas) {
        var arr = datas.map(item => this.cardItem(item.img_src, item.name, item.last_msg, item.last_updated));
        return arr;
    }

    render() {
        //     if (!KwiliApi.isConnected())
        //         return <NotLogged/>;
        //         if (KwiliApi.isConnected() === false)
        //         return KwiliCommon.notLoggedPage();
        //     if (!this.state.user)
        //         return KwiliCommon.loadingScreenPage();
        var datas = [
            {
                img_src: "https://scontent-gmp1-1.xx.fbcdn.net/v/t1.0-1/c336.233.182.182a/s50x50/17990928_1293295337374153_6142262363840219098_n.jpg?_nc_cat=110&_nc_oc=AQk4yy9M65uwDj80JGXl6WMcmIG88Lm42YDrSUQxwM98J-pD6VHJjUEqjdHJKozGrsI&_nc_ht=scontent-gmp1-1.xx&oh=202cad3abf1a745aa78b86c7aba4a16e&oe=5DFA644B",
                name: "Ludwig",
                last_msg: "On vas manger ?",
                last_updated: "3 minutes ago",
            },
        ];
        return (
            <div>
                <div className="col-2">
                    {this.loadChats(datas)}
                </div>
            </div>
        );
    }
}
