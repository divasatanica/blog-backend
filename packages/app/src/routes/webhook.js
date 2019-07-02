import KoaRouter from 'koa-router';

import { processWebhook } from '../controllers/webhook';

const router = new KoaRouter({
    prefix: '/webhook'
});

router.post('/', processWebhook)
      .get('/', processWebhook);

export default router;