<script>
  import "../app.css";

  function mayaWink(e) {
    let el = document.getElementById("mayabot")
    el.src = "/maya2.png";
  }
  function mayaOpen(e) {
    let el = document.getElementById("mayabot")
    el.src = "/maya1.png";
  }

</script>

<div class="navbar bg-red-500 relative overflow-y-scroll z-10">
  <div class="navbar-start">
    <div class="dropdown">

      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

<!--         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <object data="/icono.svg" type="image/svg+xml"></object>
        </svg> -->

      </label>

      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>

        <li tabindex="0" class="active:bg-white">
          <a class="justify-between focus:bg-white">
            Preferente
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>

      </ul>

    </div>

    <a class="btn btn-ghost normal-case font-bold text-xl text-white">
      <img src="/icono.svg" class="stroke-white text-white fill-white w-10 h-10 px-1" />
      Banorte
    </a>

  </div>

  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">

      <li tabindex="0">
        <a class="text-white">
          Preferente
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>

      <li><a class="text-white click:text-gray-400" >Sucursales</a></li>

      <li>
        <div class="form-control pt-0 pb-0">
          <input type="text" placeholder="Busca" class="input input-bordered bg-white text-red-500 placeholder-red-400" />
        </div>
      </li>

    </ul>
  </div>

  <div class="navbar-end">
    <a href="#" class="btn bg-red-500 text-white border-white hover:border-white hover:bg-white hover:text-red-500">QUIERO SER CLIENTE</a>
  </div>

</div>

<main class="flex-grow" on:mouseover on:onmouseout>
  <slot/>

    <!-- <a class="fixed z-10 bottom-10 right-8 bg-red-500 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl animate-bounce duration-300"> -->
    <a href="https://app.brancher.ai/83707320-a729-4a95-98d5-770a42a0e254" class="fixed z-10 bottom-4 right-4 bg-transparent w-20 h-20 flex justify-center items-center text-white text-4xl">
        <img id="mayabot" src="/maya1.png" on:mouseover={mayaWink} on:mouseout={mayaOpen}>
    </a>

    <a class="fixed z-10 bottom-4 left-4 bg-transparent rounded-full drop-shadow-lg flex justify-center items-center text-white">
      <img src="/social.png" class="w-10"/>
    </a>


</main>