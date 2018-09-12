import React, { Component } from 'react';
import { Item,Form, Image,Header,Button,Segment } from 'semantic-ui-react';

export default class Treatment extends Component {
  render() {
    return <div>
      <div>
       <Header as="h4">Информация о пациенте</Header>
            <hr/>
<Item>
  <div class="ui items">
    <div class="item">
        <Item.Image><img src="/images/wireframe/image.png"/></Item.Image>
      <div class="middle aligned content">
        <div class="ui list">
<div class="item">
<i class="users icon"></i>
<div class="content">
ФИО:
</div>
</div>
<div class="item">
<i class="phone icon"></i>
<div class="content">
Тел:
</div>
</div>
<div class="item">
<i class="mail icon"></i>
<div class="content">
<a href="">Email:</a>
</div>
</div>
</div>
        </div>
          <Button >
            История болезни пациента
          </Button>
      </div>
    </div>
</Item>
</div>
    <hr/>
<div class="consultation">
<Header as="h4">Консультация</Header>
  <hr/>
<Form>
  <Form.Group widths="equal">
    <Form.Dropdown
      placeholder="Выберите жалобу"
      search
      selection
      options
    />
    <Form.Dropdown
      placeholder="Выберите жалобу"
      search
      selection
      options
    />
  </Form.Group>
  <Form.Group  widths="equal">
  <Form.Checkbox
  label="Дентальный"
  />
  <Form.Checkbox
    label="Понорамный"
    />
  <Form.Checkbox
    label="КТ"
    />
    <Form.Button class="ui right floated ">Отправить на Рентген</Form.Button>
</Form.Group>
<Form.Group>
  <Form.Input
  inline
  label="Введите номер зубов"
  placeholder="Введите номер зубов"
  />
</Form.Group>


<hr/>


<Header as="h4">Лечение</Header>
<hr/>
<Form.Group>
  <Segment>
    <Header as="h5">Лечение</Header>
    <Form.Input
    inline
    label="№ зуба"
    />
    <Form.Dropdown
      placeholder="Вид услуги"
      search
      selection
      options />
      <Form.Dropdown
        placeholder="Вид услуги"
        search
        selection
        options />
        <Form.Dropdown
          placeholder="Вид услуги"
          search
          selection
          options />
    </Segment>

    <Segment>
      <Header as="h5">Список используемых материалов:</Header>
      <Form.Group widths="equal">
        <Form.Checkbox
          label="Материал"
          />
          <Form.Input inline
          label="ШТ" />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Checkbox
          label="Материал"
          />
        <Form.Input inline
        label="ШТ" />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Checkbox
          label="Материал"
          />
          <Form.Input inline
          label="ШТ" />
    </Form.Group>
              <Form.Button>Расширенный список</Form.Button>
      </Segment>
</Form.Group>

<Form.Group>
  <Form.Button>+ Добавить лечение</Form.Button>
</Form.Group>
<Button class="ui right floated button">Сохранить</Button>
</Form>

</div>
</div>
  }
}
