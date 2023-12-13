import React from "react";



class ProfileStatus extends React.Component {

    componentDidMount() {
        
    }

    state = {
        editMode: false,
        status: this.props.status,
    };
    activateEditMode = () => {

        this.setState({
            editMode: true,
        });

    }
    closeEditMode = () => {
        this.setState({
            editMode: false,
        });

        this.props.updateProfileStatus(this.state.status);

    }
    onStatusChange = (e) => {
        this.setState({
            status: e.target.value,
        });

    }
      componentDidUpdate(prevProps, prevState) {
        
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            });
        }


    }  
    render() {
        return (
            <div>{this.props.isAuth ? this.state.editMode
                ? <div><input onInput={this.onStatusChange} autoFocus onBlur={this.closeEditMode} value={this.state.status} type="text"></input></div>
                : <div>
                    {this.props.status ? <span onDoubleClick={this.activateEditMode}>{this.props.status}</span> : <span onDoubleClick={this.activateEditMode}>Статуса нет</span>}
                </div>:this.props.status ? <span onDoubleClick={this.activateEditMode}>{this.props.status}</span> : <span onDoubleClick={this.activateEditMode}>Статуса нет</span>}
               {/*  {this.state.editMode
                    ? <div><input onInput={this.onStatusChange} autoFocus onBlur={this.closeEditMode} value={this.state.status} type="text"></input></div>
                    : <div>
                        {this.props.status ? <span onDoubleClick={this.activateEditMode}>{this.props.status}</span> : <span onDoubleClick={this.activateEditMode}>Статуса нет</span>}
                    </div>} */}


            </div >
        );

    }
}
export default ProfileStatus;