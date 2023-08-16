// pages/api/hp-characters.ts
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get(
      "https://hp-api.onrender.com/api/characters"
    );
    res.status(200).json(response.data);
  } catch (error) {
    const err = error as any;
    res.status(err.response?.status || 500).json({ message: err.message });
  }
};
