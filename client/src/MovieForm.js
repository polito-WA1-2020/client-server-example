import React from 'react';

import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';



class MovieForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = { title: '', score: 3};
  }


  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId='movieTitle'>
            <Form.Label>Title:&nbsp;</Form.Label>
            <Form.Control value={this.state.title} name='title' onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group controlId='movieScore'>
            <Form.Label>Score </Form.Label>
            <Form.Control as='select' custom value={this.state.score} 
            onChange={this.handleChange} name='score'>
              <option value={1}>☆</option>
              <option value={2}>☆☆</option>
              <option value={3}>☆☆☆</option>
              <option value={4}>☆☆☆☆</option>
              <option value={5}>☆☆☆☆☆</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='movieAdd'>
            <Button variant="primary" type="submit">Add</Button>
          </Form.Group>

      </Form>
    );
  }

  handleChange = (ev) => {
    this.setState({[ev.target.name]: ev.target.value});
  }
  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.addMovie({title:this.state.title, score:this.state.score});
  }

}

export default MovieForm;