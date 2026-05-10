# Frontend Restaurante MAG

Aplicación web frontend para el sistema Restaurante & Asados MAG, desarrollada con HTML, CSS y JavaScript.

Este frontend consume la API REST del backend desarrollado con FastAPI, permitiendo iniciar sesión, navegar entre módulos protegidos y consultar información desde la base de datos.

---

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Live Server
- API REST FastAPI
- JWT Authentication

---

## Funcionalidades

- Login conectado al backend
- Autenticación con JWT
- Almacenamiento del token en localStorage
- Envío del token en cabecera Authorization Bearer
- Cierre de sesión
- Rutas protegidas
- Consulta de clientes
- Consulta de pedidos
- Vista de usuarios
- Diseño personalizado para Restaurante & Asados MAG

---

## Estructura del proyecto

```bash
frontend-restaurante/
│
├── assets/
│   └── images/
│
├── environments/
│   ├── environment.dev.js
│   └── environment.prod.js
│
├── features/
│   ├── clientes/
│   │   ├── clientes.html
│   │   ├── clientes.css
│   │   └── clientes.js
│   │
│   ├── login/
│   │   ├── login.html
│   │   ├── login.css
│   │   └── login.js
│   │
│   ├── pedidos/
│   │   ├── pedidos.html
│   │   ├── pedidos.css
│   │   └── pedidos.js
│   │
│   └── usuarios/
│       ├── usuarios.html
│       ├── usuarios.css
│       └── usuarios.js
│
├── js/
│   ├── api.js
│   ├── app.js
│   ├── auth.js
│   └── storage.js
│
├── routes/
│   └── app.routes.js
│
├── styles/
│   └── style.css
│
├── index.html
├── package.json
└── README.md
```

---

## Configuración de la API

La URL base del backend se encuentra configurada en los archivos de entorno y en los scripts de consumo de API.

Backend local:

```text
http://127.0.0.1:8000
```

Frontend local:

```text
http://127.0.0.1:8080
```

---

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/camivelez31/frontend-restaurante.git
```

Entrar al proyecto:

```bash
cd frontend-restaurante
```

Instalar Live Server si no está instalado:

```bash
npm install -g live-server
```

---

## Ejecución del frontend

Ejecutar el proyecto:

```bash
live-server
```

Abrir en el navegador:

```text
http://127.0.0.1:8080
```

---

## Requisitos para ejecutar correctamente

Antes de iniciar el frontend, el backend debe estar corriendo:

```bash
uvicorn app:app --reload
```

Swagger del backend:

```text
http://127.0.0.1:8000/docs
```

---

## Credenciales de prueba

```text
Usuario: admin
Contraseña: Admin123*
```

---

## Seguridad implementada

- Login mediante JWT
- Token almacenado en localStorage
- Envío de token en cabecera Authorization Bearer
- Validación de sesión antes de entrar a módulos protegidos
- Logout eliminando el token
- Consumo permitido gracias a configuración CORS del backend

---

## Módulos desarrollados

### Login

Permite iniciar sesión contra el endpoint del backend y obtener el token JWT.

### Clientes

Consulta clientes registrados desde la API REST usando el token JWT.

### Pedidos

Consulta pedidos registrados desde la API REST usando el token JWT.

### Usuarios

Vista inicial para validar la sesión activa y mostrar información del usuario autenticado.

---

## Flujo de ramas

El proyecto utiliza flujo de trabajo con ramas:

- feat/*
- dev
- qa
- prod

---

## Video de demostración

En el siguiente enlace se muestra:

- Arranque del backend y frontend
- Login con JWT
- Consumo de API REST desde el frontend
- Consulta de clientes
- Consulta de pedidos
- Rutas protegidas
- Logout
- CORS
- Uso del token en las peticiones
- Integración backend y frontend

## Link del video Examen 3 y 4

https://drive.google.com/file/d/1Fo5DPRQWclCxrhvqcjU9JrV23wONEyO7/view?usp=sharing

---

## Autor

María Camila Vélez Mazo  
Aplicación y Servicios Web - 2026-1