'use strict';

export class ErrorSaga {
  constructor(error, type) {
    this.type = type;
    this.error = error;
  }
  get sendError() {
    if (this.error.response === undefined) {
      return {
        type: this.type,
        message: {data: 'Please try again', status: 400},
      };
    } else {
      const {error = 'Please try again'} = this.error.response.data;
      return {
        type: this.type,
        message: error,
      };
    }
  }
}
