import React from 'react';
import s from './Profileinfo.module.css';

class ProfileStatus extends React.Component {


    state = {
        editMode: false,
        status: this.props.status
    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactiveEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status)
    }

    onStatuChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.status !== this.props.status)
        this.setState({
            status: this.props.status
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activeEditMode}>{this.props.status}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatuChange} autoFocus={true} onBlur={this.deactiveEditMode} value={this.state.status}></input>
                    </div>}
            </div>
        )
    }
}

export default ProfileStatus