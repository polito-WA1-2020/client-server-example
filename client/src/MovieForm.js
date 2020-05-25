import React from 'react';

import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

import { Redirect, Link } from 'react-router-dom';



class MovieForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',  // Text input for movie title
      score: '',  // Select input for movie score
      key: 1,     // changing the 'key' will re-generate the form
      // (resetting the content and the validation errors)
      submitted: false, // just-submitted a new movie?
    };
  }


  render() {
    if (this.state.submitted)
      return <Redirect to='/' />;
    return (
      <Form key={this.state.key} onSubmit={this.handleSubmit}>
        <Form.Group controlId='movieTitle'>
          <Form.Label>Title:&nbsp;</Form.Label>
          <Form.Control value={this.state.title} name='title' onChange={this.handleChange} required />
        </Form.Group>
        <Form.Group controlId='movieScore'>
          <Form.Label>Score </Form.Label>
          <Form.Control as='select' custom value={this.state.score}
            onChange={this.handleChange} name='score' required>
            <option value=''> </option>
            <option value={1}>☆</option>
            <option value={2}>☆☆</option>
            <option value={3}>☆☆☆</option>
            <option value={4}>☆☆☆☆</option>
            <option value={5}>☆☆☆☆☆</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='movieAdd'>
          <Button variant="primary" type="submit">Add</Button>{' '}
          <Link to='/' className='btn btn-secondary'>Cancel</Link>
        </Form.Group>

      </Form>
    );
  }

  handleChange = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value });
  }
  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.addMovie({ title: this.state.title, score: this.state.score });
    this.setState((state) => ({ title: '', score: '', key: state.key + 1, submitted:true }));
  }

}

export default MovieForm;