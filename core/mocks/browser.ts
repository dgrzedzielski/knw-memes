import { setupWorker } from 'msw';

import { allHandlers } from '~/mocks/handlers';

export const worker = setupWorker(...allHandlers);
