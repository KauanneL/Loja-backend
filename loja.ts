import express, {type Express, type Request, type Response} from 'express';

const app: Express = express();

const produtos = [
  {
    "id": 1,
    "nome": "Smartphone Galaxy A55",
    "marca": "Samsung",
    "descrição": "Smartphone com tela Super AMOLED de 6,6 polegadas e 128 GB de armazenamento.",
    "preço": 1899.90,
    "foto": "https://m.magazineluiza.com.br/a-static/420x420/usado-galaxy-a55-256gb-azul-claro-excelente-trocafy-samsung/trocafy/329154/615113ed02d180de1dd57403f7117c7e.jpeg",
    "quantidade": 15
  },
  {
    "id": 2,
    "nome": "Notebook IdeaPad 3",
    "marca": "Lenovo",
    "descrição": "Notebook com processador Intel Core i5, 8 GB de RAM e SSD de 256 GB.",
    "preço": 3299.00,
    "foto": "https://http2.mlstatic.com/D_Q_NP_691412-MLA99839019001_112025-F.webp",
    "quantidade": 8
  },
  {
    "id": 3,
    "nome": "Fone Bluetooth WH-CH520",
    "marca": "Sony",
    "descrição": "Fone de ouvido sem fio com conexão Bluetooth e bateria de longa duração.",
    "preço": 249.90,
    "foto": "https://http2.mlstatic.com/D_Q_NP_645386-MLA95496926110_102025-F.webp",
    "quantidade": 25
  },
  {
    "id": 4,
    "nome": "Smart TV 50 Polegadas",
    "marca": "LG",
    "descrição": "Smart TV 4K UHD de 50 polegadas com acesso a aplicativos de streaming.",
    "preço": 2499.90,
    "foto": "https://m.magazineluiza.com.br/a-static/420x420/smart-tv-50-samsung-uhd-4k-crystal-uhd-u8600f-un50u8600fgxzd-tizen-crystal-4k-bixby-e-alexa-3-hdmi/magazineluiza/240147400/75e1f7e592b5e38e6110ce3e702a3233.jpg",
    "quantidade": 6
  },
  {
    "id": 5,
    "nome": "Mouse Sem Fio M185",
    "marca": "Logitech",
    "descrição": "Mouse sem fio compacto, com conexão USB e design ergonômico.",
    "preço": 79.90,
    "foto": "https://http2.mlstatic.com/D_Q_NP_841807-MLA99435058268_112025-F.webp",
    "quantidade": 40
  }
]

app.get('/', (req: Request, res: Response) => {
    res.redirect('/produtos');
});

app.get('/produtos/:id', (req: Request, res: Response) => {
    const id = +req.params.id; //pega o parâmetro
    if (produtos && produtos.length > 0){
        const prod = produtos.find(p => p.id === id);
        res.json(prod);
    }
    res.json([]);
});

app.listen(3000, () => {
    console.log('back-end ok!')
});