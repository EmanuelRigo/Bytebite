# ByteBite

Aplicación móvil de gestión de alimentos y nutrición desarrollada con React Native, Expo y TypeScript.

## 📱 Descripción

ByteBite es una aplicación móvil que permite a los usuarios rastrear su ingesta de alimentos, obtener información nutricional y gestionar sus hábitos alimentarios de forma sencilla.

## 🛠️ Stack Tecnológico

- **React Native** - Framework de desarrollo móvil multiplataforma
- **Expo SDK 54** - Plataforma para desarrollar aplicaciones React Native
- **TypeScript** - Tipado estático para JavaScript
- **NativeWind** - Tailwind CSS para React Native (estilos)
- **Zustand** - Manejo de estado global ligero
- **Expo Router** - Enrutamiento de archivos para Expo (similar a Next.js)

## 📁 Estructura del Proyecto

```text
app/
├── _layout.tsx          (Navegación principal)
├── (public)/            (Rutas públicas - sin autenticación)
│   ├── _layout.tsx
│   ├── index.tsx        (Pantalla de bienvenida)
│   ├── login.tsx
│   └── register.tsx
├── (protected)/         (Rutas protegidas - requieren autenticación)
│   ├── _layout.tsx
│   ├── home.tsx
│   ├── profile.tsx
│   └── settings.tsx
└── modal/               (Modales compartidos)
    └── example.tsx

components/
├── ui/                  (Componentes base reutilizables)
├── forms/               (Componentes de formularios)
└── common/              (Componentes comunes - Button, Logo, etc.)

services/
├── api.ts              (Cliente HTTP centralizado)
└── auth.ts             (Servicio de autenticación)

hooks/                  (Custom hooks reutilizables)
context/                (React Context providers)
types/                  (TypeScript tipos e interfaces)
utils/                  (Utilidades y helpers)
constants/              (Constantes globales)
```

## 🚀 Instalación y Configuración

### Requisitos

- Node.js 18+
- npm o yarn
- Expo CLI: `npm install -g expo-cli`

### Pasos de instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd ByteBite/Mobile/Bytebite

# Instalar dependencias
npm install

# Instalar Expo CLI si no lo tienes
npm install -g expo-cli

# Iniciar el servidor de desarrollo
npm start
```

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
EXPO_PUBLIC_API_URL=http://localhost:3000/api
```

## 🎮 Uso

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm start

# En iOS
i

# En Android
a

# En web
w
```

### Build

```bash
# iOS
eas build --platform ios

# Android
eas build --platform android
```

## 📋 Características Principales

### Rutas Públicas (sin autenticación)

- **index.tsx** - Pantalla de bienvenida
- **login.tsx** - Iniciar sesión
- **register.tsx** - Crear nueva cuenta

### Rutas Protegidas (requieren autenticación)

- **home.tsx** - Panel principal
- **profile.tsx** - Perfil del usuario
- **settings.tsx** - Configuraciones

## 🏗️ Arquitectura

### Servicios

- `api.ts` - Cliente HTTP centralizado para todas las llamadas API
- `auth.ts` - Servicio de autenticación y gestión de usuario

### Componentes

Los componentes están organizados por tipo:

- **ui/** - Componentes base reutilizables (botones, inputs, etc.)
- **forms/** - Componentes específicos para formularios
- **common/** - Componentes comunes (Logo, CustomText, etc.)

### Hooks

En la carpeta `hooks/` se deben crear hooks personalizados para lógica reutilizable.

### Context

En `context/` se pueden crear providers de Context API para estado global.

### Types

En `types/` se definen interfaces y tipos TypeScript.

## 🎨 Estilos

El proyecto utiliza **NativeWind** para estilos, que trae los beneficios de Tailwind CSS a React Native.

### Paleta de Colores

```typescript
primary: "#4F7942"; // Verde
secondary: "#E19D38"; // Naranja
background: "#FBF6D8"; // Crema clara
surface: "#FEFEFE"; // Blanco
text: "#333333"; // Gris oscuro
```

Los colores están centralizados en `constants/colors.ts`.

## 📝 Convenciones de Código

### TypeScript

- ✅ Usar tipos e interfaces explícitas
- ✅ Evitar `any`
- ✅ Tipado estricto

### React Native

- ✅ Componentes funcionales únicamente
- ✅ Hooks antes que componentes de clase
- ✅ Un componente por archivo
- ✅ Mantener componentes pequeños y enfocados

### Nomenclatura

- **Componentes**: PascalCase (`Button.tsx`, `LoginForm.tsx`)
- **Hooks**: camelCase iniciando con `use` (`useAuth.ts`, `useForm.ts`)
- **Variables/funciones**: camelCase (`handleLogin()`, `userData`)
- **Constantes**: UPPER_SNAKE_CASE (`API_URL`, `MAX_LENGTH`)

### Imports

Ordenar por:

1. Librerías externas
2. Componentes
3. Hooks
4. Servicios
5. Utilidades
6. Tipos

## 🔐 Autenticación

El flujo de autenticación utiliza tokens JWT:

1. Usuario inicia sesión/se registra
2. Backend retorna token
3. Token se almacena en el estado global (Zustand)
4. Rutas protegidas verifican autenticación
5. Llamadas API incluyen token en headers

Ejemplo de uso:

```typescript
import { authService } from "@/services/auth";

const handleLogin = async (email: string, password: string) => {
  try {
    const response = await authService.login({ email, password });
    // Almacenar token y usuario
  } catch (error) {
    console.error("Error de login:", error);
  }
};
```

## 🚦 Enrutamiento

Usa **Expo Router** con enrutamiento basado en archivos:

- Carpetas con `()` son **grupos de rutas** (no aparecen en la URL)
- `_layout.tsx` define la estructura de navegación
- Archivos `.tsx` son rutas/pantallas

Ejemplo de navegación:

```typescript
import { router } from "expo-router";

// Navegar a una ruta
router.push("/home");

// Volver
router.back();

// Reemplazar
router.replace("/login");
```

## 📦 Dependencias Principales

- `react-native` - Framework base
- `expo` - Plataforma de desarrollo
- `expo-router` - Enrutamiento
- `nativewind` - Estilos
- `zustand` - Estado global
- `typescript` - Tipado

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
2. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
3. Push a la rama (`git push origin feature/AmazingFeature`)
4. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

## 📞 Contacto

Para preguntas o sugerencias, abre un issue en el repositorio.

---

**Última actualización:** Junio 2026
