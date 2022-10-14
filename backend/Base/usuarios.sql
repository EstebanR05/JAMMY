SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `colegio` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `edad` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `usuarios` (`id`, `nombre`, `correo`, `apellido`, `contrasena`, `colegio`, `telefono`, `edad`) VALUES
(1, 'Steiner', 'pruebadesteiner@gmail.com', 'Herrera', 'mosquera', 'I.E.M.M.M', '3020293030', '15');


ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
COMMIT;