import './_modal.scss';
import React from 'react';

export default class Modal extends React.Component {
  render() {
    let showHideClassName = this.props.show ? 'modal display block' : 'modal display-none';

    return(
      <div className={showHideClassName}>
        <button onClick={this.props.handleClose}>close</button>
        <main className='modal-main'>
          {this.props.children}
        </main>
      </div>
    );
  }
}