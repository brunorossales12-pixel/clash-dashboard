import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.COC_API_KEY;

app.get("/clan", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.clashofclans.com/v1/clans/%232JVRUL22C",
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar dados do clã" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
