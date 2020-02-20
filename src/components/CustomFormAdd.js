import React from 'react';
import { Card, Input, Button, Row, Col } from 'antd';

class FormAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: this.props.value };
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();     // when submit do not reload form
        const { handleActionAdd } = this.props;
        const { value } = this.state
        handleActionAdd(value);
        this.setState({ value: '' });
    }

    render() {
        const { forwardedRef } = this.props;
        const { value } = this.state;
        return (
            <Card title="Add new item name">
                <Row gutter={[16, 16]}>
                    <Col>
                        <Input placeholder="Item name" value={value} onChange={this.handleChange} ref={forwardedRef} />
                    </Col>
                    <Col span={8}>
                        <Button type="primary" onClick={this.handleSubmit}>Add</Button>
                    </Col>
                </Row>
            </Card>
        );
    }
}

const CustomFormAdd = React.forwardRef((props, ref) => (
    <FormAdd
        forwardedRef={ref}
        handleActionAdd={props.handleActionAdd}
        value={props.value} />
));
export default CustomFormAdd;