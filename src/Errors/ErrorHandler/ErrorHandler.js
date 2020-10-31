import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";

const errorHandler = (WrapedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    componentDidMount() {
      this.requestIN = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
      });
      this.responseIN = axios.interceptors.response.use(null, (err) => {
        console.log(err);
        this.setState({ error: err });
      });
    }
    componentWillMount() {
      axios.interceptors.response.eject(this.responseIN);
      axios.interceptors.response.eject(this.requestIN);
    }
    closeError = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <>
          {this.state.error !== null ? (
            <Modal
              show={this.state.error}
              style={{ zIndex: 550 }}
              cancel={this.closeError}
            >
              Something went wrong!!
            </Modal>
          ) : null}
          <WrapedComponent {...this.props} />
        </>
      );
    }
  };
};

export default errorHandler;
