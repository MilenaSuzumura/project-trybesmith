USE `Trybesmith`;

INSERT INTO
  Trybesmith.Users (username, classe, level, password)
VALUES
  ("reigal", "Guerreiro", 10, "1dragaonoceu");

INSERT INTO
  Trybesmith.Users (username, classe, level, password)
VALUES
  ("vyrion", "Inventor", 8, "pagandodividas");

INSERT INTO
  Trybesmith.Users (username, classe, level, password)
VALUES
  ("yraa", "Ladina", 5, "valarmorg");

INSERT INTO
  Trybesmith.Orders (userId)
VALUES
  (1);

INSERT INTO
  Trybesmith.Orders (userId)
VALUES
  (3);

INSERT INTO
  Trybesmith.Orders (userId)
VALUES
  (2);

INSERT INTO
  Trybesmith.Products (name, amount)
VALUES
  ("Espada curta", "10 peças de ouro");

INSERT INTO
  Trybesmith.Products (name, amount, orderId)
VALUES
  (
    "Escudo desnecessariamente grande",
    "20 peças de ouro",
    1
  );

INSERT INTO
  Trybesmith.Products (name, amount, orderId)
VALUES
  ("Adaga de Aço Valírico", "1 peça de ouro", 2);

INSERT INTO
  Trybesmith.Products (name, amount, orderId)
VALUES
  ("Colar de fogo", "1 peça de ouro", 2);

INSERT INTO
  Trybesmith.Products (name, amount, orderId)
VALUES
  ("Engenhoca aleatória", "15 peças de ouro", 3);
