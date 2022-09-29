import { Router } from "express";

const router = Router();

router.get('/', (request, response) => {
  return response.json({ mensage: 'Resposta do back-end..'})
});

export default router;
