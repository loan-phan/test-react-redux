import React from 'react';
import CustomTable from './CustomTable';
import { connect } from 'react-redux';
import { addItem, delItem } from '../redux/action';
import CustomFormAdd from './CustomFormAdd';
import CustomFormEdit from './CustomFormEdit';
import { Row, Col } from 'antd';

class App extends React.Component {
  constructor() {
    super();
    this.state = ({ editDisable: true });
    this.inputAddName = React.createRef();
    this.inputEditName = React.createRef();
    this.handleActionEdit = this.handleActionEdit.bind(this);       // handle action - should not do
  }

  componentDidMount() {
    this.inputAddName.current.focus();
  }

  // handle action - should not do
  handleActionEdit(event) {
    this.inputEditName.current.setCurrentName(event);
    this.setState({ editDisable: false });
  }

  // handle action - should do
  handleSave = (currentName, newName) => {
    const { handleActionAdd, handleActionDel } = this.props
    handleActionAdd(newName);
    handleActionDel(currentName);
    this.setState({ editDisable: true });
  }

  handleCancel = () => {
    this.setState({ editDisable: true });
  }

  render() {
    const { handleActionAdd, handleActionDel } = this.props;    // using props/state - should do
    const { editDisable } = this.state
    return (
      <div>
        <Row>
          <Col span={8}>
            <CustomFormAdd
              value=''
              handleActionAdd={handleActionAdd}
              ref={this.inputAddName} />
          </Col>
          <Col span={8}>
            <CustomTable
              title="Available items"
              items={this.props.items}        // using props/state - should not do
              handleActionEdit={this.handleActionEdit}
              handleActionDel={handleActionDel} />
          </Col>
          <Col span={8}>
            <CustomFormEdit
              disabled={editDisable}
              ref={this.inputEditName}
              handleSave={this.handleSave}
              handleCancel={this.handleCancel} />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.availableItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleActionAdd: name => dispatch(addItem(name)),
    handleActionDel: name => dispatch(delItem(name))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

