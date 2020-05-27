export const REQUEST_FETCH = 'REQUEST_FETCH';
export const SUCCEEDED_FETCH = 'SUCCEEDED_FETCH';
export const FAILED_FETCH = 'FAILED_FETCH';

export const REQUEST_DELETE = 'REQUEST_DELETE';
export const SUCCEEDED_DELETE = 'SUCCEEDED_DELETE';
export const FAILED_DELETE = 'FAILED_DELETE';

// export const REQUEST_CREATE = 'REQUEST_CREATE';
// export const SUCCEEDED_CREATE = 'SUCCEEDED_CREATE';
// export const FAILED_CREATE = 'FAILED_CREATE';

export const requestFetch = () => ({ type: REQUEST_FETCH });
export const succeededFetch = (payload: any) => ({ type: SUCCEEDED_FETCH, payload });
export const failedFetch = (message: any) => ({ type: FAILED_FETCH, message });

export const requestDelete = (data: any) => ({ type: REQUEST_DELETE, data });
export const succeededDelete = (payload: any) => ({ type: SUCCEEDED_DELETE, payload });
export const failedDelete = (message: any) => ({ type: FAILED_DELETE, message });

// export const requestCreate = (todoText) => ({ type: REQUEST_CREATE, todoText });
// export const succeededCreate = (payload) => ({ type: SUCCEEDED_CREATE, payload });
// export const failedCreate = (message) => ({ type: FAILED_CREATE, message });
