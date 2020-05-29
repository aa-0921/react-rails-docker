export const REQUEST_FETCH = 'REQUEST_FETCH';
export const SUCCEEDED_FETCH = 'SUCCEEDED_FETCH';
export const FAILED_FETCH = 'FAILED_FETCH';

export const REQUEST_DELETE = 'REQUEST_DELETE';
export const SUCCEEDED_DELETE = 'SUCCEEDED_DELETE';
export const FAILED_DELETE = 'FAILED_DELETE';

export const REQUEST_CREATE = 'REQUEST_CREATE';
export const SUCCEEDED_CREATE = 'SUCCEEDED_CREATE';
export const FAILED_CREATE = 'FAILED_CREATE';

export const requestFetch = () => ({ type: REQUEST_FETCH } as const);
export const succeededFetch = (payload: any) => ({ type: SUCCEEDED_FETCH, payload } as const);
export const failedFetch = (message: any) =>
  ({ type: FAILED_FETCH, message, error: Error } as const);

export const requestDelete = (data: any) => ({ type: REQUEST_DELETE, data } as const);
export const succeededDelete = (payload: any) => ({ type: SUCCEEDED_DELETE, payload } as const);
export const failedDelete = (message: any) => ({ type: FAILED_DELETE, message } as const);

export const requestCreate = (postText: any) => ({ type: REQUEST_CREATE, postText });
export const succeededCreate = (payload: any) => ({ type: SUCCEEDED_CREATE, payload });
export const failedCreate = (message: any) => ({ type: FAILED_CREATE, message });
