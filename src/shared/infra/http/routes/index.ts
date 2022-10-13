import { Router } from "express";
import usersRouter from "@modules/users/infra/http/routes/users.router";

const router = Router();

router.use('/users', usersRouter);

/*router.get('/', (request, response) => {
  return response.json({ mensage: 'Resposta do back-end..'})
});
*/

export default router;
