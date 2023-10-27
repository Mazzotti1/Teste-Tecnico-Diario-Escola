<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            padding: 20px;
        }

        .cliente-info {
            background-color: #f9f9f9;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        h3 {
            margin: 0;
        }
    </style>
</head>
<body>
    <h1>Informações dos Clientes</h1>

    <?php
    $arrayDeNascimento = [
        'Francisco Souza' => '10-12-1996',
        'Arthur Golveia' => '14-01-2000',
        'Guilherme Rosa' => '26-05-1985',
        'Marcelo Planalto' => '26-05-1985'
    ];

    $arrayDeClientes = [];

    foreach ($arrayDeNascimento as $nome => $dataNascimento) {
        $cliente = new stdClass();
        $cliente->nome = $nome;
        $cliente->dataNascimento = $dataNascimento;
        $arrayDeClientes[] = $cliente;
    }

    function compararPorDataNascimento($a, $b) {
        $dataA = strtotime($a->dataNascimento);
        $dataB = strtotime($b->dataNascimento);
        return $dataA - $dataB;
    }

    usort($arrayDeClientes, 'compararPorDataNascimento');

    foreach ($arrayDeClientes as $cliente) {
        echo '<div class="cliente-info">';
        echo '<h3>Informações do Cliente</h3>';
        echo '<p><strong>Nome:</strong> ' . $cliente->nome . '</p>';
        echo '<p><strong>Data de Nascimento:</strong> ' . $cliente->dataNascimento . '</p>';
        echo '</div>';
    }
    ?>

</body>
</html>
