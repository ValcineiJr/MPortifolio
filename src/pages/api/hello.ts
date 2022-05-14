import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === `POST`) {
    // const { description } = req.body;
    // Chamar a função que cria um dado
    // await createTodo(description);
    return res.status(200).json({ message: `Success` });
  } else if (req.method === `GET`) {
    // Charmar a função que retorna todos os dados
    // const data = await getAllTodos();
    // return res.status(200).json(data);
  }

  res.status(200).json({ name: `John Doe` });
}
