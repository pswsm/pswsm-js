<?php
echo json_encode(
	[
		'general' => [
			[
				'ciutat' => 'Madrid',
				'oficina' => 'Logísitica'
			],
			[
				'ciutat' => 'Barcelona',
				'oficina' => 'Seu Central'
			]
		],
		'especifica' => [
			'Despatx de direcció',
			'Sala de videoconferències',
			'Magatzem'
		]
	]
)
?>
