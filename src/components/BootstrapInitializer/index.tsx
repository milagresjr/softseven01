"use client"; // Indica que este é um Client Component

import { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Importa o JavaScript do Bootstrap

export default function BootstrapInitializer() {
  useEffect(() => {
    // Você pode adicionar lógica de inicialização aqui, se necessário
  }, []);

  return null; // Este componente não renderiza nada
}