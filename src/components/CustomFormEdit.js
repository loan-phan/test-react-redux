import React from 'react';
import { Card, Input, Button, Row, Col } from 'antd';


class CustomFormEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentName: this.props.oldValue,
            newName: ''
        };
    }

    handleChange = (event) => {
        this.setState({ newName: event.target.value });
    }

    handleSave = (event) => {
        this.props.handleSave(this.state.currentName, this.state.newName);
        this.setState({
            currentName: '',
            newName: ''
        });
    }

    handleCancel = () => {
        this.props.handleCancel();
        this.setState({
            currentName: '',
            newName: ''
        });
    }

    setCurrentName = (name) => {
        this.setState({ currentName: name });
    }

    render() {
        const { disabled } = this.props;
        const { currentName, newName } = this.state;
        return (
            <Card title="Edit item name">
                <Row gutter={[16, 16]}>
                    <Col>
                        <Input placeholder="Old name" value={currentName} disabled />
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col>
                        <Input placeholder="New name" value={newName} onChange={this.handleChange} disabled={disabled} />
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={8}>
                        <Button type="primary" onClick={this.handleSave} disabled={disabled}>Save</Button>
                    </Col>
                    <Col span={8}>
                        <Button type="primary" onClick={this.handleCancel} disabled={disabled}>Cancel</Button>
                    </Col>
                </Row>
            </Card>
        );
    }
}
export default CustomFormEdit;