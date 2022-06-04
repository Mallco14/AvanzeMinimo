import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container border">
            <a class="navbar-brand" href="#">ContigoPE</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="border collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="border navbar-nav mx-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Productos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ">Nosotros</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ">¿Que somos?</a>
                </li>
              </ul>
              <div>
                <button class='m-2 btn btn-outline-success'>Registrar</button>
                <button class="m-2 btn btn-outline-success" type="submit">Ingresar</button>
                <button class="m-2 btn btn-outline-success" type="submit">Comprar</button>
              </div>

              
            </div>
          </div>
      </nav>
    </div>
  );
}

export default Navbar;


