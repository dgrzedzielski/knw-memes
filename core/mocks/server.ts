import { setupServer } from 'msw/node';

import { allHandlers } from '~/mocks/handlers';

export const server = setupServer(...allHandlers);
