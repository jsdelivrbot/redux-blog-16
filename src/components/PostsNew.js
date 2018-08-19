import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";

class PostsNew extends Component {
  renderField(field) {
    const {
      meta: { touched, error }
    } = field;

    const className = `form-group ${touched && error ? "has-danger" : ""}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h3>Post New</h3>

        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field name="title" component={this.renderField} label="title" />
          <Field
            name="categories"
            component={this.renderField}
            label="categories"
          />
          <Field
            name="content"
            component={this.renderField}
            label="Contenido"
          />
          <button className="btn btn-primary" type="submit">
            Save
          </button>
          <Link className="btn btn-secondary" to="/">
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}
function validate(values) {
  const errors = {};
  //validemos los inputs de values
  if (!values.title || values.title.length < 3) {
    errors.title = "please enter a title with at least 3 characters";
  }
  if (!values.categories) {
    errors.categories = "please enter some categories";
  }
  if (!values.content) {
    errors.content = "please enter some content";
  }
  //devolvemos el objeto errores, si esta vacio el formulario se envia
  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(
  connect(
    null,
    { createPost }
  )(PostsNew)
);
