import React from 'react';
import { Card, Table, Button } from 'antd';
import Column from 'antd/lib/table/Column';

class CustomTable extends React.Component {
  render() {
    const { title, items, handleActionEdit, handleActionDel } = this.props;
    const dataSource = items.map(
      (item, index) => { return { key: index, id: index + 1, name: item.name } }
    );
    return (
      <Card title={title}>
        <Table bordered={true} pagination={false} dataSource={dataSource}>
          <Column align="center" title="No" dataIndex="id" key="id" />
          <Column align="center" title="Name" dataIndex="name" key="name" />
          <Column align="center" title="Action" dataIndex="action" key="action" render={
            (text, row) => {
              return (
                <div>
                  <Button shape="circle" icon='edit' onClick={() => handleActionEdit(row.name)} />
                  <Button shape="circle" icon='delete' onClick={() => handleActionDel(row.name)} /> 
                </div>
              );
            }
          } />
        </Table>
      </Card>
    );
  }
}

export default CustomTable;