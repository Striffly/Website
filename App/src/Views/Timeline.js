import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../Public/Timeline.css';

function reverseDate(date) {
    var chunks = date.split('-')
    return(chunks[2] + '-' + chunks[1] + '-' + chunks[0])
}

function setIcon(status) {
    if (status === "Finished") {
        return (
        <div class="panel-heading icon" style={{background: 'darkseagreen'}}>
            <i class="glyphicon glyphicon-ok"></i>
        </div> )
    } else {
        return (
        <div class="panel-heading icon" style={{background: 'burlywood'}}>
            <i class="glyphicon glyphicon-flag"></i>
        </div>)
    }
}

export default class Timeline extends Component { 
    state = {
        slot: [],
        response: '',
        post: '',
        responseToPost: '',
    };
    
    componentDidMount() {
        this.callApi()
    }

    callApi = async () => {
        
        fetch("http://epicare.fr:8000/api/timeline/")
                .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let errorMessage = 'error', error = new Error(errorMessage);
                    throw(error);
                }
            })
            .then(response => response.json())
            .then(json =>{
                this.setState({ slot: json.slots })
            });
    }
  
    render () {                                   
          return (
            <div className="container dhn-info" style={{fontSize: '130%'}}>
                <div className="timeline dhn-text">
                        <div className="line text-muted"></div>

                        <div className="separator text-muted">
                            <p>Epitech Experience</p>
                            <h4>Présentation du MVP</h4>
                        </div>
                        
                        <article className="panel panel-info panel-outline">
                            
                            { this.state.slot.map(function(slot) {
                                return [
                                    setIcon(slot.status),

                                    <div className="panel-body">

                                        <span> { reverseDate(slot.startDate) }</span>
                                        <span> { reverseDate(slot.endDate) } </span>

                                        <p> { slot.title } </p>
                                        <span> { slot.description } </span>
                                        <span className="assignee"> { slot.assignee }</span>
                                    </div>
                                ]}
                            )}
                            
                        </article>

                    <div className="separator text-muted">
                        <p>Forward</p>
                        <h4>Gestion des utilisateurs
                            Création / Upload des ordonnances
                            Interface globale
                            Retours utilisateurs
                        </h4>
                    </div>

                </div>
            </div>
        )
    }
}
