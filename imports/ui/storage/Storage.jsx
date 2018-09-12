import React, { Component } from 'react';
import { Item,Form, Image,Header,Button,Segment,Table } from 'semantic-ui-react';

export default class Storage extends Component {
  render() {
    return <div>
      <div>

  <Form>
    <Form.Group widths="equal">
      <Form.Dropdown
        placeholder="Категория"
        search
        selection
        options
      />
      <Form.Dropdown
        placeholder="Отделение"
        search
        selection
        options
      />
    </Form.Group>

      <Form.Group widths="equal">
        <Form.Dropdown
          placeholder="Год"
          search
          selection
          options
        />
        <Form.Dropdown
          placeholder="Месяц"
          search
          selection
          options
        />
        <Form.Input
          placeholder="От"
          search
          selection
          options
        />
        -
        <Form.Input
          placeholder="До"
          search
          selection
          options
        />
      </Form.Group>
</Form>

<Table celled>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>№</Table.HeaderCell>
      <Table.HeaderCell>Отделение</Table.HeaderCell>
      <Table.HeaderCell>Категория</Table.HeaderCell>
      <Table.HeaderCell>КТРУ</Table.HeaderCell>
      <Table.HeaderCell>Серия</Table.HeaderCell>
      <Table.HeaderCell>Срок годности</Table.HeaderCell>
      <Table.HeaderCell>Цена закупочная</Table.HeaderCell>
      <Table.HeaderCell>Поставщик</Table.HeaderCell>
      <Table.HeaderCell>Штрих код</Table.HeaderCell>
      <Table.HeaderCell>Наименование</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
 </Table>
<Form.Button>Заявка на приобретение</Form.Button>
</div>
</div>
  }
}
