"use client"; // Indica que este é um Client Component

import { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css"; // Importa o CSS do AOS

export default function AOSInitializer() {
  useEffect(() => {
    // Inicializa o AOS
    AOS.init({
      duration: 600, // Duração das animações
      easing: "ease-in-out", // Tipo de easing
      once: true, // Animações ocorrem apenas uma vez
    });
  }, []); // Executa apenas uma vez, após o componente ser montado

  return null; // Este componente não renderiza nada
}