import { React } from "react";

export const SideBar = () => {
  return (
    <div
      id="sideNav"
      class="lg:block hidden bg-white w-64 h-screen fixed rounded-none border-none  mr-96"
    >
      <div class="p-4 space-y-4">
        <a
          href="#"
          aria-label="dashboard"
          class="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400"
        >
          <i class="fas fa-home text-white"></i>
          <span class="-mr-1 font-medium">Inicio</span>
        </a>

        <a
          href="#"
          class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
        >
          <i class="fas fa-wallet"></i>
          <span>Billetera</span>
        </a>
        <a
          href="#"
          class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
        >
          <i class="fas fa-exchange-alt"></i>
          <span>Transacciones</span>
        </a>
        <a
          href="#"
          class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
        >
          <i class="fas fa-user"></i>
          <span>Mi cuenta</span>
        </a>
        <a
          href="#"
          class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
        >
          <i class="fas fa-sign-out-alt"></i>
          <span>Cerrar sesión</span>
        </a>
      </div>
    </div>
  );
};
