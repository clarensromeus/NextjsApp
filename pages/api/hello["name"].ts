// Next.js API route support: https://nextjs.org/docs/api-routes/
import {} from "apollo-server-micro";
import type { NextApiRequest, NextApiResponse } from "next";
import cluster from "cluster";
import { fork } from "child_process";
import os from "os";

type Data = {
  name: string;
  age: number;
  vocation: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const name = req.query.name;

  res.status(200).json({
    name: name as string,
    age: 23,
    vocation: "software engineer",
  });
}
