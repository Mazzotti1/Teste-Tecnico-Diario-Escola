

INSERT INTO Aluno (Nome) VALUES ('Lucas');
INSERT INTO Responsável (Nome) VALUES ('Pablo');
INSERT INTO Responsável (Nome) VALUES ('Brenda');


INSERT INTO Parentesco (IdResponsável, IdAluno, Parentesco) VALUES (
    (SELECT Id FROM Responsável WHERE Nome = 'Pablo'),
    (SELECT Id FROM Aluno WHERE Nome = 'Lucas'),
    'Pai'
);

INSERT INTO Parentesco (IdResponsável, IdAluno, Parentesco) VALUES (
    (SELECT Id FROM Responsável WHERE Nome = 'Brenda'),
    (SELECT Id FROM Aluno WHERE Nome = 'Lucas'),
    'Mãe'
);




SELECT
    ALUNO,
    RESPONSAVEL AS PrimeiroResponsavel,
    PARENTESCO AS ParentescoPrimeiro,
    RESPONSÁVEL AS SegundoResponsavel,
    PARENTESCO AS ParentescoSegundo
FROM (
    SELECT
        ALUNO,
        RESPONSAVEL,
        PARENTESCO,
        ROW_NUMBER() OVER (PARTITION BY ALUNO ORDER BY RESPONSAVEL) AS RowNum
    FROM tabela
) AS Subquery
WHERE RowNum <= 2;


SELECT
    'Informações de Relacionamento' AS Categoria,
    '------------------------' AS Separador,
    'Aluno' AS Tipo,
    ALUNO AS Dado1,
    'Responsável' AS Tipo2,
    RESPONSAVEL AS Dado2,
    'Parentesco' AS Tipo3,
    PARENTESCO AS Dado3,
    '------------------------' AS Separador2
FROM tabela

UNION ALL

SELECT
    'Informações de Relacionamento' AS Categoria,
    '------------------------' AS Separador,
    'Aluno' AS Tipo,
    ALUNO AS Dado1,
    'Responsável' AS Tipo2,
    RESPONSÁVEL AS Dado2,
    'Parentesco' AS Tipo3,
    PARENTESCO AS Dado3,
    '------------------------' AS Separador2
FROM tabela
